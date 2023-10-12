import { useNavBreadcrumbs } from '@/components/nav';
import { PageContainer } from '@/components/page-container';
import { Box, Button, Card } from '@mui/material';
import { NAV_VERTICAL } from '@/config';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Content, Intro, Toolbar } from '../../../layouts/default';
import {
  CreateUserDrawer,
  CreateUserStepperFormDialog,
  EnhancedTableToolbar,
  UserManagementInlineEditingTableContainer
} from '../components';

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
