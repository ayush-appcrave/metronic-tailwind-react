import {Avatar, Button, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUserById} from "../../core/_requests";
import {User} from "../../core/_models";
import {toAbsoluteUrl} from "utils";

function ViewUserPage(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<User>({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        role: "user",
        two_steps_auth: false,
    });

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

        <Button onClick={navigateUserEditPage}>Edit User</Button>
    </>;
}

export { ViewUserPage }