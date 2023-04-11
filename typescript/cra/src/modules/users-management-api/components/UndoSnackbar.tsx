import {Button, IconButton, Snackbar} from "@mui/material";
import {restoreUser} from "../core/_requests";
import {Close} from "@mui/icons-material";
import {useSnackbar} from "notistack";
import {useQueryResponse} from "../core/QueryResponseProvider";
import {useEffect, useState} from "react";

type Props = {
    open: boolean;
    userId: string;
    onClose: ()=>void;
}

const UndoSnackbar = (props: Props) => {
    const { enqueueSnackbar } = useSnackbar();
    const {refetch} = useQueryResponse();

    useEffect(()=>{
        console.log("change was chnaged", props.open);
        setOpen(props.open);
    }, [props.open])

    const [open, setOpen] = useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const undoDelete = async () => {
        console.log("undo");
        await restoreUser(props.userId);
        enqueueSnackbar('User was successfully restored.', { variant: "success" });
        setOpen(false);
        props.onClose();
        refetch();
    }

    const action = (
        <>
            <Button color="secondary" size="small" onClick={()=>undoDelete()}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small" />
            </IconButton>
        </>
    );

    return <Snackbar
        open={open}
        autoHideDuration={6000}
        message="User deleted"
        action={action}
    />
}

export {
    UndoSnackbar
}