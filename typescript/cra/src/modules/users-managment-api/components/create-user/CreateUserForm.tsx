import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    Select, Switch,
    TextField,
    Typography
} from "@mui/material";
import {Close} from "@mui/icons-material";
import {FormEvent, useState} from "react";
import {useQueryResponse} from "../../core/QueryResponseProvider";
import {User} from "../../core/_models";
import {createUser} from "../../core/_requests";

interface CreateUserFormProps {
    open: boolean;
    handleClose: () => void
}

function CreateUserForm(props: CreateUserFormProps){
    const {refetch} = useQueryResponse()
    const [formData, setFormData] = useState<User>({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        role: "user",
        two_steps_auth: false,
    });

    const onSubmit = async (e:FormEvent) => {
        e.preventDefault();
        try {
            await createUser(formData);
            refetch();
            props.handleClose();
            alert("User was successfully created.");
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (name:string, value:unknown) => {
        setFormData((prevState)=>({
            ...prevState,
            [name]: value,
        } as User));
    }

    return <>
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
        }}>Add new user</Typography>
        <form style={{
            display: "flex",
        }} onSubmit={(e)=>onSubmit(e)}>
            <Grid container alignItems="center" position="relative" margin={"40px"} direction="column">
                <FormGroup style={{ width: "40%", margin: "5px" }}>
                    <TextField
                        type="text"
                        label="First Name"
                        id="first_name"
                        name="first_name"
                        value={formData?.first_name}
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                        variant="outlined"
                    />
                </FormGroup>
                <FormGroup style={{ width: "40%", margin: "5px" }}>
                    <TextField
                        type="text"
                        label="Last Name"
                        id="last_name"
                        name="last_name"
                        value={formData?.last_name}
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                        variant="outlined"
                    />
                </FormGroup>
                <FormGroup style={{ width: "40%", margin: "5px" }}>
                    <TextField
                        type="text"
                        label="Email"
                        id="email"
                        name="email"
                        value={formData?.email}
                        variant="outlined"
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    />
                </FormGroup>
                <FormControl style={{ width: "40%", margin: "5px" }}>
                    <InputLabel id="kt-role-select-label">Age</InputLabel>
                    <Select
                        labelId="kt-role-select-label"
                        id="kt-role-select"
                        value={formData?.role}
                        name="role"
                        label="user"
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    >
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                </FormControl>
                <FormGroup style={{ width: "40%", margin: "5px" }}>
                    <TextField
                        type="password"
                        label="Password"
                        id="password"
                        name="password"
                        value={formData?.password}
                        variant="outlined"
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    />
                </FormGroup>
                <FormGroup style={{ width: "40%", margin: "5px" }}>
                    <TextField
                        type="password"
                        label="Password Confirmation"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={formData?.password_confirmation}
                        variant="outlined"
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    />
                </FormGroup>
                <FormGroup style={{ width: "40%", margin: "5px" }}>
                    <FormControlLabel control={<Switch name="two_steps_auth" id="two_steps_auth" checked={formData?.two_steps_auth} value={formData?.two_steps_auth} onChange={(e)=>handleChange(e.target.name, e.target.value !== 'true')} />} label="Two Steps Auth" />
                </FormGroup>
                <Button style={{ width: "20%", margin: "5px" }} type="submit" variant="contained" color="primary">
                    Save
                </Button>
            </Grid>
        </form>
    </>;
}

export { CreateUserForm }