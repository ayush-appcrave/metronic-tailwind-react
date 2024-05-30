import { Dialog } from '@mui/material';
import CreateUserStepperForm from './CreateUserStepperForm';
function CreateUserStepperFormDialog(props) {
  return <Dialog fullWidth maxWidth={'lg'} open={props.open} onClose={props.handleClose} sx={{
    padding: '70px',
    maxHeight: 'auto'
  }}>
      <CreateUserStepperForm open={props.open} handleClose={props.handleClose}></CreateUserStepperForm>
    </Dialog>;
}
export { CreateUserStepperFormDialog };