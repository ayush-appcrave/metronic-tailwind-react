import {FormEvent, useEffect, useState} from "react";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Button,
    Dialog,
    FormControlLabel,
    FormGroup,
    MenuItem,
    Select,
    Switch,
    TextField, Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {User} from "../core/_models";
import {updateUser, getUserById, createUser} from "../core/_requests";

interface EditUserDialogProps {
    open: boolean;
    handleClose: () => void
    userId: string | undefined;
}

function EditUserDialog(props: EditUserDialogProps) {
    const [id, setId] = useState<string | undefined>(undefined);
    const [formData, setFormData] = useState<User>({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        role: "user",
        two_steps: false,
    });

    useEffect(()=>{
        setId(props.userId);
        if (id){
            getUserById(id).then((data)=>{
                if(data){
                    setFormData(data);
                }
            })
        }
    }, [props.open]);

    const onSubmit = async (e:FormEvent) => {
        e.preventDefault();
        try {
            if(id){
                await updateUser(formData);
            } else {
                await createUser(formData);
                props.handleClose();
            }
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

    return (<Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={props.open}
        onClose={props.handleClose}

    >
        <form onSubmit={(e)=>onSubmit(e)}>
            <FormGroup>
                <TextField
                    style={{ width: "40%", margin: "5px" }}
                    type="text"
                    label="First Name"
                    id="first_name"
                    name="first_name"
                    value={formData?.first_name}
                    onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    variant="outlined"
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    style={{ width: "40%", margin: "5px" }}
                    type="text"
                    label="Last Name"
                    id="last_name"
                    name="last_name"
                    value={formData?.last_name}
                    onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    variant="outlined"
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    style={{ width: "40%", margin: "5px" }}
                    type="text"
                    label="Email"
                    id="email"
                    name="email"
                    value={formData?.email}
                    variant="outlined"
                    onChange={(e)=>handleChange(e.target.name, e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Select
                    style={{ width: "40%", margin: "5px" }}
                    label="Role"
                    id="role"
                    name="role"
                    value={formData?.role}
                    defaultValue={"user"}
                    onChange={(e)=>handleChange(e.target.name, e.target.value)}
                >
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                </Select>
            </FormGroup>
            <FormGroup>
            <TextField
                style={{ width: "40%", margin: "5px" }}
                type="text"
                label="Password"
                id="password"
                name="password"
                value={formData?.password}
                variant="outlined"
                onChange={(e)=>handleChange(e.target.name, e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <TextField
                style={{ width: "40%", margin: "5px" }}
                type="text"
                label="Password Confirmation"
                id="password_confirmation"
                name="password_confirmation"
                value={formData?.password_confirmation}
                variant="outlined"
                onChange={(e)=>handleChange(e.target.name, e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <FormControlLabel control={<Switch name="verified" id="verified" checked={formData?.two_steps} value={formData?.two_steps} onChange={(e)=>handleChange(e.target.name, e.target.value !== 'true')} />} label="Verified" />
        </FormGroup>
            <Button style={{ width: "20%", margin: "5px" }} type="submit" variant="contained" color="primary">
                Save
            </Button>
        </form>
    </Dialog>)
}

export { EditUserDialog }