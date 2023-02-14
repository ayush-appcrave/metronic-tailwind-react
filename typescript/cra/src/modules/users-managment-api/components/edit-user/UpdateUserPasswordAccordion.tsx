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
import {User, UserPasswords} from "../../core/_models";
import {createUser, updateUserPassword} from "../../core/_requests";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useSnackbar} from "notistack";

interface UpdateUserPasswordProps {
    userId: string;
}

function UpdateUserPasswordAccordion(props: UpdateUserPasswordProps){
    const {refetch} = useQueryResponse();
    const { enqueueSnackbar } = useSnackbar();

    const formik = useFormik<UserPasswords>({
        initialValues: {
            password: "",
            password_confirmation: "",
            current_password: "",
        },
        validationSchema: Yup.object({
            current_password: Yup.string()
                .min(8, "Current Password length should be at least 8.")
                .required('Current Password field is required.'),
            password: Yup.string()
                .min(8, "Password length should be at least 8.")
                .required('Password field is required.'),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Password confirmation field is required.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await updateUserPassword(values, props.userId);
                resetForm();
                enqueueSnackbar('"Password has been successfully updated"', { variant: "success" });
                refetch();
            } catch (err) {
                enqueueSnackbar("Something went wrong!", { variant: "error" });
            }
        },
    });

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
            }} onSubmit={formik.handleSubmit}>
                <Grid container alignItems="center" position="relative" margin={"40px"} direction="column">
                    <FormGroup sx={{ marginY: "5px", width: "40%",  }}>
                        <TextField
                            type="password"
                            label="Current Password"
                            id="current_password"
                            name="current_password"
                            variant="outlined"
                            error={!!formik.errors.current_password && formik.touched.current_password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.current_password}
                            helperText={formik.touched.current_password && formik.errors.current_password ? formik.errors.current_password : ""}
                        />
                    </FormGroup>
                    <FormGroup sx={{ marginY: "5px", width: "40%",  }}>
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
                    <FormGroup sx={{ marginY: "5px", width: "40%",  }}>
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
                    <Button style={{ width: "20%", margin: "5px" }} type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                </Grid>
            </form>
        </AccordionDetails>
    </Accordion>
}

export { UpdateUserPasswordAccordion }