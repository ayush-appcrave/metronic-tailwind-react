import { useState } from 'react';

import { Button, Box, Card } from '@mui/material';
import { UserManagementTableContainer } from '../components/UserManagementTableContainer';

import { CreateUserDrawer } from '../components/create-user/CreateUserDrawer';
import { EnhancedTableToolbar } from '../components/EnhancedTableToolbar';
import { UpdateUserDrawer } from '../components/edit-user/UpdateUserDrawer';
import { ViewUserDrawer } from '../components/view/ViewUserDrawer';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';
import { PageContainer } from '@components/page-container';

function UsersManagementDrawersPage() {
  const [open4, setOpen4] = useState(false);
  const [openUpdateDrawerState, setOpenUpdateDrawerState] = useState<boolean>(false);
  const [openViewDrawerState, setOpenViewDrawerState] = useState<boolean>(false);
  const [updateUserIdState, setUpdateUserIdState] = useState('-1');
  const [viewUserIdState, setViewUserIdState] = useState('-1');
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  const handleClickOpe4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  return (
    <>
      <Helmet>
        <title>Users Management Drawers Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Drawers Page`} breadcrumbs={breadcrumbs} />
        <Button
          onClick={(e) => {
            handleClickOpe4();
          }}>
          Add new user
        </Button>
      </Toolbar>

      <Content>
        <PageContainer>
          <Card
            sx={{
              mb: 2,
              paddingTop: '5px'
            }}>
            <EnhancedTableToolbar />
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
          </Card>
        </PageContainer>
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
      </Content>
    </>
  );
}

export { UsersManagementDrawersPage };
