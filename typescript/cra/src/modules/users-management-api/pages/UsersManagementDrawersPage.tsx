import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { Button, Card } from '@mui/material';
import { NAV_VERTICAL } from 'configs';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Content, Intro, Toolbar } from '../../../layouts/default';
import {
  CreateUserDrawer,
  EnhancedTableToolbar,
  UserManagementTableContainer
} from '../components';
import { UserManagementDrawerActionsCell } from '../components/cells/UserManagementDrawerActionsCell';

function UsersManagementDrawersPage() {
  const [openCreateUserDrawerState, setOpenCreateUserDrawerState] = useState(false);
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
            <UserManagementTableContainer>
              {(id) => <UserManagementDrawerActionsCell id={id}></UserManagementDrawerActionsCell>}
            </UserManagementTableContainer>
          </Card>
        </PageContainer>
        <CreateUserDrawer
          open={openCreateUserDrawerState}
          handleClose={() => {
            setOpenCreateUserDrawerState(false);
          }}
        ></CreateUserDrawer>
      </Content>
    </>
  );
}

export { UsersManagementDrawersPage };
