import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { getUserById, updateUser } from '../../core/_requests';
import { type User } from '../../core/_models';
import { useQueryResponse } from '../../core/QueryResponseProvider';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface UpdateUserGeneralInfoProps {
  userId: string;
  exitHandler: () => void;
}

function UpdateUserGeneralInfoAccordion(props: UpdateUserGeneralInfoProps) {
  const { exitHandler } = props;
  const { enqueueSnackbar } = useSnackbar();
  const { refetch } = useQueryResponse();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<null | string>(null);
  const [formData, setFormData] = useState<User>({
    id: props.userId,
    first_name: '',
    last_name: '',
    email: '',
    role: 'user',
    two_steps_auth: false
  });

  useEffect(() => {
    setLoading(true);
    getUserById(props.userId)
      .then((user) => {
        setFormData(user as User);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [props.userId]);

  const validationSchema = Yup.object({
    first_name: Yup.string().required('First name is required.'),
    last_name: Yup.string().required('Last name is required.'),
    email: Yup.string().email('Invalid email address.').required('Email is required.'),
    role: Yup.string().required('Role is required'),
    two_steps_auth: Yup.boolean().required('Two steps auth is required.')
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="general-info"
        id="general-info">
        <Typography>General Info</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {!loading && (
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              try {
                await updateUser(values);
                refetch();
                enqueueSnackbar('User general info was successfully updated.', {
                  variant: 'success'
                });
                setProgress(null);
              } catch (err) {
                enqueueSnackbar('Ups! Something went wrong!', { variant: 'error' });
                setProgress(null);
              }
            }}>
            {(formikProps) => (
              <form
                style={{
                  display: 'flex'
                }}
                onSubmit={formikProps.handleSubmit}>
                <Grid
                  container
                  alignItems="center"
                  position="relative"
                  margin={'40px'}
                  direction="column">
                  <FormGroup sx={{ marginY: '5px', width: '40%' }}>
                    <TextField
                      type="text"
                      label="First Name"
                      id="first_name"
                      name="first_name"
                      variant="outlined"
                      error={!!formikProps.errors.first_name && formikProps.touched.first_name}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.first_name}
                      helperText={
                        formikProps.touched.first_name && formikProps.errors.first_name
                          ? formikProps.errors.first_name
                          : ''
                      }
                    />
                  </FormGroup>
                  <FormGroup sx={{ marginY: '5px', width: '40%' }}>
                    <TextField
                      type="text"
                      label="Last Name"
                      id="last_name"
                      name="last_name"
                      variant="outlined"
                      error={!!formikProps.errors.last_name && formikProps.touched.last_name}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.last_name}
                      helperText={
                        formikProps.touched.last_name && formikProps.errors.last_name
                          ? formikProps.errors.last_name
                          : ''
                      }
                    />
                  </FormGroup>
                  <FormGroup sx={{ marginY: '5px', width: '40%' }}>
                    <TextField
                      type="text"
                      label="Email"
                      id="email"
                      name="email"
                      variant="outlined"
                      error={!!formikProps.errors.email && formikProps.touched.email}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.email}
                      helperText={
                        formikProps.touched.email && formikProps.errors.email
                          ? formikProps.errors.email
                          : ''
                      }
                    />
                  </FormGroup>
                  <FormControl
                    sx={{ marginY: '5px', width: '40%' }}
                    error={!!formikProps.errors.role}>
                    <InputLabel id="kt-role-select-label">Role</InputLabel>
                    <Select
                      labelId="kt-role-select-label"
                      id="kt-role-select"
                      name="role"
                      label="role"
                      error={!!formikProps.errors.role && formikProps.touched.role}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.role}>
                      <MenuItem value="user">User</MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                    {formikProps.touched.role && formikProps.errors.role && (
                      <FormHelperText>{formikProps.errors.role}</FormHelperText>
                    )}
                  </FormControl>
                  <FormGroup sx={{ marginY: '5px', width: '40%' }}>
                    <FormControlLabel
                      control={
                        <Switch
                          name="two_steps_auth"
                          id="two_steps_auth"
                          onChange={formikProps.handleChange}
                          onBlur={formikProps.handleBlur}
                          value={formikProps.values.two_steps_auth}
                        />
                      }
                      label="Two Steps Auth"
                    />
                  </FormGroup>
                  <Box
                    sx={{
                      display: 'flex'
                    }}>
                    <Button
                      style={{ margin: '5px' }}
                      onClick={() => {
                        setProgress('exit');
                        formikProps.handleSubmit();
                        exitHandler();
                      }}
                      variant="contained"
                      color="primary"
                      disabled={!!progress}>
                      {progress === 'exit' ? (
                        <>
                          <CircularProgress
                            color={'inherit'}
                            size={'1rem'}
                            sx={{ marginRight: '10px' }}></CircularProgress>
                          Loading...
                        </>
                      ) : (
                        'Save and Exit'
                      )}
                    </Button>
                    <Button
                      style={{ margin: '5px' }}
                      onClick={() => {
                        setProgress('continue');
                        formikProps.handleSubmit();
                      }}
                      variant="contained"
                      color="primary"
                      disabled={!!progress}>
                      {progress === 'continue' ? (
                        <>
                          <CircularProgress
                            color={'inherit'}
                            size={'1rem'}
                            sx={{ marginRight: '10px' }}></CircularProgress>
                          Loading...
                        </>
                      ) : (
                        'Save and Continue'
                      )}
                    </Button>
                    <Button
                      style={{ margin: '5px' }}
                      onClick={() => {
                        exitHandler();
                      }}
                      variant="contained"
                      color="primary"
                      disabled={!!progress}>
                      Exit
                    </Button>
                  </Box>
                </Grid>
              </form>
            )}
          </Formik>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

export { UpdateUserGeneralInfoAccordion };
