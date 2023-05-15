import React, { type ChangeEvent } from 'react';
import { type User } from '../core/_models';

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
import { TableHeadCustom } from '@components/table';
import { Box, TableCell, Tooltip, IconButton } from '@mui/material';

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (property: keyof User | null) => void;
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
  const createSortHandler = (property: keyof User | null) => {
    onRequestSort(property);
  };

  const { isAllSelected, onSelectAll, selected } = useListView();

  const deleteSelectedItems = useMutation(
    async () => {
      await deleteSelectedUsers(selected);
    },
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: () => {
        // ✅ update detail view directly
        queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
        enqueueSnackbar(`${selected.length} users was deleted.`, {
          action: (snackbarKey) => (
            <UndoActions
              ids={selected}
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
    <TableHeadCustom
      tableKey="user-table"
      withCheckbox
      headCells={headCells}
      allSelected={isAllSelected}
      onSelectAll={onSelectAll}
      selected={selected}
      clearSelected={clearSelected}
      orderBy={orderBy}
      order={order}
      onSort={createSortHandler}
    >
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
    </TableHeadCustom>
  );
}

export { EnhancedTableHead };
