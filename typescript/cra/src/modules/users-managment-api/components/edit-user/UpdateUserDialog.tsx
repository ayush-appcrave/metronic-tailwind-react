import { UpdateUserFormWrapper } from "./UpdateUserFormWrapper";
import {
    Button,
    Dialog,
    Typography
} from "@mui/material";
import { Close } from "@mui/icons-material";

interface EditUserDialogProps {
    open: boolean;
    handleClose: () => void
    userId: string;
}

function UpdateUserDialog(props: EditUserDialogProps) {
    return (<Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={props.open}
        onClose={props.handleClose}
        sx={{
            padding: "70px",
        }}
    >
        <Button onClick={()=>{props.handleClose()}} sx={{
            position: "absolute",
            right: 5,
            top: 5,
        }}>
            <Close></Close>
        </Button>
        <Typography sx={{
            marginTop: "30px",
            fontSize: "40px",
            textAlign: "center",
        }}>Update user info</Typography>
        <UpdateUserFormWrapper userId={props.userId}></UpdateUserFormWrapper>
    </Dialog>)
}

export { UpdateUserDialog }