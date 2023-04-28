import { useState } from 'react';

import { Button, Box, Paper } from '@mui/material';
import { UserManagementTableContainer } from '../components/UserManagementTableContainer';

import { useQueryResponse } from '../core/QueryResponseProvider';
import { CreateUserDrawer } from '../components/create-user/CreateUserDrawer';
import { useListView } from '../core/ListViewProvider';
import { EnhancedTableToolbar } from '../components/EnhancedTableToolbar';
import { useMutation, useQueryClient } from 'react-query';
import { deleteSelectedUsers } from '../core/_requests';
import { QUERIES } from '../helpers';
import { UpdateUserDrawer } from '../components/edit-user/UpdateUserDrawer';
import { ViewUserDrawer } from '../components/view/ViewUserDrawer';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';

function UsersManagementDrawersPage() {
  const [open4, setOpen4] = useState(false);
  const [openUpdateDrawerState, setOpenUpdateDrawerState] = useState<boolean>(false);
  const [openViewDrawerState, setOpenViewDrawerState] = useState<boolean>(false);
  const [updateUserIdState, setUpdateUserIdState] = useState('-1');
  const [viewUserIdState, setViewUserIdState] = useState('-1');
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

  const handleClickOpe4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  // -------------------

  return (
    <>
      <Helmet>
        <title>Users Management Drawers Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Drawers Page`} breadcrumbs={breadcrumbs} />
      </Toolbar>

      <Content>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2, mt: 10, position: 'relative', paddingTop: '40px' }}>
            <Button
              sx={{
                position: 'absolute',
                top: 2,
                right: 20
              }}
              onClick={(e) => {
                handleClickOpe4();
              }}>
              Add new user
            </Button>
            <EnhancedTableToolbar
              numSelected={selected.length}
              handleSelectedUsersDelete={() => {
                deleteSelectedItems.mutateAsync();
              }}
            />
            <UserManagementTableContainer denseKey="DRAWERS">
              {(id) => (
                <Box
                  sx={{
                    display: 'flex'
                  }}>
                  <Button
                    onClick={(e) => {
                      setUpdateUserIdState(id);
                      setOpenUpdateDrawerState(true);
                    }}>
                    Edit
                  </Button>
                  <Button
                    onClick={(e) => {
                      setViewUserIdState(id);
                      setOpenViewDrawerState(true);
                    }}>
                    View
                  </Button>
                </Box>
              )}
            </UserManagementTableContainer>
          </Paper>
          <CreateUserDrawer open={open4} handleClose={handleClose4}></CreateUserDrawer>
          <UpdateUserDrawer
            open={openUpdateDrawerState}
            userId={updateUserIdState}
            handleClose={() => {
              setOpenUpdateDrawerState(false);
            }}></UpdateUserDrawer>
          <ViewUserDrawer
            open={openViewDrawerState}
            userId={viewUserIdState}
            handleClose={() => {
              setOpenViewDrawerState(false);
            }}></ViewUserDrawer>
        </Box>
      </Content>
    </>
  );
}

export { UsersManagementDrawersPage };
