import React, { useState } from 'react';

import { Button, Box, Paper } from '@mui/material';
import { UserManagementSkeletonTableContainer } from '../components/UserManagementSkeletonTableContainer';

import { useQueryResponse } from '../core/QueryResponseProvider';
import { CreateUserDrawer } from '../components/create-user/CreateUserDrawer';
import { useQueryRequest } from '../core/QueryRequestProvider';
import { CreateUserStepperFormDialog } from '../components/create-user/CreateUserStepperFormDialog';
import { useListView } from '../core/ListViewProvider';
import { EnhancedTableToolbar } from '../components/EnhancedTableToolbar';
import { useMutation, useQueryClient } from 'react-query';
import { deleteSelectedUsers, restoreMultipleUsers } from '../core/_requests';
import { QUERIES } from '../helpers';
import UsersManagementActionsCell from '../components/cells/UsersManagementActionsCell';
import { UndoActions } from '../components/UndoActions';
import { useSnackbar } from 'notistack';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';

function UsersManagementSkeletonPage() {
  const { enqueueSnackbar } = useSnackbar();
  const [open2, setOpen2] = useState(false);
  const [open4, setOpen4] = useState(false);
  const queryClient = useQueryClient();
  const { query, refetch } = useQueryResponse();
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  const { clearSelected, selected } = useListView();

  const undoAction: (ids: string[]) => Promise<void> = async (ids: string[]) => {
    await restoreMultipleUsers(ids);
    refetch();
  };

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
              undoAction={undoAction}></UndoActions>
          ),
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 7000
        });
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
        <title>Users Management Skeleton Loading Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Skeleton Loading Page`} breadcrumbs={breadcrumbs} />
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
            <UserManagementSkeletonTableContainer denseKey="MAIN">
              {(id) => (
                <UsersManagementActionsCell
                  id={id}
                  deleteHandler={() => {
                    enqueueSnackbar('User was deleted.', {
                      action: (snackbarKey) => (
                        <UndoActions
                          snackbarKey={snackbarKey}
                          undoAction={undoAction}
                          ids={[id]}></UndoActions>
                      ),
                      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                      autoHideDuration: 7000
                    });
                  }}
                />
              )}
            </UserManagementSkeletonTableContainer>
          </Paper>
          <CreateUserStepperFormDialog
            open={open2}
            handleClose={handleClose2}></CreateUserStepperFormDialog>
          <CreateUserDrawer open={open4} handleClose={handleClose4}></CreateUserDrawer>
        </Box>
      </Content>
    </>
  );
}

export { UsersManagementSkeletonPage };
