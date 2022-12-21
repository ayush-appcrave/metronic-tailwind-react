import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

interface AlertDialogProps {
    open: boolean;
    handleClose: () => void
    userId: number | string;
    handleDelete: (id:number|string) => void
}

function AlertDialog(props:AlertDialogProps) {
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {`Are you sure you want to delete user with ID ${props.userId}?`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => props.handleClose()}>Disagree</Button>
                <Button onClick={(e) => props.handleDelete(props.userId)} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export { AlertDialog }