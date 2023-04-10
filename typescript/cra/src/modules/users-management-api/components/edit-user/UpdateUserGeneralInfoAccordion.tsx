import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Box, Button,
    FormControl, FormControlLabel,
    FormGroup, FormHelperText, Grid, InputLabel, MenuItem, Select, Switch,
    TextField,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {FormEvent, useEffect, useState} from "react";
import { useSnackbar } from "notistack";
import {createUser, getUserById, updateUser} from "../../core/_requests";
import {User} from "../../core/_models";
import {useQueryResponse} from "../../core/QueryResponseProvider";
import {Formik, useFormik} from "formik";
import * as Yup from "yup";

interface UpdateUserGeneralInfoProps {
    userId: string;
    exitHandler: () => void
}

function UpdateUserGeneralInfoAccordion(props: UpdateUserGeneralInfoProps){
    const { exitHandler } = props;
    const { enqueueSnackbar } = useSnackbar();
    const {refetch} = useQueryResponse();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<User>({
        id: props.userId,
        first_name: "",
        last_name: "",
        email: "",
        role: "user",
        two_steps_auth: false,
    });

    useEffect( ()=>{
        setLoading(true);
        getUserById(props.userId).then(user=>{
            setFormData(user as User);
            setLoading(false);
        })
    }, [props.userId])

    const validationSchema = Yup.object({
        first_name: Yup.string()
            .required('First name is required.'),
        last_name: Yup.string()
            .required('Last name is required.'),
        email: Yup.string().email('Invalid email address.').required('Email is required.'),
        role: Yup.string()
            .required('Role is required'),
        two_steps_auth: Yup.boolean()
            .required('Two steps auth is required.'),
    });


    return <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="general-info"
            id="general-info"
        >
            <Typography>General Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
            { !loading && <Formik
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                    try {
                        await updateUser(values);
                        refetch();
                        enqueueSnackbar('User general info was successfully updated.', { variant: "success" });
                    } catch (err) {
                        enqueueSnackbar('Ups! Something went wrong!', { variant: "error" });
                    }
                }}
            >
                {props => (
                    <form style={{
                        display: "flex"
                    }} onSubmit={props.handleSubmit}>
                        <Grid container alignItems="center" position="relative" margin={"40px"} direction="column">
                            <FormGroup sx={{ marginY: "5px", width: "40%",  }}>
                                <TextField
                                    type="text"
                                    label="First Name"
                                    id="first_name"
                                    name="first_name"
                                    variant="outlined"
                                    error={!!props.errors.first_name && props.touched.first_name}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.first_name}
                                    helperText={props.touched.first_name && props.errors.first_name ? props.errors.first_name : ""}
                                />
                            </FormGroup>
                            <FormGroup sx={{ marginY: "5px", width: "40%",  }}>
                                <TextField
                                    type="text"
                                    label="Last Name"
                                    id="last_name"
                                    name="last_name"
                                    variant="outlined"
                                    error={!!props.errors.last_name && props.touched.last_name}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.last_name}
                                    helperText={props.touched.last_name && props.errors.last_name ? props.errors.last_name : ""}
                                />
                            </FormGroup>
                            <FormGroup sx={{ marginY: "5px", width: "40%",  }}>
                                <TextField
                                    type="text"
                                    label="Email"
                                    id="email"
                                    name="email"
                                    variant="outlined"
                                    error={!!props.errors.email && props.touched.email}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.email}
                                    helperText={props.touched.email && props.errors.email ? props.errors.email : ""}
                                />
                            </FormGroup>
                            <FormControl sx={{ marginY: "5px", width: "40%",  }} error={!!props.errors.role}>
                                <InputLabel id="kt-role-select-label">Role</InputLabel>
                                <Select
                                    labelId="kt-role-select-label"
                                    id="kt-role-select"
                                    name="role"
                                    label="role"
                                    error={!!props.errors.role && props.touched.role}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.role}

                                >
                                    <MenuItem value="user">User</MenuItem>
                                    <MenuItem value="admin">Admin</MenuItem>
                                </Select>
                                { (props.touched.role && props.errors.role) && <FormHelperText>{props.errors.role}</FormHelperText>}
                            </FormControl>
                            <FormGroup sx={{ marginY: "5px", width: "40%",  }}>
                                <FormControlLabel control={<Switch name="two_steps_auth" id="two_steps_auth"
                                                                   onChange={props.handleChange}
                                                                   onBlur={props.handleBlur}
                                                                   value={props.values.two_steps_auth}
                                />} label="Two Steps Auth" />
                            </FormGroup>
                           <Box sx={{
                               display: "flex",
                           }}>
                               <Button style={{ margin: "5px" }} onClick={()=>{props.handleSubmit(); exitHandler();}} variant="contained" color="primary">
                                   Save and Exit
                               </Button>
                               <Button style={{ margin: "5px" }} type="submit" variant="contained" color="primary">
                                   Save and Continue
                               </Button>
                               <Button style={{ margin: "5px" }} onClick={()=>{exitHandler();}} variant="contained" color="primary">
                                   Exit
                               </Button>
                           </Box>
                        </Grid>
                    </form>
                )}
            </Formik>}
        </AccordionDetails>
    </Accordion>
}

export { UpdateUserGeneralInfoAccordion }