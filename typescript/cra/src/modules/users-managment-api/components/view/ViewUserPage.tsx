import {Typography} from "@mui/material";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUserById} from "../../core/_requests";
import {User} from "../../core/_models";

function ViewUserPage(){
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState<User>({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        role: "user",
        two_steps_auth: false,
    });

    useEffect( ()=>{
        if(id){
            getUserById(id).then(user=>{
                setCurrentUser(user as User);
            })
        }
    }, []);
    return <>
        <Typography>User</Typography>
        {JSON.stringify(currentUser)}
    </>;
}

export { ViewUserPage }