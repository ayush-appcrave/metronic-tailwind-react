import {
    Drawer
} from "@mui/material";
import {CreateUserForm} from "./CreateUserForm";

interface CreateUserDrawerProps {
    open: boolean;
    handleClose: () => void
}

function CreateUserDrawer(props: CreateUserDrawerProps) {
    return (<Drawer
        open={props.open}
        onClose={props.handleClose}
        anchor={"right"}
        sx={{
            padding: "70px",
        }}
    >
        <CreateUserForm open={props.open} handleClose={props.handleClose}></CreateUserForm>
    </Drawer>)
}

export { CreateUserDrawer }