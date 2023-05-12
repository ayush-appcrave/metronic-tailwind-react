import React, { useState } from 'react';

import { Button, Box, Card } from '@mui/material';
import { UserManagementTableContainer } from '../components/UserManagementTableContainer';

import { CreateUserStepperFormDialog } from '../components/create-user/CreateUserStepperFormDialog';
import { CreateUserPlainFormDialog } from '../components/create-user/CreateUserPlainFormDialog';
import { UpdateUserDialog } from '../components/edit-user/UpdateUserDialog';
import { ViewUserDialog } from '../components/view/ViewUserDialog';
import { EnhancedTableToolbar } from '../components/EnhancedTableToolbar';
import { AlertDialog } from '../components/AlertDialog';
import { UndoSnackbar } from '../components/UndoSnackbar';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';
import { PageContainer } from '@components/page-container';

function UsersManagementOverlayPage() {
  const [userStepperDialogOpenState, setUserStepperDialogOpenState] = useState(false);
  const [updateUserIdState, setUpdateUserIdState] = useState('-1');
  const [newUserOverlayModalOpenState, setNewUserOverlayModalOpenState] = useState(false);
  const [viewUserModalOpenState, setViewUserModalOpenState] = useState(false);
  const [openDeleteDialogState, setOpenDeleteDialogState] = useState(false);
  const [updateUserModalOpenState, setUpdateUserModalOpenState] = useState(false);
  const [deleteUserIdState, setDeleteUserIdState] = useState('-1');
  const [viewUserIdState, setViewUserIdState] = useState('-1');
  const [openUndoSnackbar, setOpenUndoSnackbar] = useState(false);
  const [deleteId, setDeleteId] = useState('-1');
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
            }}>
            Add new user (Stepper)
          </Button>
          <Button
            onClick={(e) => {
              setNewUserOverlayModalOpenState(true);
            }}>
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
            }}>
            <EnhancedTableToolbar />
            <UserManagementTableContainer denseKey="OVERLAY_MODAL">
              {(id) => (
                <Box
                  sx={{
                    display: 'flex'
                  }}>
                  <Button
                    onClick={(e) => {
                      setUpdateUserIdState(id);
                      setUpdateUserModalOpenState(true);
                    }}>
                    Update
                  </Button>
                  <Button
                    onClick={(e) => {
                      setDeleteUserIdState(id);
                      setOpenDeleteDialogState(true);
                    }}>
                    Delete
                  </Button>
                  <Button
                    onClick={(e) => {
                      setViewUserIdState(id);
                      setViewUserModalOpenState(true);
                    }}>
                    View
                  </Button>
                </Box>
              )}
            </UserManagementTableContainer>
          </Card>
        </PageContainer>
        <CreateUserStepperFormDialog
          open={userStepperDialogOpenState}
          handleClose={() => {
            setUserStepperDialogOpenState(false);
          }}></CreateUserStepperFormDialog>
        <CreateUserPlainFormDialog
          open={newUserOverlayModalOpenState}
          handleClose={() => {
            setNewUserOverlayModalOpenState(false);
          }}></CreateUserPlainFormDialog>
        <UpdateUserDialog
          open={updateUserModalOpenState}
          userId={updateUserIdState}
          handleClose={() => {
            setUpdateUserModalOpenState(false);
          }}></UpdateUserDialog>
        <AlertDialog
          open={openDeleteDialogState}
          handleAgreeClose={() => {
            setOpenDeleteDialogState(false);
            setDeleteId(deleteUserIdState);
            setOpenUndoSnackbar(true);
          }}
          handleClose={() => {
            setOpenDeleteDialogState(false);
          }}
          userId={deleteUserIdState}></AlertDialog>
        <UndoSnackbar
          userId={deleteId}
          open={openUndoSnackbar}
          onClose={() => {
            setOpenUndoSnackbar(false);
          }}></UndoSnackbar>
        <ViewUserDialog
          open={viewUserModalOpenState}
          handleClose={() => {
            setViewUserModalOpenState(false);
          }}
          userId={viewUserIdState}></ViewUserDialog>
      </Content>
    </>
  );
}

export { UsersManagementOverlayPage };
