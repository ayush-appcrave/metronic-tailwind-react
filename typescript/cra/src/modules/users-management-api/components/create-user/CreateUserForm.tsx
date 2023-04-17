import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup, FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select, Switch,
    TextField,
    Typography,
    CircularProgress
} from "@mui/material";
import * as Yup from 'yup';
import {Close} from "@mui/icons-material";
import {useQueryResponse} from "../../core/QueryResponseProvider";
import {User} from "../../core/_models";
import {createUser} from "../../core/_requests";
import {useFormik} from "formik";
import {useSnackbar} from "notistack";
import axios from "axios";
import {useState} from "react";

interface CreateUserFormProps {
    open: boolean;
    handleClose: () => void
}

function CreateUserForm(props: CreateUserFormProps){
    const { enqueueSnackbar } = useSnackbar();
    const {refetch} = useQueryResponse()
    const [loading, setLoading] = useState(false);
    const formik = useFormik<User>({
        initialValues: {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            status: "active",
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
            status: Yup.string()
                .required('Role is required'),
            role: Yup.string()
                .required('Role is required'),
            two_steps_auth: Yup.boolean()
                .required('Two steps auth is required.'),
            password: Yup.string()
                .min(8, "Password length should be at least 8.")
                .required('Password field is required.'),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Password confirmation field is required.'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                await createUser(values);
                refetch();
                enqueueSnackbar('User was successfully created.', { variant: "success" });
                props.handleClose();
                setLoading(false);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    enqueueSnackbar(JSON.stringify(Object.values(error.response?.data.message)[0]?.toString()), { variant: "error" });
                } else {
                    enqueueSnackbar("Something went wrong!", { variant: "error" });
                }
                setLoading(false);
            }
        },
    });

    return <>
        <Button onClick={()=>{props.handleClose()}} sx={{
            position: "absolute",
            right: 5,
            top: 5,
        }}>
            <Close></Close>
        </Button>
        <Typography sx={{
            marginTop: "40px",
            fontSize: "30px",
            marginX: "20%",
            textAlign: "center",
        }}>Create new user</Typography>
        <form style={{
            display: "flex",
        }} onSubmit={formik.handleSubmit}>
            <Grid container alignItems="center" position="relative" sx={{
                marginX: "20%",
                marginY: "30px",
            }}  direction="column">
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
                    <TextField
                        type="text"
                        label="First Name"
                        id="first_name"
                        name="first_name"
                        variant="outlined"
                        error={!!formik.errors.first_name && formik.touched.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.first_name}
                        helperText={formik.touched.first_name && formik.errors.first_name ? formik.errors.first_name : ""}
                    />
                </FormGroup>
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
                    <TextField
                        type="text"
                        label="Last Name"
                        id="last_name"
                        name="last_name"
                        variant="outlined"
                        error={!!formik.errors.last_name && formik.touched.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.last_name}
                        helperText={formik.touched.last_name && formik.errors.last_name ? formik.errors.last_name : ""}
                    />
                </FormGroup>
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
                    <TextField
                        type="text"
                        label="Email"
                        id="email"
                        name="email"
                        variant="outlined"
                        error={!!formik.errors.email && formik.touched.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                    />
                </FormGroup>
                <FormControl sx={{ marginY: "5px", width: "100%",  }} error={!!formik.errors.status}>
                    <InputLabel id="kt-status-select-label">Status</InputLabel>
                    <Select
                        labelId="kt-status-select-label"
                        id="kt-status-select"
                        name="status"
                        label="status"
                        error={!!formik.errors.status && formik.touched.status}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.status}

                    >
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="deactivated">Deactivated</MenuItem>
                    </Select>
                    { (formik.touched.status && formik.errors.status) && <FormHelperText>{formik.errors.status}</FormHelperText>}
                </FormControl>
                <FormControl sx={{ marginY: "5px", width: "100%",  }} error={!!formik.errors.role}>
                    <InputLabel id="kt-role-select-label">Role</InputLabel>
                    <Select
                        labelId="kt-role-select-label"
                        id="kt-role-select"
                        name="role"
                        label="role"
                        error={!!formik.errors.role && formik.touched.role}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.role}

                    >
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                    { (formik.touched.role && formik.errors.role) && <FormHelperText>{formik.errors.role}</FormHelperText>}
                </FormControl>
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
                    <TextField
                        type="password"
                        label="Password"
                        id="password"
                        name="password"
                        variant="outlined"
                        error={!!formik.errors.password && formik.touched.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                    />
                </FormGroup>
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
                    <TextField
                        type="password"
                        label="Password Confirmation"
                        id="password_confirmation"
                        name="password_confirmation"
                        variant="outlined"
                        error={!!formik.errors.password_confirmation && formik.touched.password_confirmation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password_confirmation}
                        helperText={formik.touched.password_confirmation && formik.errors.password_confirmation ? formik.errors.password_confirmation : ""}
                    />
                </FormGroup>
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
                    <FormControlLabel control={<Switch name="two_steps_auth" id="two_steps_auth"
                                                       onChange={formik.handleChange}
                                                       onBlur={formik.handleBlur}
                                                       value={formik.values.password_confirmation}
                    />} label="Two Steps Auth" />
                </FormGroup>
                <Button sx={{ marginY: "5px", width: "100%",  }} type="submit" variant="contained" color="primary" disabled={loading}>
                    {!loading ? "Save" : <><CircularProgress color={"inherit"} size={'1rem'} sx={{marginRight: "10px"}}></CircularProgress>"Loading..."</>}
                </Button>
            </Grid>
        </form>
    </>;
}

export { CreateUserForm }