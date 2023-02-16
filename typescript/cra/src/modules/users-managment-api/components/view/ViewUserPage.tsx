import {Avatar, Button, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {deleteUser, getUserById} from "../../core/_requests";
import {User} from "../../core/_models";
import {toAbsoluteUrl} from "utils";
import {useMutation, useQueryClient} from "react-query";
import {QUERIES} from "../../helpers";
import {useQueryResponse} from "../../core/QueryResponseProvider";
import {useSnackbar} from "notistack";

function ViewUserPage(){
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const {query} = useQueryResponse()
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<User>({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        role: "user",
        two_steps_auth: false,
    });

    const deleteItem = useMutation(() => deleteUser(id as string), {
        // 💡 response of the mutation is passed to onSuccess
        onSuccess: () => {
            // ✅ update detail view directly
            queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
            enqueueSnackbar("User Successfully Deleted", { variant: "success" })
            navigate(`/users-management-api`);
        },
    })

    const navigateUserEditPage = () => {
        navigate(`/edit/user/${id}`);
    }

    useEffect( ()=>{
        if(id){
            getUserById(id).then(user=>{
                setCurrentUser(user as User);
            })
        }
    }, []);
    return <>
        <Typography>User</Typography>

        <Typography>{currentUser.id}</Typography>
        <Avatar alt={currentUser.first_name} src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />
        <Typography>{currentUser.first_name} {currentUser.last_name}</Typography>
        <Typography>{currentUser.role}</Typography>
        <Typography>{currentUser.created_at}</Typography>
        <Typography>{currentUser.email}</Typography>

        <Button variant="outlined" color="info" onClick={navigateUserEditPage}>Edit User</Button>
        <Button variant="outlined" color="error" onClick={async () => await deleteItem.mutateAsync()}>Delete</Button>
    </>;
}

export { ViewUserPage }