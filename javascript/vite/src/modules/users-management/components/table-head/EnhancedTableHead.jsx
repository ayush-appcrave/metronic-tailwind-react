import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { TableActionsToolbar, TableHeadCustom } from '@/components/table';
import { deleteSelectedUsers, headCells, restoreMultipleUsers, useListView, useQueryResponse } from '../../core';
import { QUERIES } from '../../helpers';
import { AlertDialogDeleteMultiple } from '..';
import { UndoActions } from '../undo';
function EnhancedTableHead(props) {
  const {
    clearSelected
  } = useListView();
  const {
    enqueueSnackbar
  } = useSnackbar();
  const queryClient = useQueryClient();
  const {
    query,
    refetch
  } = useQueryResponse();
  const {
    order,
    orderBy,
    onRequestSort
  } = props;
  const createSortHandler = property => {
    onRequestSort(property);
  };
  const [openDialogState, setOpenDialogState] = useState(false);
  const {
    isAllSelected,
    onSelectAll,
    selected
  } = useListView();
  const deleteSelectedItems = useMutation(async () => {
    await deleteSelectedUsers(selected);
  }, {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
      enqueueSnackbar(`${selected.length} users was deleted.`, {
        action: snackbarKey => <UndoActions ids={selected} snackbarKey={snackbarKey} undoAction={undoAction}></UndoActions>,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        autoHideDuration: 7000
      });
      clearSelected();
    }
  });
  const undoAction = async ids => {
    await restoreMultipleUsers(ids);
    refetch();
  };
  return <>
      <TableHeadCustom tableKey="user-table" withCheckbox headCells={headCells} allSelected={isAllSelected} onSelectAll={onSelectAll} selected={selected} clearSelected={clearSelected} orderBy={orderBy} order={order} onSort={createSortHandler}>
        <TableActionsToolbar colSpan={8} selected={selected}>
          <Tooltip title="Delete">
            <IconButton onClick={() => {
            setOpenDialogState(true);
          }}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </TableActionsToolbar>
      </TableHeadCustom>

      <AlertDialogDeleteMultiple open={openDialogState} agreeHandler={() => {
      setOpenDialogState(false);
      deleteSelectedItems.mutateAsync();
    }} closeHandler={() => {
      setOpenDialogState(false);
    }}></AlertDialogDeleteMultiple>
    </>;
}
export { EnhancedTableHead };