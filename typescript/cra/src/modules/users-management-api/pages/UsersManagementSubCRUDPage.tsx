import React, { useState } from 'react';

import { Button, Box, Card } from '@mui/material';
import {
  UserManagementSubCRUDTableContainer,
  CreateUserDrawer,
  CreateUserStepperFormDialog,
  EnhancedTableToolbar,
  UndoSnackbar,
  UsersManagementActionsCell
} from '../components';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from 'configs';
import { PageContainer } from '@components/page-container';

function UsersManagementSubCRUDPage() {
  const [userStepperFormDialogOpenState, setUserStepperFormDialogOpenState] = useState(false);
  const [createUserDrawerOpenState, setCreateUserDrawerOpenState] = useState(false);
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  const [openUndoSnackbar, setOpenUndoSnackbar] = useState(false);
  const [deleteId, setDeleteId] = useState('-1');

  return (
    <>
      <Helmet>
        <title>Users Management Sub CRUD Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Sub CRUD Page`} breadcrumbs={breadcrumbs} />
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
        <UndoSnackbar
          userId={deleteId}
          open={openUndoSnackbar}
          onClose={() => {
            setOpenUndoSnackbar(false);
          }}
        ></UndoSnackbar>
      </Content>
    </>
  );
}

export { UsersManagementSubCRUDPage };
