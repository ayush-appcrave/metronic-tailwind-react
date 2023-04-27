import React, { type ChangeEvent, useState } from 'react';

import { Button, type SelectChangeEvent, Box, Paper } from '@mui/material';
import { UserManagementTableContainer } from '../components/UserManagementTableContainer';

import { useQueryResponse } from '../core/QueryResponseProvider';
import { useQueryRequest } from '../core/QueryRequestProvider';
import { CreateUserStepperFormDialog } from '../components/create-user/CreateUserStepperFormDialog';
import { CreateUserPlainFormDialog } from '../components/create-user/CreateUserPlainFormDialog';
import { UpdateUserDialog } from '../components/edit-user/UpdateUserDialog';
import { ViewUserDialog } from '../components/view/ViewUserDialog';
import { useListView } from '../core/ListViewProvider';
import { EnhancedTableToolbar } from '../components/EnhancedTableToolbar';
import { useMutation, useQueryClient } from 'react-query';
import { deleteSelectedUsers } from '../core/_requests';
import { QUERIES } from '../helpers';
import { AlertDialog } from '../components/AlertDialog';
import { UndoSnackbar } from '../components/UndoSnackbar';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';

function UsersManagementOverlayPage() {
  const { updateState } = useQueryRequest();
  const [open2, setOpen2] = useState(false);
  const [updateUserIdState, setUpdateUserIdState] = useState('-1');
  const [newUserOverlayModalOpenState, setNewUserOverlayModalOpenState] = useState(false);
  const [viewUserModalOpenState, setViewUserModalOpenState] = useState(false);
  const [openDeleteDialogState, setOpenDeleteDialogState] = useState(false);
  const [updateUserModalOpenState, setUpdateUserModalOpenState] = useState(false);
  const [deleteUserIdState, setDeleteUserIdState] = useState('-1');
  const [viewUserIdState, setViewUserIdState] = useState('-1');
  const [openUndoSnackbar, setOpenUndoSnackbar] = useState(false);
  const [deleteId, setDeleteId] = useState('-1');
  const [roleFilter, setRoleFilter] = useState<'user' | 'admin' | undefined>(undefined);
  const [nameFilter, setNameFilter] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const { query } = useQueryResponse();
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  const { clearSelected, selected } = useListView();

  const deleteSelectedItems = useMutation(
    async () => {
      await deleteSelectedUsers(selected as string[]);
    },
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: () => {
        // ✅ update detail view directly
        queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
        clearSelected();
      }
    }
  );

  // -------------------

  const handleClickOpe2 = (id: string | undefined) => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleRoleFilterChange: (event: SelectChangeEvent) => void = (e: SelectChangeEvent) => {
    if (e.target.value !== 'all') {
      setRoleFilter(e.target.value as 'user' | 'admin');
      updateState({ role: e.target.value as 'user' | 'admin' });
    } else {
      setRoleFilter(undefined);
      updateState({ role: undefined });
    }
  };
  const handleNameFilterChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setNameFilter(e.target.value);
    updateState({ search: e.target.value });
  };
  // -------------------

  return (
    <>
      <Helmet>
        <title>Users Management Overlay Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Overlay Page`} breadcrumbs={breadcrumbs} />
      </Toolbar>

      <Content>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2, mt: 10, position: 'relative', paddingTop: '40px' }}>
            <Button
              sx={{
                position: 'absolute',
                top: 2,
                right: 2
              }}
              onClick={(e) => {
                handleClickOpe2(undefined);
              }}>
              Add new user (Stepper)
            </Button>
            <Button
              sx={{
                position: 'absolute',
                top: 2,
                right: 200
              }}
              onClick={(e) => {
                setNewUserOverlayModalOpenState(true);
              }}>
              Add new user (Plain form)
            </Button>
            <EnhancedTableToolbar
              numSelected={selected.length}
              handleRoleFilterChange={handleRoleFilterChange}
              roleFilter={roleFilter}
              handleNameFilterChange={handleNameFilterChange}
              nameFilter={nameFilter}
              handleSelectedUsersDelete={() => {
                deleteSelectedItems.mutateAsync();
              }}
            />
            <UserManagementTableContainer denseKey="OVERLAY_MODAL">
              {(id) => (
                <Box
                  sx={{
                    display: 'flex'
                  }}>
                  <Button
                    onClick={(e) => {
                      setUpdateUserIdState(id);
                      setUpdateUserModalOpenState(true);
                    }}>
                    Update
                  </Button>
                  <Button
                    onClick={(e) => {
                      setDeleteUserIdState(id);
                      setOpenDeleteDialogState(true);
                    }}>
                    Delete
                  </Button>
                  <Button
                    onClick={(e) => {
                      setViewUserIdState(id);
                      setViewUserModalOpenState(true);
                    }}>
                    View
                  </Button>
                </Box>
              )}
            </UserManagementTableContainer>
          </Paper>
          <CreateUserStepperFormDialog
            open={open2}
            handleClose={handleClose2}></CreateUserStepperFormDialog>
          <CreateUserPlainFormDialog
            open={newUserOverlayModalOpenState}
            handleClose={() => {
              setNewUserOverlayModalOpenState(false);
            }}></CreateUserPlainFormDialog>
          <UpdateUserDialog
            open={updateUserModalOpenState}
            userId={updateUserIdState}
            handleClose={() => {
              setUpdateUserModalOpenState(false);
            }}></UpdateUserDialog>
          <AlertDialog
            open={openDeleteDialogState}
            handleAgreeClose={() => {
              setOpenDeleteDialogState(false);
              setDeleteId(deleteUserIdState);
              setOpenUndoSnackbar(true);
            }}
            handleClose={() => {
              setOpenDeleteDialogState(false);
            }}
            userId={deleteUserIdState}></AlertDialog>
          <UndoSnackbar
            userId={deleteId}
            open={openUndoSnackbar}
            onClose={() => {
              setOpenUndoSnackbar(false);
            }}></UndoSnackbar>
          <ViewUserDialog
            open={viewUserModalOpenState}
            handleClose={() => {
              setViewUserModalOpenState(false);
            }}
            userId={viewUserIdState}></ViewUserDialog>
        </Box>
      </Content>
    </>
  );
}

export { UsersManagementOverlayPage };
