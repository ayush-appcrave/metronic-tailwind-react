import { HeadCell, Order } from '@components/table/types';
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { visuallyHidden } from '@mui/utils';
import { ReactNode } from 'react';

interface RequiredSelectProps<T> {
  tableKey: string;
  withCheckbox?: true;
  selected: Array<string | number>;
  allSelected: boolean;
  clearSelected: () => void;
  onSelectAll: () => void;
  headCells: Array<HeadCell<T>>;
  orderBy: string;
  order: Order;
  onSort: (property: keyof T | null) => void;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

interface OptionalSelectProps<T> {
  tableKey: string;
  withCheckbox?: false;
  selected?: Array<string | number>;
  allSelected?: boolean;
  clearSelected?: () => void;
  onSelectAll?: () => void;
  headCells: Array<HeadCell<T>>;
  orderBy: string;
  order: Order;
  onSort: (property: keyof T | null) => void;
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

type TableHeadCustomProps<T> = RequiredSelectProps<T> | OptionalSelectProps<T>;

const TableHeadCustom = <T extends object>(props: TableHeadCustomProps<T>) => {
  return (
    <TableHead sx={props.sx}>
      <TableRow>
        {props.withCheckbox && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              size="small"
              checked={props.allSelected}
              indeterminate={!props.allSelected && props.selected.length > 0}
              onChange={
                !props.allSelected && props.selected.length > 0
                  ? props.clearSelected
                  : props.onSelectAll
              }
              inputProps={{
                'aria-label': 'select all desserts'
              }}
            />
          </TableCell>
        )}
        {!!props.selected?.length && props.children}
        {(!props.selected?.length || !props.withCheckbox) &&
          props.headCells.map((headCell) => (
            <TableCell
              key={`${props.tableKey}-${String(headCell.id)}`}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={props.orderBy === headCell.id ? props.order : false}
              width={headCell.width}
            >
              <TableSortLabel
                hideSortIcon={headCell.hideSortIcon}
                active={props.orderBy === headCell.id}
                direction={props.orderBy === headCell.id ? props.order : 'asc'}
                onClick={(event) => {
                  props.onSort(headCell.id);
                }}
              >
                {headCell.label}
                {props.orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {props.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
};

export { TableHeadCustom };
