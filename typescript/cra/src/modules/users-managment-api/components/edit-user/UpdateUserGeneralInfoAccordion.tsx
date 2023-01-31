import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Button,
    FormControl, FormControlLabel,
    FormGroup, Grid, InputLabel, MenuItem, Select, Switch,
    TextField,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {FormEvent, useEffect, useState} from "react";
import {createUser, getUserById, updateUser} from "../../core/_requests";
import {User} from "../../core/_models";
import {useQueryResponse} from "../../core/QueryResponseProvider";

interface UpdateUserGeneralInfoProps {
    userId: string;
}

function UpdateUserGeneralInfoAccordion(props: UpdateUserGeneralInfoProps){
    const {refetch} = useQueryResponse();
    const [formData, setFormData] = useState<User>({
        id: props.userId,
        first_name: "",
        last_name: "",
        email: "",
        role: "user",
        two_steps_auth: false,
    });

    useEffect( ()=>{
        getUserById(props.userId).then(user=>{
            setFormData(user as User);
        })
    }, [props.userId])

    const onSubmit = async (e:FormEvent) => {
        console.log(formData);
        e.preventDefault();
        try {
            await updateUser(formData);
            refetch();
            alert("Info has been successfully updated");
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


    return <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="general-info"
            id="general-info"
        >
            <Typography>General Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
                        <FormControlLabel control={<Switch name="two_steps_auth" id="two_steps_auth" checked={formData?.two_steps_auth} value={formData?.two_steps_auth} onChange={(e)=>handleChange(e.target.name, e.target.value !== 'true')} />} label="Two Steps Auth" />
                    </FormGroup>
                    <Button style={{ width: "20%", margin: "5px" }} type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                </Grid>
            </form>
        </AccordionDetails>
    </Accordion>
}

export { UpdateUserGeneralInfoAccordion }