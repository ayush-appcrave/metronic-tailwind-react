import { Dialog } from '@mui/material';
import { CreateUserForm } from './CreateUserForm';
function CreateUserPlainFormDialog(props) {
  return <Dialog fullWidth maxWidth={'lg'} open={props.open} onClose={props.handleClose} sx={{
    padding: '70px',
    maxHeight: 'auto'
  }}>
      <CreateUserForm open={props.open} handleClose={props.handleClose}></CreateUserForm>
    </Dialog>;
}
export { CreateUserPlainFormDialog };