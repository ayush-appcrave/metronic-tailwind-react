import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { Box, Button, Card } from '@mui/material';
import { NAV_VERTICAL } from 'configs';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Content, Intro, Toolbar } from '../../../layouts/default';
import {
  CreateUserPlainFormDialog,
  CreateUserStepperFormDialog,
  EnhancedTableToolbar,
  UserManagementTableContainer
} from '../components';
import { UserManagementModalOverlayActionCell } from '../components/cells/UserManagementModalOverlayActionCell';

function UsersManagementOverlayPage() {
  const [userStepperDialogOpenState, setUserStepperDialogOpenState] = useState(false);
  const [newUserOverlayModalOpenState, setNewUserOverlayModalOpenState] = useState(false);
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  return (
    <>
      <Helmet>
        <title>Users Management Overlay Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Overlay Page`} breadcrumbs={breadcrumbs} />
        <Box>
          <Button
            onClick={(e) => {
              setUserStepperDialogOpenState(true);
            }}
          >
            Add new user (Stepper)
          </Button>
          <Button
            onClick={(e) => {
              setNewUserOverlayModalOpenState(true);
            }}
          >
            Add new user (Plain form)
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
            <UserManagementTableContainer>
              {(id) => (
                <UserManagementModalOverlayActionCell
                  id={id}
                ></UserManagementModalOverlayActionCell>
              )}
            </UserManagementTableContainer>
          </Card>
        </PageContainer>
        <CreateUserStepperFormDialog
          open={userStepperDialogOpenState}
          handleClose={() => {
            setUserStepperDialogOpenState(false);
          }}
        ></CreateUserStepperFormDialog>
        <CreateUserPlainFormDialog
          open={newUserOverlayModalOpenState}
          handleClose={() => {
            setNewUserOverlayModalOpenState(false);
          }}
        ></CreateUserPlainFormDialog>
      </Content>
    </>
  );
}

export { UsersManagementOverlayPage };
