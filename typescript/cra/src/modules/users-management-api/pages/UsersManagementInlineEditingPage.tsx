import { useState } from 'react';

import { Button, Box, Card } from '@mui/material';
import {
  UserManagementInlineEditingTableContainer,
  CreateUserDrawer,
  CreateUserStepperFormDialog,
  EnhancedTableToolbar
} from '../components';

import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from 'configs';
import { PageContainer } from '@components/page-container';

function UsersManagementInlineEditingPage() {
  const [userStepperFormDialogOpenState, setUserStepperFormDialogOpenState] = useState(false);
  const [createUserDrawerOpenState, setCreateUserDrawerOpenState] = useState(false);
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  return (
    <>
      <Helmet>
        <title>Users Management Inline Editing Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Inline Editing Page`} breadcrumbs={breadcrumbs} />
        <Box>
          <Button
            onClick={(e) => {
              setUserStepperFormDialogOpenState(true);
            }}
          >
            Add new user (Modal)
          </Button>
          <Button
            onClick={(e) => {
              setCreateUserDrawerOpenState(true);
            }}
          >
            Add new user (Drawer)
          </Button>
        </Box>
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
            <UserManagementInlineEditingTableContainer></UserManagementInlineEditingTableContainer>
          </Card>
        </PageContainer>
        <CreateUserStepperFormDialog
          open={userStepperFormDialogOpenState}
          handleClose={() => {
            setUserStepperFormDialogOpenState(false);
          }}
        ></CreateUserStepperFormDialog>
        <CreateUserDrawer
          open={createUserDrawerOpenState}
          handleClose={() => {
            setCreateUserDrawerOpenState(false);
          }}
        ></CreateUserDrawer>
      </Content>
    </>
  );
}

export { UsersManagementInlineEditingPage };
