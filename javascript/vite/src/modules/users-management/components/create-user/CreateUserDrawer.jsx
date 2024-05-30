import { Drawer } from '@mui/material';
import { CreateUserForm } from './CreateUserForm';
function CreateUserDrawer(props) {
  return <Drawer open={props.open} onClose={props.handleClose} anchor="right" PaperProps={{
    sx: {
      width: '40%'
    }
  }}>
      <CreateUserForm open={props.open} handleClose={props.handleClose}></CreateUserForm>
    </Drawer>;
}
export { CreateUserDrawer };