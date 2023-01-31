import {
    Dialog
} from "@mui/material";
import {CreateUserForm} from "./CreateUserForm";

interface CreateUserDialogProps {
    open: boolean;
    handleClose: () => void
}

function CreateUserDialog(props: CreateUserDialogProps) {
    return (<Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={props.open}
        onClose={props.handleClose}
        sx={{
            padding: "70px",
        }}
    >
        <CreateUserForm open={props.open} handleClose={props.handleClose}></CreateUserForm>
    </Dialog>)
}

export { CreateUserDialog }