import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField
} from '@mui/material';
import { FormEvent, useState } from 'react';
import { User } from '../../core/_models';
import { createUser } from '../../core/_requests';
import { Close } from '@mui/icons-material';
import { useQueryResponse } from '../../core/QueryResponseProvider';
import { createAccountSchemas, inits } from './CreateUserStepperFormHelper';
import { Form, Formik, FormikProps, FormikValues } from 'formik';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const steps = ['General', 'Auth info', 'Review'];

interface CreateUserFormProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateUserStepperForm(props: CreateUserFormProps) {
  const { refetch } = useQueryResponse();
  const { enqueueSnackbar } = useSnackbar();
  const [activeStep, setActiveStep] = React.useState(0);
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[activeStep]);
  const [initValues] = useState<User>(inits);
  const [skipped, setSkipped] = React.useState(new Set<number>());

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
    setCurrentSchema(createAccountSchemas[activeStep + 1]);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCurrentSchema(createAccountSchemas[activeStep]);
  };

  const submit = async (values: User) => {
    try {
      await createUser(values);
      refetch();
      props.handleClose();
      enqueueSnackbar('User was successfully created.', { variant: 'success' });
      handleNext();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(
          JSON.stringify(Object.values(error.response?.data.message)[0]?.toString()),
          { variant: 'error' }
        );
      } else {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
      }
    }
  };

  return (
    <Box sx={{ margin: '50px' }}>
      <>
        <Button
          sx={{
            position: 'absolute',
            right: 5,
            top: 5
          }}
        >
          <Close onClick={props.handleClose}></Close>
        </Button>
        <Stepper
          sx={{
            margin: '10px',
            marginButtom: '20px'
          }}
          activeStep={activeStep}
        >
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
        <React.Fragment>
          <Box
            sx={{
              margin: '20px'
            }}
          >
            <Formik
              validationSchema={currentSchema}
              initialValues={initValues}
              onSubmit={handleNext}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  {renderSteps(activeStep, props)}
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

                    {activeStep === steps.length - 1 && (
                      <Button onClick={(e) => submit(props.values)}>Submit</Button>
                    )}

                    {activeStep !== steps.length - 1 && <Button type="submit">Continue</Button>}
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </React.Fragment>
      </>
    </Box>
  );
}

function renderSteps(step: number, props: FormikProps<User>) {
  switch (step) {
    case 0:
      return (
        <>
          <FormGroup sx={{ marginY: '5px', width: '100%' }}>
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
              helperText={
                props.touched.first_name && props.errors.first_name ? props.errors.first_name : ''
              }
            />
          </FormGroup>
          <FormGroup sx={{ marginY: '5px', width: '100%' }}>
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
              helperText={
                props.touched.last_name && props.errors.last_name ? props.errors.last_name : ''
              }
            />
          </FormGroup>
          <FormGroup sx={{ marginY: '5px', width: '100%' }}>
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
              helperText={props.touched.email && props.errors.email ? props.errors.email : ''}
            />
          </FormGroup>
          <FormControl
            error={!!props.errors.role && props.touched.role}
            sx={{ marginY: '5px', width: '100%' }}
          >
            <InputLabel id="kt-role-select-label">Age</InputLabel>
            <Select
              labelId="kt-role-select-label"
              id="kt-role-select"
              name="role"
              label="user"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.role}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </>
      );
    case 1:
      return (
        <>
          <FormGroup sx={{ marginY: '5px', width: '100%' }}>
            <TextField
              type="password"
              label="Password"
              id="password"
              name="password"
              variant="outlined"
              error={!!props.errors.password && props.touched.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              helperText={
                props.touched.password && props.errors.password ? props.errors.password : ''
              }
            />
          </FormGroup>
          <FormGroup sx={{ marginY: '5px', width: '100%' }}>
            <TextField
              type="password"
              label="Password Confirmation"
              id="password_confirmation"
              name="password_confirmation"
              variant="outlined"
              error={!!props.errors.password_confirmation && props.touched.password_confirmation}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password_confirmation}
              helperText={
                props.touched.password_confirmation && props.errors.password_confirmation
                  ? props.errors.password_confirmation
                  : ''
              }
            />
          </FormGroup>
          <FormGroup sx={{ marginY: '5px', width: '100%' }}>
            <FormControlLabel
              control={
                <Switch
                  name="two_steps_auth"
                  id="two_steps_auth"
                  checked={props.values.two_steps_auth}
                  value={props.values.two_steps_auth}
                  onChange={props.handleChange}
                />
              }
              label="Two Steps Auth"
            />
          </FormGroup>
        </>
      );
    case 2:
      return (
        <>
          Review data before submitting
          <Typography>First name: {props.values.first_name}</Typography>
          <Typography>Last name: {props.values.last_name}</Typography>
          <Typography>Email: {props.values.email}</Typography>
          <Typography>Role: {props.values.role}</Typography>
        </>
      );
  }
}
