import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { Box, Button, Card } from '@mui/material';
import { NAV_VERTICAL } from 'configs';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Content, Intro, Toolbar } from '../../../layouts/default';
import {
  CreateUserDrawer,
  CreateUserStepperFormDialog,
  EnhancedTableToolbar,
  UndoActions,
  UserManagementSkeletonTableContainer,
  UsersManagementActionsCell
} from '../components';
import { restoreMultipleUsers, useQueryResponse } from '../core';

function UsersManagementSkeletonPage() {
  const { enqueueSnackbar } = useSnackbar();
  const [userStepperFormDialogOpenState, setUserStepperFormDialogOpenState] = useState(false);
  const [createUserDrawerOpenState, setCreateUserDrawerOpenState] = useState(false);
  const { refetch } = useQueryResponse();
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  const undoAction: (ids: string[]) => Promise<void> = async (ids: string[]) => {
    await restoreMultipleUsers(ids);
    refetch();
  };

  return (
    <>
      <Helmet>
        <title>Users Management Skeleton Loading Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Skeleton Loading Page`} breadcrumbs={breadcrumbs} />
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
                          ids={[id]}
                        ></UndoActions>
                      ),
                      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                      autoHideDuration: 7000
                    });
                  }}
                />
              )}
            </UserManagementSkeletonTableContainer>
          </Card>
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
        </PageContainer>
      </Content>
    </>
  );
}

export { UsersManagementSkeletonPage };
