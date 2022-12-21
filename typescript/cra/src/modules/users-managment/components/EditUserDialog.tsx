import {FormEvent, useEffect, useState} from "react";
import {Data, rowsData} from "../helpers/users";
import {Button, Dialog, FormControlLabel, FormGroup, MenuItem, Select, Switch, TextField} from "@mui/material";

interface EditUserDialogProps {
    open: boolean;
    handleClose: () => void
    userId: number | string;
}

function EditUserDialog(props: EditUserDialogProps) {
    const [id, setId] = useState<string | number>(1);

    useEffect(()=>{
        setId(props.userId);
        setFormData(currentUser());
    }, [props.open]);

    const currentUser = () => {
        const user = rowsData.find(row => row.id === Number(id));

        console.log(id);
        console.log(user);
        if(!id || !user){
            return rowsData[0];
        }

        return user;
    }

    const [formData, setFormData] = useState<Data>(currentUser);

    const handleChange = (name:string, value:unknown) => {
        setFormData((prevState)=>({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (<Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={props.open}
        onClose={props.handleClose}

    >
        <form onSubmit={(e)=>handleSubmit(e)}>
            <FormGroup>
                <TextField
                    style={{ width: "40%", margin: "5px" }}
                    type="text"
                    label="Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    variant="outlined"
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    style={{ width: "40%", margin: "5px" }}
                    type="text"
                    label="Company"
                    id="company"
                    name="company"
                    value={formData.company}
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
                    value={formData.role}
                    onChange={(e)=>handleChange(e.target.name, e.target.value)}
                >
                    <MenuItem value="Project Manager">Project Manager</MenuItem>
                    <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
                    <MenuItem value="Project Manager">Project Manager</MenuItem>
                    <MenuItem value="Sales Manager">Sales Manager</MenuItem>
                </Select>
            </FormGroup>
            <FormGroup>
                <FormControlLabel control={<Switch name="verified" id="verified" checked={formData.verified} value={formData.verified} onChange={(e)=>handleChange(e.target.name, e.target.value !== 'true')} />} label="Verified" />
            </FormGroup>
            <FormGroup>
                <Select
                    style={{ width: "40%", margin: "5px" }}
                    label="Status"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={(e)=>handleChange(e.target.name, e.target.value)}
                >
                    <MenuItem value="Banned">Project Manager</MenuItem>
                    <MenuItem value="Active">Frontend Developer</MenuItem>
                </Select>
            </FormGroup>
            <Button style={{ width: "20%", margin: "5px" }} type="submit" variant="contained" color="primary">
                save
            </Button>
        </form>
    </Dialog>)
}

export { EditUserDialog }