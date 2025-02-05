import { Alert } from '@/components';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { requirementStatus, requirementPriority, requirementContractType } from '@/constants/requirement';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const RequirementForm = ({ requirementID }) => {
  const [companies, setCompanies] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      requirement_title: '',
      requirement_by: '',
      number_of_positions: '',
      assigned_to: '',
      location: '',
      job_description: '',
      skills: '',
      budget: '',
      experience: '',
      priority: '',
      status: '',
      contract_type: '',
      payroll: '',
      remarks: '',
    },
    validationSchema: Yup.object({
      requirement_title: Yup.string().required('Requirement title is required'),
      requirement_by: Yup.string().required('Please select a company'),
      number_of_positions: Yup.number().min(1, 'Must be at least 1').required('Number of positions is required'),
      assigned_to: Yup.string().required('Please assign to a user'),
      location: Yup.string().required('Location is required'),
      job_description: Yup.string().required('Job description is required'),
      skills: Yup.string().required('Skills are required'),
      budget: Yup.string().required('Budget is required'),
      experience: Yup.string().required('Experience is required'),
      priority: Yup.string().required('Please select a priority'),
      status: Yup.string().required('Please select a status'),
      contract_type: Yup.string().required('Please select a contract type'),
      payroll: Yup.string().required('Payroll details are required'),
      remarks: Yup.string().required('Remarks are required').min(1, 'Must be at least 1 character').max(1000, 'Must not exceed 1000 characters'),
    }),

    onSubmit: async (values, { setStatus, setSubmitting }) => {
      try {
        let response;

        if (!requirementID) {
          response = await axios.post(`${API_BASE_URL}/requirement/create-requirement`, values);
          navigate(`/requirement/detail/${response.data.data._id}`);
        } else {
          response = await axios.put(`${API_BASE_URL}/requirement/update-requirement/${requirementID}`, values);
        }

        setStatus({ type: 'success', message: response.data.message });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || `An error occurred while ${requirementID ? 'updating' : 'creating'} the requirement.`;
        setStatus({ type: 'error', message: errorMessage });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Fetch companies
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/company`, {
          params: {
            type: 1
          },
        });
        setCompanies(response.data.data.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };
    fetchCompanies();
  }, []);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    if (requirementID) {
      const fetchRequirementDetails = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/requirement/detail/${requirementID}`);
          const requirementData = response.data.data;
          if (requirementData) {
            formik.setValues({
              requirement_title: requirementData.requirement_title || '',
              requirement_by: requirementData.requirement_by || '',
              number_of_positions: requirementData.number_of_positions || '',
              assigned_to: requirementData.assigned_to || '',
              location: requirementData.location || '',
              job_description: requirementData.job_description || '',
              skills: requirementData.skills || '',
              budget: requirementData.budget || '',
              experience: requirementData.experience || '',
              priority: requirementData.priority || '',
              status: requirementData.status || '',
              contract_type: requirementData.contract_type || '',
              payroll: requirementData.payroll || '',
              remarks: requirementData.remarks || '',
            });
          }
        } catch (error) {
          console.error('Error fetching requirement details:', error);
        }
      };
      fetchRequirementDetails();
    }
  }, [requirementID]);
  
  return (
    <div className="card">
      <div className="card-header border-b border-gray-200 py-6">
        <h3 className="card-title text-gray-900 font-medium">{requirementID ? 'Edit Requirement' : 'Create Requirement'}</h3>
      </div>

      <form onSubmit={formik.handleSubmit} className="card-body flex flex-col gap-8 p-10">
        {formik.status && (
          <Alert variant={formik.status.type === 'success' ? 'success' : 'danger'}>
            {formik.status.message}
          </Alert>
        )}

        {/* Requirement Title */}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">
            Requirement Title <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            {...formik.getFieldProps('requirement_title')}
            className="input"
            placeholder="Enter requirement title"
          />
          {formik.touched.requirement_title && formik.errors.requirement_title && (
            <span className="text-danger text-xs mt-1">{formik.errors.requirement_title}</span>
          )}
        </div>

        {/* Company Selection */}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">
            Company <span className="text-danger">*</span>
          </label>
          <Select
            value={formik.values.requirement_by}
            onValueChange={(value) => formik.setFieldValue('requirement_by', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Company" />
            </SelectTrigger>
            <SelectContent>
              {companies.map((company) => (
                <SelectItem key={company._id} value={company._id}>
                  {company.CompanyName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formik.touched.requirement_by && formik.errors.requirement_by && (
            <span className="text-danger text-xs mt-1">{formik.errors.requirement_by}</span>
          )}
        </div>

        {/* Assigned To Selection */}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">
            Assign To <span className="text-danger">*</span>
          </label>
          <Select
            value={formik.values.assigned_to}
            onValueChange={(value) => formik.setFieldValue('assigned_to', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select User" />
            </SelectTrigger>
            <SelectContent>
              {users.map((user) => (
                <SelectItem key={user._id} value={user._id}>
                  {user.FullName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formik.touched.assigned_to && formik.errors.assigned_to && (
            <span className="text-danger text-xs mt-1">{formik.errors.assigned_to}</span>
          )}
        </div>

        {/* Number of Positions and Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Number of Positions <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              {...formik.getFieldProps('number_of_positions')}
              className="input"
              placeholder="Enter number of positions"
            />
            {formik.touched.number_of_positions && formik.errors.number_of_positions && (
              <span className="text-danger text-xs mt-1">{formik.errors.number_of_positions}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Location <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              {...formik.getFieldProps('location')}
              className="input"
              placeholder="Enter location"
            />
            {formik.touched.location && formik.errors.location && (
              <span className="text-danger text-xs mt-1">{formik.errors.location}</span>
            )}
          </div>
        </div>

        {/* Job Description */}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">
            Job Description <span className="text-danger">*</span>
          </label>
          <Textarea
            {...formik.getFieldProps('job_description')}
            className="input"
            placeholder="Enter job description"
          />
          {formik.touched.job_description && formik.errors.job_description && (
            <span className="text-danger text-xs mt-1">{formik.errors.job_description}</span>
          )}
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">
            Skills <span className="text-danger">*</span>
          </label>
          <Textarea
            {...formik.getFieldProps('skills')}
            className="input"
            placeholder="Enter required skills"
          />
          {formik.touched.skills && formik.errors.skills && (
            <span className="text-danger text-xs mt-1">{formik.errors.skills}</span>
          )}
        </div>

        {/* Budget and Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Budget <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              {...formik.getFieldProps('budget')}
              className="input"
              placeholder="Enter budget details"
            />
            {formik.touched.budget && formik.errors.budget && (
              <span className="text-danger text-xs mt-1">{formik.errors.budget}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Experience <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              {...formik.getFieldProps('experience')}
              className="input"
              placeholder="Enter required experience"
            />
            {formik.touched.experience && formik.errors.experience && (
              <span className="text-danger text-xs mt-1">{formik.errors.experience}</span>
            )}
          </div>
        </div>

        {/* Status, Priority, Contract Type */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Status <span className="text-danger">*</span>
            </label>
            <Select
              value={formik.values.status}
              onValueChange={(value) => formik.setFieldValue('status', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(requirementStatus).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.status && formik.errors.status && (
              <span className="text-danger text-xs mt-1">{formik.errors.status}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Priority <span className="text-danger">*</span>
            </label>
            <Select
              value={formik.values.priority}
              onValueChange={(value) => formik.setFieldValue('priority', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(requirementPriority).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.priority && formik.errors.priority && (
              <span className="text-danger text-xs mt-1">{formik.errors.priority}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Contract Type <span className="text-danger">*</span>
            </label>
            <Select
              value={formik.values.contract_type}
              onValueChange={(value) => formik.setFieldValue('contract_type', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Contract Type" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(requirementContractType).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.contract_type && formik.errors.contract_type && (
              <span className="text-danger text-xs mt-1">{formik.errors.contract_type}</span>
            )}
          </div>
        </div>

        {/* Payroll */}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">
            Payroll <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            {...formik.getFieldProps('payroll')}
            className="input"
            placeholder="Enter payroll details"
          />
          {formik.touched.payroll && formik.errors.payroll && (
            <span className="text-danger text-xs mt-1">{formik.errors.payroll}</span>
          )}
        </div>

        {/* Remarks */}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">
            Remarks <span className="text-danger">*</span>
          </label>
          <Textarea
            {...formik.getFieldProps('remarks')}
            className="input"
            placeholder="Enter remarks"
          />
          {formik.touched.remarks && formik.errors.remarks && (
            <span className="text-danger text-xs mt-1">{formik.errors.remarks}</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-2">
          <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
            {requirementID
              ? formik.isSubmitting
                ? 'Updating...'
                : 'Update Requirement'
              : formik.isSubmitting
              ? 'Creating...'
              : 'Create Requirement'}
          </button>
        </div>
      </form>
    </div>
  );
};

export { RequirementForm };
