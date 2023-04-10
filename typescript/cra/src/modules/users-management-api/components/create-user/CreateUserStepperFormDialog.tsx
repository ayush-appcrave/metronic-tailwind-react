import {
    Dialog
} from "@mui/material";
import CreateUserStepperForm from "./CreateUserStepperForm";

interface CreateUserDialogProps {
    open: boolean;
    handleClose: () => void;
}

function CreateUserStepperFormDialog(props: CreateUserDialogProps) {
    return (<Dialog
        fullWidth
        maxWidth={"lg"}
        open={props.open}
        onClose={props.handleClose}
        sx={{
            padding: "70px",
            maxHeight: "auto",
        }}
    >
        <CreateUserStepperForm open={props.open} handleClose={props.handleClose}></CreateUserStepperForm>
    </Dialog>)
}

export { CreateUserStepperFormDialog }