import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Menu, MenuItem } from '@mui/material';
import { UpdateUserDialog } from '../edit-user/UpdateUserDialog';
import { AlertDialogDeleteUser } from '../alerts/AlertDialogDeleteUser';

interface IUsersManagementActionsCellProps {
  id: string;
  deleteHandler: (state: boolean) => void;
}

function UsersManagementActionsCell(props: IUsersManagementActionsCellProps) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const open = Boolean(anchorEl);

  const handleHover = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUserEdit = () => {
    navigate(`/users-management/edit/user/${props.id}`);
  };

  const handleUserView = () => {
    navigate(`/users-management/view/user/${props.id}`);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleHover}
      >
        Actions
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={handleUserView}>View</MenuItem>
        <MenuItem onClick={handleUserEdit}>Edit</MenuItem>
        <MenuItem
          onClick={(e) => {
            setEditModalOpen(true);
          }}
        >
          Edit In Modal
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenDeleteDialog(true);
          }}
        >
          Delete
        </MenuItem>
      </Menu>

      <AlertDialogDeleteUser
        open={openDeleteDialog}
        handleAgreeClose={() => {
          setOpenDeleteDialog(false);
          props.deleteHandler(true);
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

export default UsersManagementActionsCell;
