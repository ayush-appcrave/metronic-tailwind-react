import { IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';

import { KeenIcon } from '@/components/keenicons';
import { Nav, NavItem, NavItemButton, NavItemSub } from '@/components/nav';

import { restoreMultipleUsers, useQueryResponse } from '../../core';
import { AlertDialogDeleteUser } from '../alerts';
import { UpdateUserDialog } from '../edit-user/UpdateUserDialog';
import { UndoActions } from '../undo';

interface IUsersManagementActionsCellProps {
  id: string;
}

function UsersManagementActionsCell(props: IUsersManagementActionsCellProps) {
  const { refetch } = useQueryResponse();
  const { enqueueSnackbar } = useSnackbar();

  const undoAction: (ids: string[]) => Promise<void> = async (ids: string[]) => {
    try {
      await restoreMultipleUsers(ids);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = () => {
    enqueueSnackbar('User was deleted.', {
      action: (snackbarKey) => (
        <UndoActions
          snackbarKey={snackbarKey}
          undoAction={undoAction}
          ids={[props.id]}
        ></UndoActions>
      ),
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
      autoHideDuration: 7000
    });
  };
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  return (
    <>
      <Nav>
        <NavItem>
          <NavItemButton>
            <IconButton>
              <KeenIcon icon="dots-circle" />
            </IconButton>
          </NavItemButton>
          <NavItemSub
            toggle={{
              breakpoints: {
                up: {
                  md: 'hover'
                },
                down: {
                  md: 'click'
                }
              }
            }}
            menu={true}
            menuWidth="200px"
            menuProps={{
              anchorOrigin: {
                horizontal: 'right',
                vertical: 'bottom'
              },
              transformOrigin: {
                horizontal: 'right',
                vertical: 'top'
              }
            }}
          >
            <NavItem
              title="View"
              path={`/users-management/view/user/${props.id}`}
              icon={<KeenIcon icon="user" />}
            />
            <NavItem
              path={`/users-management/edit/user/${props.id}`}
              title="Edit"
              icon={<KeenIcon icon="user-edit" />}
            />
            <NavItem
              path="#"
              title="Edit (modal)"
              onLinkClick={(e) => {
                setEditModalOpen(true);
              }}
              icon={<KeenIcon icon="message-edit" />}
            />
            <NavItem
              path="#"
              onLinkClick={() => {
                setOpenDeleteDialog(true);
              }}
              title="Delete"
              icon={<KeenIcon icon="tablet-delete" />}
            />
          </NavItemSub>
        </NavItem>
      </Nav>

      <AlertDialogDeleteUser
        open={openDeleteDialog}
        handleAgreeClose={() => {
          setOpenDeleteDialog(false);
          handleDelete();
        }}
        handleClose={() => {
          setOpenDeleteDialog(false);
        }}
        userId={props.id}
      ></AlertDialogDeleteUser>
      <UpdateUserDialog
        open={editModalOpen}
        handleClose={() => {
          setEditModalOpen(false);
        }}
        userId={props.id}
      ></UpdateUserDialog>
    </>
  );
}

export { UsersManagementActionsCell };
