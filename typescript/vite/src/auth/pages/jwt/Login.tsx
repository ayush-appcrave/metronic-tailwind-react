import clsx from 'clsx';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuthContext } from '../../useAuthContext';
import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required')
});

const initialValues = {
  email: 'admin@demo.com',
  password: 'demo'
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setRememberMe(event.target.checked);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        if (!login) {
          throw new Error('JWTProveder is required for thir form.');
        }

        await login(values.email, values.password);

        navigate(from, { replace: true });
      } catch (error) {
        setStatus('The login details are incorrect');
        setSubmitting(false);
      }
      setLoading(false);
    }
  });

  return (
    <div className="card max-w-[370px] w-full">
      <form
        className="card-body flex flex-col gap-5 p-10"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <div className="text-center mb-2.5">
          <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">Sign in</h3>
          <div className="flex items-center justify-center font-medium">
            <span className="text-2sm text-gray-600 me-1.5">Need an account?</span>
            <Link to="/auth/registration" className="text-2sm link">Sign up</Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2.5">
          <a href="#" className="btn btn-light btn-sm justify-center">
            <img src={toAbsoluteUrl('/media/brand-logos/google.svg')} className="size-3.5 shrink-0" />
            Use Google
          </a>

          <a href="#" className="btn btn-light btn-sm justify-center">
            <img src={toAbsoluteUrl('/media/brand-logos/apple-black.svg')} className="size-3.5 shrink-0 dark:hidden" />
            <img src={toAbsoluteUrl('/media/brand-logos/apple-white.svg')} className="size-3.5 shrink-0 light:hidden" />
            Use Apple
          </a>
        </div>  

        <div className="flex items-center gap-2">
          <span className="border-t border-gray-200 w-full"></span> 
          <span className="text-2xs text-gray-500 font-medium uppercase">Or</span>  
          <span className="border-t border-gray-200 w-full"></span> 
        </div>

        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Email</label>
          <label className="input">
            <input
              placeholder="email@email.com"
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control bg-transparent',
                { 'is-invalid': formik.touched.email && formik.errors.email },
                {
                  'is-valid': formik.touched.email && !formik.errors.email
                }
              )}
              type="email"
              name="email"
              autoComplete="off"
            />
          </label>
          {formik.touched.email && formik.errors.email && (<span role="alert">{formik.errors.email}</span>)}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-1">
            <label className="form-label text-gray-900">Password</label>
            <Link to="/auth/forgot-password" className="text-2sm link shrink-0">Forgot Password?</Link>
          </div>
          <label className="input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              autoComplete="off"
              {...formik.getFieldProps('password')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.password && formik.errors.password
                },
                {
                  'is-valid': formik.touched.password && !formik.errors.password
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (<span role="alert">{formik.errors.password}</span>)}
            <button className="btn btn-icon" onClick={togglePassword}>
              <KeenIcon icon="eye" className={clsx('text-gray-500', { 'hidden': showPassword })} />
              <KeenIcon icon="eye-slash" className={clsx('text-gray-500', { 'hidden': !showPassword })} />
            </button>
          </label>
        </div>

        <label className="checkbox-group">
          <input
            className="checkbox checkbox-sm"
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <span className="checkbox-label">Remember me</span>
        </label>

        <button
          type="submit"
          className="btn btn-primary flex justify-center grow"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className="indicator-label">Sign In</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: 'block' }}>
              Please wait...
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export { Login };
