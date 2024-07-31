import clsx from 'clsx';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuthContext } from '../../useAuthContext';
import { toAbsoluteUrl } from '@/utils';
import { KeenIcon } from '@/components';

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  changepassword: '',
  acceptTerms: false
};

const signupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  lastname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  changepassword: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
  acceptTerms: Yup.bool().required('You must accept the terms and conditions')
});

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        if (!register) {
          throw new Error('JWTProveder is required for thir form.');
        }

        await register(
          values.email,
          values.password,
          values.firstname,
          values.lastname,
          values.changepassword
        );
        navigate(from, { replace: true });
      } catch (error) {
        console.error(error);
        setStatus('The signup details are incorrect');
        setSubmitting(false);
        setLoading(false);
      }
    }
  });

  return (
    <div className="card max-w-[370px] w-full">
      <form
        className="card-body flex flex-col gap-5 p-10"
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <div className="text-center mb-2.5">
          <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">Sign up</h3>
          <div className="flex items-center justify-center font-medium">
            <span className="text-2sm text-gray-600 me-1.5">Already have an Account ?</span>
            <Link to="/auth/login" className="text-2sm link">Sign In</Link>
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

        {formik.status && (
          <div className="mb-lg-15 alert alert-danger">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Email</label>
          <label className="input">
            <input
              placeholder="email@email.com"
              type="email"
              autoComplete="off"
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control bg-transparent',
                { 'is-invalid': formik.touched.email && formik.errors.email },
                {
                  'is-valid': formik.touched.email && !formik.errors.email
                }
              )}
            />
          </label>
          {formik.touched.email && formik.errors.email && (<span role="alert">{formik.errors.email}</span>)}
        </div>

        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Password</label>
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

        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Confirm Password</label>
          <label className="input">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Re-enter Password"
              autoComplete="off"
              {...formik.getFieldProps('changepassword')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.changepassword && formik.errors.changepassword
                },
                {
                  'is-valid': formik.touched.changepassword && !formik.errors.changepassword
                }
              )}
            />
            {formik.touched.changepassword && formik.errors.changepassword && (<span role="alert">{formik.errors.changepassword}</span>)}
            <button className="btn btn-icon" onClick={toggleConfirmPassword}>
              <KeenIcon icon="eye" className={clsx('text-gray-500', { 'hidden': showConfirmPassword })} />
              <KeenIcon icon="eye-slash" className={clsx('text-gray-500', { 'hidden': !showConfirmPassword })} />
            </button>
          </label>
        </div>

        <label className="checkbox-group">
          <input
            className="checkbox checkbox-sm"
            type="checkbox"
            {...formik.getFieldProps('acceptTerms')}
          />
          <span className="checkbox-label">
            I accept{' '}
            <Link to="https://keenthemes.com/metronic/?page=faq" className="text-2sm link">Terms & Conditions</Link>
          </span>
        </label>
        {formik.touched.acceptTerms && formik.errors.acceptTerms && (<span role="alert">{formik.errors.acceptTerms}</span>)}

        <button
          type="submit"
          className="btn btn-primary flex justify-center grow"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className="indicator-label">Sign up</span>}
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

export { Signup };
