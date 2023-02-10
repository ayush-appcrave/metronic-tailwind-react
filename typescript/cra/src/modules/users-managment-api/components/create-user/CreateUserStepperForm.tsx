import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Switch, TextField} from "@mui/material";
import {FormEvent, useState} from "react";
import {User} from "../../core/_models";
import {createUser} from "../../core/_requests";
import {Close} from "@mui/icons-material";
import {useQueryResponse} from "../../core/QueryResponseProvider";

const steps = ['General', 'Auth info'];

interface CreateUserFormProps {
    open: boolean;
    handleClose: () => void
}

export default function CreateUserStepperForm(props: CreateUserFormProps) {
    const {refetch} = useQueryResponse();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const formInitData = {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        role: "user",
        two_steps_auth: false,
        password: "",
        password_confirmation: "",
    }

    const [formData, setFormData] = useState<User>(formInitData);

    const handleChange = (name:string, value:unknown) => {
        setFormData((prevState)=>({
            ...prevState,
            [name]: value,
        } as User));
    }

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setFormData(formInitData);
        setActiveStep(0);
    };

    const submit = async () => {
        try {
            await createUser(formData);
            refetch();
            props.handleClose();
            alert("User was successfully created.");
            handleNext();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Box sx={{ margin: "50px" }}>
            <>
                <Button  sx={{
                    position: "absolute",
                    right: 5,
                    top: 5,
                }}>
                    <Close onClick={props.handleClose}></Close>
                </Button>
                <Stepper sx={{
                    margin: "10px",
                    marginButtom: "20px"
                }} activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (<React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>) : <React.Fragment>
                    <Box sx={{
                        margin: "20px"
                    }}>
                        {renderSteps(activeStep, handleChange, formData)}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === steps.length || activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        { activeStep === steps.length - 1 && <Button onClick={submit}>
                            Submit
                        </Button> }

                        { activeStep !== steps.length - 1 && <Button onClick={handleNext}>
                            Continue
                        </Button> }
                    </Box>
                </React.Fragment>
                }
            </>
        </Box>
    );
}

function renderSteps(step: number, handleChange:Function, formData:User){
    switch(step) {
        case 0:
            return <>
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
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
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
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
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
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
                <FormControl sx={{ marginY: "5px", width: "100%",  }}>
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
            </>
        case 1:
            return <>
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
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
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
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
                <FormGroup sx={{ marginY: "5px", width: "100%",  }}>
                    <FormControlLabel control={<Switch name="two_steps_auth" id="two_steps_auth" checked={formData?.two_steps_auth} value={formData?.two_steps_auth} onChange={(e)=>handleChange(e.target.name, e.target.value !== 'true')} />} label="Two Steps Auth" />
                </FormGroup>
            </>
    }
}