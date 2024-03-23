import * as Yup from 'yup';
const createAccountSchemas = [Yup.object({
  first_name: Yup.string().required('First name is required.'),
  last_name: Yup.string().required('Last name is required.'),
  email: Yup.string().email('Invalid email address.').required('Email is required.'),
  role: Yup.string().required('Role is required')
}), Yup.object({
  password: Yup.string().min(8, 'Password length should be at least 8.').required('Password field is required.'),
  password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Password confirmation field is required.'),
  two_steps_auth: Yup.boolean().required('Two steps auth is required.')
})];
const inits = {
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  role: 'user',
  two_steps_auth: false,
  password: '',
  password_confirmation: ''
};
export { createAccountSchemas, inits };