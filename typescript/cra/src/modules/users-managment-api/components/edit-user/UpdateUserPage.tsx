import {UpdateUserFormWrapper} from "./UpdateUserFormWrapper";
import {Typography} from "@mui/material";
import {useParams} from "react-router";

function UpdateUserPage(){
    const { id } = useParams();

    return <>
        <Typography>Update User Info Page</Typography>
        { id && <UpdateUserFormWrapper userId={id}></UpdateUserFormWrapper> }
    </>;
}

export { UpdateUserPage }