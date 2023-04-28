import React, { useState } from 'react';

import { Button, Box, Paper } from '@mui/material';
import { UserManagementSubCRUDTableContainer } from '../components/UserManagementSubCRUDTableContainer';

import { useQueryResponse } from '../core/QueryResponseProvider';
import { CreateUserDrawer } from '../components/create-user/CreateUserDrawer';
import { CreateUserStepperFormDialog } from '../components/create-user/CreateUserStepperFormDialog';
import { useListView } from '../core/ListViewProvider';
import { EnhancedTableToolbar } from '../components/EnhancedTableToolbar';
import { useMutation, useQueryClient } from 'react-query';
import { deleteSelectedUsers } from '../core/_requests';
import { QUERIES } from '../helpers';
import UsersManagementActionsCell from '../components/cells/UsersManagementActionsCell';
import { UndoSnackbar } from '../components/UndoSnackbar';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';

function UsersManagementSubCRUDPage() {
  const [open2, setOpen2] = useState(false);
  const [open4, setOpen4] = useState(false);
  const queryClient = useQueryClient();
  const { query } = useQueryResponse();
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  const [openUndoSnackbar, setOpenUndoSnackbar] = useState(false);
  const [deleteId, setDeleteId] = useState('-1');

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
  const handleClickOpe4 = () => {
    setOpen4(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  // -------------------

  return (
    <>
      <Helmet>
        <title>Users Management Sub CRUD Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Sub CRUD Page`} breadcrumbs={breadcrumbs} />
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
              Add new user (Modal)
            </Button>
            <Button
              sx={{
                position: 'absolute',
                top: 2,
                right: 200
              }}
              onClick={(e) => {
                handleClickOpe4();
              }}>
              Add new user (Drawer)
            </Button>
            <EnhancedTableToolbar
              numSelected={selected.length}
              handleSelectedUsersDelete={() => {
                deleteSelectedItems.mutateAsync();
              }}
            />
            <UserManagementSubCRUDTableContainer>
              {(id) => (
                <UsersManagementActionsCell
                  id={id}
                  deleteHandler={() => {
                    setDeleteId(id);
                    setOpenUndoSnackbar(true);
                  }}
                />
              )}
            </UserManagementSubCRUDTableContainer>
          </Paper>
          <CreateUserStepperFormDialog
            open={open2}
            handleClose={handleClose2}></CreateUserStepperFormDialog>
          <CreateUserDrawer open={open4} handleClose={handleClose4}></CreateUserDrawer>
          <UndoSnackbar
            userId={deleteId}
            open={openUndoSnackbar}
            onClose={() => {
              setOpenUndoSnackbar(false);
            }}></UndoSnackbar>
        </Box>
      </Content>
    </>
  );
}

export { UsersManagementSubCRUDPage };
