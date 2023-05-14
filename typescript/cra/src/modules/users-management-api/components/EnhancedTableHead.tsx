import React, { type FormEvent, type ChangeEvent } from 'react';
import { type User } from '../core/_models';
import {
  Box,
  Checkbox,
  IconButton,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { type Order } from '@components/table/types';
import { headCells } from '../core/headCellConfiguration';
import { useListView } from '../core/ListViewProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQueryClient } from 'react-query';
import { deleteSelectedUsers, restoreMultipleUsers } from '../core/_requests';
import { QUERIES } from '../helpers';
import { UndoActions } from './UndoActions';
import { useSnackbar } from 'notistack';
import { useQueryResponse } from '../core/QueryResponseProvider';

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: FormEvent<unknown>, property: keyof User | null) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { clearSelected } = useListView();
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { query, refetch } = useQueryResponse();
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof User | null) => (event: FormEvent<unknown>) => {
    onRequestSort(event, property);
  };

  const { isAllSelected, onSelectAll, selected } = useListView();

  const deleteSelectedItems = useMutation(
    async () => {
      await deleteSelectedUsers(selected as string[]);
    },
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: () => {
        // ✅ update detail view directly
        queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
        enqueueSnackbar(`${selected.length} users was deleted.`, {
          action: (snackbarKey) => (
            <UndoActions
              ids={selected as string[]}
              snackbarKey={snackbarKey}
              undoAction={undoAction}
            ></UndoActions>
          ),
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 7000
        });
        clearSelected();
      }
    }
  );

  const undoAction: (ids: string[]) => Promise<void> = async (ids: string[]) => {
    await restoreMultipleUsers(ids);
    refetch();
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            size="small"
            checked={isAllSelected}
            indeterminate={!isAllSelected && selected.length > 0}
            onChange={!isAllSelected && selected.length > 0 ? clearSelected : onSelectAll}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {selected.length > 0 && (
          <TableCell colSpan={8}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>{selected.length} selected</Box>
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => {
                    deleteSelectedItems.mutateAsync();
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </TableCell>
        )}
        {!selected.length &&
          headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
              width={headCell.width}
            >
              <TableSortLabel
                hideSortIcon={headCell.hideSortIcon}
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
}

export { EnhancedTableHead };
