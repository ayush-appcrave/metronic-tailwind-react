import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
function AlertDialogDeleteMultiple(props) {
  return <Dialog open={props.open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {`Are you sure you want to delete selected users?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.closeHandler}>Disagree</Button>
        <Button onClick={props.agreeHandler} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>;
}
export { AlertDialogDeleteMultiple };