import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { Box, Button, Card } from '@mui/material';
import { NAV_VERTICAL } from 'configs';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Content, Intro, Toolbar } from '../../../layouts/default';
import {
  CreateUserDrawer,
  EnhancedTableToolbar,
  UpdateUserDrawer,
  UserManagementTableContainer,
  ViewUserDrawer
} from '../components';

function UsersManagementDrawersPage() {
  const [openCreateUserDrawerState, setOpenCreateUserDrawerState] = useState(false);
  const [openUpdateDrawerState, setOpenUpdateDrawerState] = useState<boolean>(false);
  const [openViewDrawerState, setOpenViewDrawerState] = useState<boolean>(false);
  const [updateUserIdState, setUpdateUserIdState] = useState('-1');
  const [viewUserIdState, setViewUserIdState] = useState('-1');
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  return (
    <>
      <Helmet>
        <title>Users Management Drawers Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Drawers Page`} breadcrumbs={breadcrumbs} />
        <Button
          onClick={(e) => {
            setOpenCreateUserDrawerState(true);
          }}
        >
          Add new user
        </Button>
      </Toolbar>

      <Content>
        <PageContainer>
          <Card
            sx={{
              mb: 2,
              paddingTop: '5px'
            }}
          >
            <EnhancedTableToolbar />
            <UserManagementTableContainer denseKey="DRAWERS">
              {(id) => (
                <Box
                  sx={{
                    display: 'flex'
                  }}
                >
                  <Button
                    onClick={(e) => {
                      setUpdateUserIdState(id);
                      setOpenUpdateDrawerState(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={(e) => {
                      setViewUserIdState(id);
                      setOpenViewDrawerState(true);
                    }}
                  >
                    View
                  </Button>
                </Box>
              )}
            </UserManagementTableContainer>
          </Card>
        </PageContainer>
        <CreateUserDrawer
          open={openCreateUserDrawerState}
          handleClose={() => {
            setOpenCreateUserDrawerState(false);
          }}
        ></CreateUserDrawer>
        <UpdateUserDrawer
          open={openUpdateDrawerState}
          userId={updateUserIdState}
          handleClose={() => {
            setOpenUpdateDrawerState(false);
          }}
        ></UpdateUserDrawer>
        <ViewUserDrawer
          open={openViewDrawerState}
          userId={viewUserIdState}
          handleClose={() => {
            setOpenViewDrawerState(false);
          }}
        ></ViewUserDrawer>
      </Content>
    </>
  );
}

export { UsersManagementDrawersPage };
