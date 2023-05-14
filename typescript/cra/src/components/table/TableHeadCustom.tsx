import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { MouseEventHandler, ReactNode } from 'react';
import { HeadCell, Order } from '@components/table/types';

interface TableHeadCustomProps<T> {
  tableKey: string;
  selected: T[];
  allSelected: boolean;
  clearSelected: () => void;
  onSelectAll: () => void;
  headCells: Array<HeadCell<T>>;
  orderBy: string;
  order: Order;
  onSort: (id: string | number | symbol) => MouseEventHandler<HTMLAnchorElement>;
}

const TableHeadCustom = <T extends object>(
  props: TableHeadCustomProps<T> & { children: ReactNode }
) => {
  return (
    <TableHead>
      <TableRow>
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
        {props.selected.length > 0 && props.children}
        {!props.selected.length &&
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
                onClick={props.onSort(String(headCell.id))}
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
