import {useParams} from "react-router";
import {Data, rowsData} from "./core/users";
import {Button, Card, FormGroup, MenuItem, Select, TextField} from '@mui/material';
import { FormEvent,useState} from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function EditUserPageAPI(){
    const { id } = useParams();
    const currentUser = () => {
        const user = rowsData.find(row => row.id === Number(id));

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

    return (<Card sx={{
        alignItems: "center",
        padding: "30px",
        margin: "15px",
    }}>{
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
    }</Card>)
}

export { EditUserPageAPI }