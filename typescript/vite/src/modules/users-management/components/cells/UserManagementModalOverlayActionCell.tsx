import { Box, Button } from '@mui/material';
import {
  AlertDialogDeleteUser,
  UndoSnackbar,
  UpdateUserDialog,
  ViewUserDialog
} from 'modules/users-management';
import { useState } from 'react';

interface IUserManagementModalOverlayActionCellProps {
  id: string;
}

function UserManagementModalOverlayActionCell(props: IUserManagementModalOverlayActionCellProps) {
  const [updateUserIdState, setUpdateUserIdState] = useState('-1');
  const [viewUserModalOpenState, setViewUserModalOpenState] = useState(false);
  const [openDeleteDialogState, setOpenDeleteDialogState] = useState(false);
  const [updateUserModalOpenState, setUpdateUserModalOpenState] = useState(false);
  const [deleteUserIdState, setDeleteUserIdState] = useState('-1');
  const [viewUserIdState, setViewUserIdState] = useState('-1');
  const [openUndoSnackbar, setOpenUndoSnackbar] = useState(false);
  const [deleteId, setDeleteId] = useState('-1');

  return (
    <>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <Button
          onClick={(e) => {
            setUpdateUserIdState(props.id);
            setUpdateUserModalOpenState(true);
          }}
        >
          Update
        </Button>
        <Button
          onClick={(e) => {
            setDeleteUserIdState(props.id);
            setOpenDeleteDialogState(true);
          }}
        >
          Delete
        </Button>
        <Button
          onClick={(e) => {
            setViewUserIdState(props.id);
            setViewUserModalOpenState(true);
          }}
        >
          View
        </Button>
      </Box>

      <UpdateUserDialog
        open={updateUserModalOpenState}
        userId={updateUserIdState}
        handleClose={() => {
          setUpdateUserModalOpenState(false);
        }}
      ></UpdateUserDialog>
      <AlertDialogDeleteUser
        open={openDeleteDialogState}
        handleAgreeClose={() => {
          setOpenDeleteDialogState(false);
          setDeleteId(deleteUserIdState);
          setOpenUndoSnackbar(true);
        }}
        handleClose={() => {
          setOpenDeleteDialogState(false);
        }}
        userId={deleteUserIdState}
      ></AlertDialogDeleteUser>
      <UndoSnackbar
        userId={deleteId}
        open={openUndoSnackbar}
        onClose={() => {
          setOpenUndoSnackbar(false);
        }}
      ></UndoSnackbar>
      <ViewUserDialog
        open={viewUserModalOpenState}
        handleClose={() => {
          setViewUserModalOpenState(false);
        }}
        userId={viewUserIdState}
      ></ViewUserDialog>
    </>
  );
}

export { UserManagementModalOverlayActionCell };
