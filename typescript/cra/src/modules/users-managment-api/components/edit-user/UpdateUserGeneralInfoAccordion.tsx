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
import { useSnackbar } from "notistack";
import {createUser, getUserById, updateUser} from "../../core/_requests";
import {User} from "../../core/_models";
import {useQueryResponse} from "../../core/QueryResponseProvider";
import {useFormik} from "formik";
import * as Yup from "yup";

interface UpdateUserGeneralInfoProps {
    userId: string;
}

function UpdateUserGeneralInfoAccordion(props: UpdateUserGeneralInfoProps){
    const { enqueueSnackbar } = useSnackbar();
    const {refetch} = useQueryResponse();
    const [formData, setFormData] = useState<User>({
        id: props.userId,
        first_name: "",
        last_name: "",
        email: "",
        role: "user",
        two_steps_auth: false,
    });

    const onSubmit = async (e:FormEvent) => {
        console.log(formData);
        e.preventDefault();

    }

    const handleChange = (name:string, value:unknown) => {
        setFormData((prevState)=>({
            ...prevState,
            [name]: value,
        } as User));
    }

    const formik = useFormik<User>({
        initialValues: {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            role: "user",
            two_steps_auth: false,
            password: "",
            password_confirmation: "",
        },
        validationSchema: Yup.object({
            first_name: Yup.string()
                .required('First name is required.'),
            last_name: Yup.string()
                .required('Last name is required.'),
            email: Yup.string().email('Invalid email address.').required('Email is required.'),
            role: Yup.string()
                .required('Role is required'),
            two_steps_auth: Yup.boolean()
                .required('Two steps auth is required.'),
            password: Yup.string()
                .min(8, "Password length should be 8.")
                .required('Password field is required.'),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Password confirmation field is required.'),
        }),
        onSubmit: async (values) => {
            try {
                await updateUser({
                    id: "",
                    first_name: "",
                    last_name: "",
                    email: "",
                    role: "user",
                    two_steps_auth: false,
                    password: "",
                    password_confirmation: "",
                });
                refetch();
                enqueueSnackbar('User was successfully added.', { variant: "success" });
            } catch (err) {
                console.log(err);
            }
        },
    });

    useEffect( ()=>{
        getUserById(props.userId).then(user=>{
            setFormData(user as User);
        })
    }, [props.userId])


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