import { Drawer } from '@mui/material';
import { CreateUserForm } from 'modules/users-management';

interface CreateUserDrawerProps {
  open: boolean;
  handleClose: () => void;
}

function CreateUserDrawer(props: CreateUserDrawerProps) {
  return (
    <Drawer
      open={props.open}
      onClose={props.handleClose}
      anchor="right"
      PaperProps={{
        sx: {
          width: '40%'
        }
      }}
    >
      <CreateUserForm open={props.open} handleClose={props.handleClose}></CreateUserForm>
    </Drawer>
  );
}

export { CreateUserDrawer };
