import { Alert, KeenIcon } from '@/components';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { userRole } from '../../../constants/userRole.js';
import { VALIDATION_MESSAGES, VALIDATION_REGEX } from '../../../constants/validation.js';
import { useAuthContext } from '../../useAuthContext.js';

const initialValues = {
  Email: '',
  Password: '',
  Role: '',
  FullName: '',
};
const AddMemberSchema = Yup.object().shape({
  FullName: Yup.string().min(3, 'Minimum 3 symbols').required('FullName is required'),

  Email: Yup.string()
    .matches(VALIDATION_REGEX.EMAIL, VALIDATION_MESSAGES.EMAIL)
    .required(VALIDATION_MESSAGES.EMAIL.REQUIRED),

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

  Role: Yup.string().required('Role is required'),
});

const AddMember = () => {
  const [loading, setLoading] = useState(false);
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema: AddMemberSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      setLoading(true);

      const response = await register(values.Email, values.Password, values.Role, values.FullName);

      if (response.success) {
        setStatus({ type: 'success', message: response.message });

        navigate('/', {
          state: {
            registrationSuccess: true,
            message: response.message,
          },
          replace: true,
        });
      } else {
        setStatus({ type: 'error', message: response.message });
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
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <div className="text-center mb-2.5">
          <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">Add Member</h3>
        </div>

        {formik.status && (
          <Alert variant={formik.status.type === 'success' ? 'success' : 'danger'}>
            {formik.status.message}
          </Alert>
        )}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">FullName</label>
          <label className="input">
            <input
              placeholder="Full Name"
              type="text"
              autoComplete="off"
              {...formik.getFieldProps('FullName')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.FullName && formik.errors.FullName,
                },
                {
                  'is-valid': formik.touched.FullName && !formik.errors.FullName,
                }
              )}
            />
          </label>
          {formik.touched.FullName && formik.errors.FullName && (
            <span role="alert" className="text-danger text-xs mt-1">
              {formik.errors.FullName}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Email</label>
          <label className="input">
            <input
              placeholder="email@mail.com"
              type="email"
              autoComplete="off"
              {...formik.getFieldProps('Email')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.Email && formik.errors.Email,
                },
                {
                  'is-valid': formik.touched.Email && !formik.errors.Email,
                }
              )}
            />
          </label>
          {formik.touched.Email && formik.errors.Email && (
            <span role="alert" className="text-danger text-xs mt-1">
              {formik.errors.Email}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Password</label>
          <label className="input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              autoComplete="off"
              {...formik.getFieldProps('Password')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.Password && formik.errors.Password,
                },
                {
                  'is-valid': formik.touched.Password && !formik.errors.Password,
                }
              )}
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
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Role</label>
          <label className="input">
            <select
              {...formik.getFieldProps('Role')}
              className={clsx('form-select bg-transparent w-full', {
                'is-invalid': formik.touched.Role && formik.errors.Role,
                'is-valid': formik.touched.Role && !formik.errors.Role,
              })}
            >
              <option value="">Select a Role</option>
              {Object.entries(userRole).map(([key, value]) => (
                <option key={key} value={key}>
                  {value
                    .split(/(?=[A-Z])/) // Split camelCase into words
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(' ')}
                </option>
              ))}
            </select>
          </label>
          {formik.touched.Role && formik.errors.Role && (
            <span role="alert" className="text-danger text-xs mt-1">
              {formik.errors.Role}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary flex justify-center grow"
          disabled={loading || formik.isSubmitting}
        >
          {loading ? 'Please wait...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};
export { AddMember };
