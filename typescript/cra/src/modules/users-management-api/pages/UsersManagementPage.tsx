import React, { useState } from 'react';

import { Box, Button, Card } from '@mui/material';
import { UserManagementTableContainer } from '../components/UserManagementTableContainer';

import { useQueryResponse } from '../core/QueryResponseProvider';
import { CreateUserDrawer } from '../components/create-user/CreateUserDrawer';
import { CreateUserStepperFormDialog } from '../components/create-user/CreateUserStepperFormDialog';
import { EnhancedTableToolbar } from '../components/EnhancedTableToolbar';
import { restoreMultipleUsers } from '../core/_requests';
import UsersManagementActionsCell from '../components/cells/UsersManagementActionsCell';
import { UndoActions } from '../components/UndoActions';
import { useSnackbar } from 'notistack';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { NAV_VERTICAL } from '../../../config/navs.config';

function UsersManagementPage() {
  const { enqueueSnackbar } = useSnackbar();
  const [open2, setOpen2] = useState(false);
  const [open4, setOpen4] = useState(false);
  const { refetch } = useQueryResponse();
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  const undoAction: (ids: string[]) => Promise<void> = async (ids: string[]) => {
    await restoreMultipleUsers(ids);
    refetch();
  };

  // -------------------

  const handleClickOpe2 = (id: string | undefined) => {
    setOpen2(true);
  };
  const handleClickOpe4 = () => {
    setOpen4(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  // -------------------

  return (
    <>
      <Helmet>
        <title>Users Management Default Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Default Page`} breadcrumbs={breadcrumbs} />
        <Box>
          <Button
            onClick={(e) => {
              handleClickOpe2(undefined);
            }}>
            Add new user (Modal)
          </Button>
          <Button
            onClick={(e) => {
              handleClickOpe4();
            }}>
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
            }}>
            <EnhancedTableToolbar />
            <UserManagementTableContainer denseKey="MAIN">
              {(id) => (
                <UsersManagementActionsCell
                  id={id}
                  deleteHandler={() => {
                    enqueueSnackbar('User was deleted.', {
                      action: (snackbarKey) => (
                        <UndoActions
                          snackbarKey={snackbarKey}
                          undoAction={undoAction}
                          ids={[id]}></UndoActions>
                      ),
                      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                      autoHideDuration: 7000
                    });
                  }}
                />
              )}
            </UserManagementTableContainer>
          </Card>
          <CreateUserStepperFormDialog
            open={open2}
            handleClose={handleClose2}></CreateUserStepperFormDialog>
          <CreateUserDrawer open={open4} handleClose={handleClose4}></CreateUserDrawer>
        </PageContainer>
      </Content>
    </>
  );
}

export { UsersManagementPage };
