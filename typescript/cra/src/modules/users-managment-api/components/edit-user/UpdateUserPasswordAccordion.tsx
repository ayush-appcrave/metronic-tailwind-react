import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button, FormGroup,
    Grid, TextField,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useQueryResponse} from "../../core/QueryResponseProvider";
import {FormEvent, useState} from "react";
import {User} from "../../core/_models";
import { updateUserPassword } from "../../core/_requests";

interface UpdateUserPasswordProps {
    userId: string;
}

function UpdateUserPasswordAccordion(props: UpdateUserPasswordProps){
    const {refetch} = useQueryResponse();
    const [formData, setFormData] = useState<User>({
        id: props.userId,
        password: "",
        password_confirmation: "",
    });

    const onSubmit = async (e:FormEvent) => {
        console.log(formData);
        e.preventDefault();
        try {
            await updateUserPassword(formData);
            refetch();
            alert("Password has been successfully updated");
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (name:string, value:unknown) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        } as User));
    }

    return <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography>Auth info</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <form style={{
                display: "flex",
            }} onSubmit={(e)=>onSubmit(e)}>
                <Grid container alignItems="center" position="relative" margin={"40px"} direction="column">
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
                    <Button style={{ width: "20%", margin: "5px" }} type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                </Grid>
            </form>
        </AccordionDetails>
    </Accordion>
}

export { UpdateUserPasswordAccordion }