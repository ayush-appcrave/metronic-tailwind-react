import { useAuthContext } from '@/auth';
import { Alert, KeenIcon } from '@/components';
import { useLayout } from '@/providers';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { VALIDATION_MESSAGES, VALIDATION_REGEX } from '../../../constants/validation';

const initialValues = {
  Email: '',
  Password: '',
};
const loginSchema = Yup.object().shape({
  Email: Yup.string()
    .matches(VALIDATION_REGEX.EMAIL, VALIDATION_MESSAGES.EMAIL)
    .required('Email is required'),

  Password: Yup.string()
    .min(8, VALIDATION_MESSAGES.PASSWORD.MIN_LENGTH)
    .matches(VALIDATION_REGEX.PASSWORD_RULES.UPPERCASE, VALIDATION_MESSAGES.PASSWORD.UPPERCASE)
    .matches(VALIDATION_REGEX.PASSWORD_RULES.LOWERCASE, VALIDATION_MESSAGES.PASSWORD.LOWERCASE)
    .matches(VALIDATION_REGEX.PASSWORD_RULES.NUMBER, VALIDATION_MESSAGES.PASSWORD.NUMBER)
    .matches(
      VALIDATION_REGEX.PASSWORD_RULES.SPECIAL_CHAR,
      VALIDATION_MESSAGES.PASSWORD.SPECIAL_CHAR
    )
    .required('Password is required'),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [showPassword, setShowPassword] = useState(false);
  const { currentLayout } = useLayout();
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      setLoading(true);

      const response = await login(values.Email, values.Password);
      console.log(response);

      if (response.success) {
        setStatus({ type: 'success', message: response.message });
        const createdAt = new Date(response.data.CreatedAt);
        const today = new Date();
        const isNewUser = createdAt.toDateString() === today.toDateString();

        if (isNewUser) {
          navigate('/auth/welcome-message', { replace: true });
        } else {
          navigate(from, { replace: true });
        }
      } else {
        setStatus({ type: 'error', message: response.message, errors: response.errors });
      }

      setSubmitting(false);
      setLoading(false);
    },
  });

  const togglePassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="card max-w-[390px] w-full">
      <form
        className="card-body flex flex-col gap-5 p-10"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <div className="text-center mb-2.5">
          <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">Sign in</h3>
        </div>

        {formik.status && (
          <Alert variant={formik.status.type === 'success' ? 'success' : 'danger'}>
            {formik.status.message}
          </Alert>
        )}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Email</label>
          <label className="input">
            <input
              placeholder="Enter Email"
              autoComplete="off"
              {...formik.getFieldProps('Email')}
              className={clsx('form-control', {
                'is-invalid': formik.touched.Email && formik.errors.Email,
              })}
            />
          </label>
          {formik.touched.Email && formik.errors.Email && (
            <span role="alert" className="text-danger text-xs mt-1">
              {formik.errors.Email}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-1">
            <label className="form-label text-gray-900">Password</label>
            <Link
              to={
                currentLayout?.name === 'auth-branded'
                  ? '/auth/reset-password'
                  : '/auth/classic/reset-password'
              }
              className="text-2sm link shrink-0"
            >
              Forgot Password?
            </Link>
          </div>
          <label className="input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              autoComplete="off"
              {...formik.getFieldProps('Password')}
              className={clsx('form-control', {
                'is-invalid': formik.touched.Password && formik.errors.Password,
              })}
            />
            <button className="btn btn-icon" onClick={togglePassword}>
              <KeenIcon
                icon="eye"
                className={clsx('text-gray-500', {
                  hidden: showPassword,
                })}
              />
              <KeenIcon
                icon="eye-slash"
                className={clsx('text-gray-500', {
                  hidden: !showPassword,
                })}
              />
            </button>
          </label>
          {formik.touched.Password && formik.errors.Password && (
            <span role="alert" className="text-danger text-xs mt-1">
              {formik.errors.Password}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary flex justify-center grow"
          disabled={loading || formik.isSubmitting}
        >
          {loading ? 'Please wait...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};
export { Login };
