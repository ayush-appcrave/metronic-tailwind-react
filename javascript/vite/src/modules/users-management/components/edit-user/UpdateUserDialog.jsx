import { Close } from '@mui/icons-material';
import { Button, Dialog, Typography } from '@mui/material';
import { UpdateUserFormWrapper } from './UpdateUserFormWrapper';
function UpdateUserDialog(props) {
  return <Dialog fullWidth={true} maxWidth={'lg'} open={props.open} onClose={props.handleClose} sx={{
    padding: '70px'
  }}>
      <Button onClick={() => {
      props.handleClose();
    }} sx={{
      position: 'absolute',
      right: 5,
      top: 5
    }}>
        <Close></Close>
      </Button>
      <Typography sx={{
      marginTop: '30px',
      fontSize: '40px',
      textAlign: 'center'
    }}>
        Update user info
      </Typography>
      <UpdateUserFormWrapper userId={props.userId} handleExit={props.handleClose}></UpdateUserFormWrapper>
    </Dialog>;
}
export { UpdateUserDialog };