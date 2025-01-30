import { Alert } from '@/components';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import axios from 'axios';
import clsx from 'clsx';
import { City, State } from 'country-state-city';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { companyStatus, companyTypes, } from '../../../../constants/company';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const ClientForm = ({ companyType, companyID }) => {
  const [selectedState, setSelectedState] = useState('');

  const indianStates = State.getStatesOfCountry('IN');
  const cities = City.getCitiesOfState('IN', selectedState);

  const formik = useFormik({
    initialValues: {
      CompanyName: '',
      CompanyEmail: '',
      CompanyType: companyType === "Client" ? 1 : 2, // 1 for Client, 2 for Vendor
      CompanyAddress: {
        City: '',
        State: '',
      },
      CompanySocialLinks: {
        Linkedin: '',
        Website: '',
      },
      CompanyGst: '',
      CompanyStatus: '',
      PocName: '',
      PocContact: '',
      PocEmail: '',
      ModeOfOperations: [],
    },
    validationSchema: Yup.object({
      CompanyName: Yup.string().required('Company name is required'),
      CompanyEmail: Yup.string().email('Invalid email').required('Company email is required'),
      CompanyAddress: Yup.object({
        State: Yup.string().required('State is required'),
        City: Yup.string().when('state', {
          is: (state) => !!state,
          then: () => Yup.string().required('City is required'),
        }),
      }),
      CompanySocialLinks: Yup.object({
        Linkedin: Yup.string().url('Invalid URL').required('LinkedIn URL is required'),

        Website: Yup.string().url('Invalid URL'),
      }),
      CompanyGst: Yup.string().trim(),
      CompanyStatus: Yup.string()
        .required('Status is required')
        .oneOf(Object.keys(companyStatus), 'Invalid status'),
      PocEmail: Yup.string().email('Invalid email'),

      ModeOfOperations: Yup.array()
        .min(1, 'At least one mode of operation is required')
        .of(
          Yup.number() // Expect numbers
            .oneOf(
              Object.keys(companyTypes.ModeOfOperations).map(Number), // Convert keys to numbers
              'Invalid mode of operation'
            )
        ),
    }),
    onSubmit: async (values, { setStatus, setSubmitting, resetForm }) => {
      try {
        // Prepare data for API request
        const updatedValues = {
          ...values,
          CompanyStatus: Number(values.CompanyStatus),
          CompanyType: Number(values.CompanyType),
          ModeOfOperations: values.ModeOfOperations.map(Number),
        };

        let response;

        if (companyID) {
          // Update existing company if ID is present
          response = await axios.put(`${API_BASE_URL}/company/update-company/${companyID}`, updatedValues);
        } else {
          // Create new company if ID is absent
          response = await axios.post(`${API_BASE_URL}/company/create-company`, updatedValues);
        }

        // Display success message from the backend response
        setStatus({ type: 'success', message: response.data.message });
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // setSelectedState('');
        // formik.setFieldValue('CompanyAddress.City', '');
        // resetForm();
      } catch (error) {
        // Handle errors from the backend response
        const errorMessage =
          error.response?.data?.message || `An error occurred while ${companyID ? 'updating' : 'creating'} the ${companyType}.`;
        setStatus({ type: 'error', message: errorMessage });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } finally {
        // Enable the submit button
        setSubmitting(false);
      }
    },
  });

  const handleStateChange = (stateCode) => {
    if (stateCode !== selectedState) {
      setSelectedState(stateCode);
      formik.setFieldValue('CompanyAddress.State', stateCode);
      formik.setFieldValue('CompanyAddress.City', ''); // Only reset city if state changes
    }
  };

  const handleModeOfOperationsChange = (id) => {
    const currentModes = formik.values.ModeOfOperations;
    const numericId = Number(id); // Convert id to a number
    const updatedModes = currentModes.includes(numericId)
      ? currentModes.filter((mode) => mode !== numericId) // Remove if already exists
      : [...currentModes, numericId]; // Add if it doesn't exist

    formik.setFieldValue('ModeOfOperations', updatedModes);
  };

  const fetchCompanyDetails = async (companyId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/company/company-detail/${companyId}`);
      const companyData = response.data.data;

      if (!companyData) return; // Exit if no data

      setSelectedState(companyData.CompanyAddress?.State || '');

      // Prefill form with company data
      formik.setValues({
        CompanyName: companyData.CompanyName || '',
        CompanyEmail: companyData.CompanyEmail || '',
        CompanyType: companyData.CompanyType || (companyType === "Client" ? 1 : 2),
        CompanyAddress: {
          City: companyData.CompanyAddress?.City || '',
          State: companyData.CompanyAddress?.State || '',
        },
        CompanySocialLinks: {
          Linkedin: companyData.CompanySocialLinks?.Linkedin || '',
          Website: companyData.CompanySocialLinks?.Website || '',
        },
        CompanyGst: companyData.CompanyGst || '',
        CompanyStatus: String(companyData.CompanyStatus) || '',
        PocName: companyData.PocName || '',
        PocContact: companyData.PocContact || '',
        PocEmail: companyData.PocEmail || '',
        ModeOfOperations: companyData.ModeOfOperations || [],
      });


    } catch (error) {
      console.error('Error fetching company details:', error);
    }
  };

  useEffect(() => {
    if (companyID) {
      fetchCompanyDetails(companyID);
    }
  }, [companyID]);

  // Ensure cities are available before setting the city
useEffect(() => {
  if (formik.values.CompanyAddress.City && cities.length) {
    formik.setFieldValue('CompanyAddress.City', formik.values.CompanyAddress.City);
  }
}, [cities]);

  return (
    <div className="card">
      <div className="card-header border-b border-gray-200 py-6">
        <h3 className="card-title text-gray-900 font-medium">Company Information</h3>
      </div>

      <form onSubmit={formik.handleSubmit} className="card-body flex flex-col gap-8 p-10">
        {formik.status && (
          <Alert variant={formik.status.type === 'success' ? 'success' : 'danger'}>
            {formik.status.message}
          </Alert>
        )}

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Company Name <span className="text-danger">*</span>
            </label>
            <label className="input">
              <input
                type="text"
                placeholder="Enter company name"
                {...formik.getFieldProps('CompanyName')}
                className={clsx('form-control', {
                  'is-invalid': formik.touched.CompanyName && formik.errors.CompanyName,
                })}
              />
            </label>
            {formik.touched.CompanyName && formik.errors.CompanyName && (
              <span className="text-danger text-xs mt-1">{formik.errors.CompanyName}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Company Email <span className="text-danger">*</span>
            </label>
            <label className="input">
              <input
                type="email"
                placeholder="Enter company email"
                {...formik.getFieldProps('CompanyEmail')}
                className={clsx('form-control', {
                  'is-invalid': formik.touched.CompanyEmail && formik.errors.CompanyEmail,
                })}
              />
            </label>
            {formik.touched.CompanyEmail && formik.errors.CompanyEmail && (
              <span className="text-danger text-xs mt-1">{formik.errors.CompanyEmail}</span>
            )}
          </div>
        </div>
        {/* Mode of Operations */}
        <div className="flex flex-col gap-4">
          <label className="form-label text-gray-900">
            Mode of Operations <span className="text-danger">*</span>
          </label>
          <div className="flex md:flex-row flex-col gap-4">
            {Object.entries(companyTypes.ModeOfOperations).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox
                  id={`mode-${key}`}
                  checked={formik.values.ModeOfOperations.includes(Number(key))} // Compare as numbers
                  onCheckedChange={() => handleModeOfOperationsChange(key)} // Pass the key
                />
                <label
                  htmlFor={`mode-${key}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {value}
                </label>
              </div>
            ))}
          </div>
          {formik.touched.ModeOfOperations && formik.errors.ModeOfOperations && (
            <span className="text-danger text-xs mt-1">{formik.errors.ModeOfOperations}</span>
          )}
        </div>
        {/* Address */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              State <span className="text-danger">*</span>
            </label>
            <Select value={selectedState} onValueChange={handleStateChange}>
              <SelectTrigger
                className={clsx('w-full', {
                  'border-red-500':
                    formik.touched.CompanyAddress?.State && formik.errors.CompanyAddress?.State,
                })}
              >
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {indianStates.map((state) => (
                  <SelectItem key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.CompanyAddress?.State && formik.errors.CompanyAddress?.State && (
              <span className="text-danger text-xs mt-1">{formik.errors.CompanyAddress.State}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              City {selectedState && <span className="text-danger">*</span>}
            </label>
            <Select
              value={formik.values.CompanyAddress.City}
              onValueChange={(city) => formik.setFieldValue('CompanyAddress.City', city)}
              disabled={!selectedState}
            >
              <SelectTrigger
                className={clsx('w-full', {
                  'border-red-500':
                    formik.touched.CompanyAddress?.City && formik.errors.CompanyAddress?.City,
                })}
              >
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.name} value={city.name}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.CompanyAddress?.City && formik.errors.CompanyAddress?.City && (
              <span className="text-danger text-xs mt-1">{formik.errors.CompanyAddress.City}</span>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              LinkedIn URL <span className="text-danger">*</span>
            </label>
            <label className="input">
              <input
                type="url"
                placeholder="Enter LinkedIn URL"
                {...formik.getFieldProps('CompanySocialLinks.Linkedin')}
                className={clsx('form-control', {
                  'is-invalid':
                    formik.touched.CompanySocialLinks?.Linkedin &&
                    formik.errors.CompanySocialLinks?.Linkedin,
                })}
              />
            </label>
            {formik.touched.CompanySocialLinks?.Linkedin &&
              formik.errors.CompanySocialLinks?.Linkedin && (
                <span className="text-danger text-xs mt-1">
                  {formik.errors.CompanySocialLinks.Linkedin}
                </span>
              )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Website</label>
            <label className="input">
              <input
                type="url"
                placeholder="Enter website URL"
                {...formik.getFieldProps('CompanySocialLinks.Website')}
                className="form-control"
              />
            </label>
          </div>
        </div>

        {/* GST & Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">GST Number</label>
            <label className="input">
              <input
                type="text"
                placeholder="Enter GST number (e.g., 22AAAAA0000A1Z5)"
                {...formik.getFieldProps('CompanyGst')}
                className={clsx('form-control', {
                  'is-invalid': formik.touched.CompanyGst && formik.errors.CompanyGst,
                })}
              />
            </label>
            {formik.touched.CompanyGst && formik.errors.CompanyGst && (
              <span className="text-danger text-xs mt-1">{formik.errors.CompanyGst}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Status <span className="text-danger">*</span>
            </label>
            <Select
              value={formik.values.CompanyStatus}
              onValueChange={(value) => formik.setFieldValue('CompanyStatus', value)}
            >
              <SelectTrigger
                className={clsx('w-full', {
                  'border-red-500': formik.touched.CompanyStatus && formik.errors.CompanyStatus,
                })}
              >
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(companyStatus).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.CompanyStatus && formik.errors.CompanyStatus && (
              <span className="text-danger text-xs mt-1">{formik.errors.CompanyStatus}</span>
            )}
          </div>
        </div>

        {/* POC Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">POC Name</label>
            <label className="input">
              <input
                type="text"
                placeholder="Enter POC name"
                {...formik.getFieldProps('PocName')}
                className="form-control"
              />
            </label>
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">POC Contact</label>
            <label className="input">
              <input
                type="tel"
                placeholder="Enter POC contact"
                {...formik.getFieldProps('PocContact')}
                className="form-control"
              />
            </label>
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">POC Email</label>
            <label className="input">
              <input
                type="email"
                placeholder="Enter POC email"
                {...formik.getFieldProps('PocEmail')}
                className={clsx('form-control', {
                  'is-invalid': formik.touched.PocEmail && formik.errors.PocEmail,
                })}
              />
            </label>
            {formik.touched.PocEmail && formik.errors.PocEmail && (
              <span className="text-danger text-xs mt-1">{formik.errors.PocEmail}</span>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>

            {companyID
              ? (formik.isSubmitting ? 'Updating...' : `Update ${companyType}`)
              : (formik.isSubmitting ? 'Creating...' : `Create ${companyType}`)}

          </button>
        </div>
      </form>
    </div>
  );
};

export { ClientForm };
