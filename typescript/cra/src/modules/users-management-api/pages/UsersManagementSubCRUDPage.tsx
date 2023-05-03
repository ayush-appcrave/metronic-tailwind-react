import React, { useState } from 'react';

import { Button, Box, Card } from '@mui/material';
import { UserManagementSubCRUDTableContainer } from '../components/UserManagementSubCRUDTableContainer';

import { CreateUserDrawer } from '../components/create-user/CreateUserDrawer';
import { CreateUserStepperFormDialog } from '../components/create-user/CreateUserStepperFormDialog';
import { EnhancedTableToolbar } from '../components/EnhancedTableToolbar';
import UsersManagementActionsCell from '../components/cells/UsersManagementActionsCell';
import { UndoSnackbar } from '../components/UndoSnackbar';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';
import { PageContainer } from '@components/page-container';

function UsersManagementSubCRUDPage() {
  const [open2, setOpen2] = useState(false);
  const [open4, setOpen4] = useState(false);
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  const [openUndoSnackbar, setOpenUndoSnackbar] = useState(false);
  const [deleteId, setDeleteId] = useState('-1');

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
          open={open2}
          handleClose={handleClose2}></CreateUserStepperFormDialog>
        <CreateUserDrawer open={open4} handleClose={handleClose4}></CreateUserDrawer>
        <UndoSnackbar
          userId={deleteId}
          open={openUndoSnackbar}
          onClose={() => {
            setOpenUndoSnackbar(false);
          }}></UndoSnackbar>
      </Content>
    </>
  );
}

export { UsersManagementSubCRUDPage };
