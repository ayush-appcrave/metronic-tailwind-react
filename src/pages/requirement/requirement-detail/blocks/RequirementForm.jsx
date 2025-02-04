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

  return (
    <div className="card">
      <div className="card-header border-b border-gray-200 py-6">
        <h3 className="card-title text-gray-900 font-medium">{requirementID ? 'Edit Requirement' : 'Create Requirement'}</h3>
      </div>

      <form onSubmit={formik.handleSubmit} className="card-body flex flex-col gap-8 p-10">
        {formik.status && <Alert variant={formik.status.type === 'success' ? 'success' : 'danger'}>{formik.status.message}</Alert>}

        {/* Requirement Title */}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Requirement Title <span className="text-danger">*</span></label>
          <input type="text" {...formik.getFieldProps('requirement_title')} className="input" placeholder="Enter requirement title" />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Company <span className="text-danger">*</span></label>
          <Select value={formik.values.requirement_by} onValueChange={(value) => formik.setFieldValue('requirement_by', value)}>
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
        </div>

        {/* Other Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Number of Positions <span className="text-danger">*</span></label>
            <input type="number" {...formik.getFieldProps('number_of_positions')} className="input" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Location <span className="text-danger">*</span></label>
            <input type="text" {...formik.getFieldProps('location')} className="input" placeholder="Enter location" />
          </div>
        </div>

        {/* Status, Priority, Contract Type */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Status <span className="text-danger">*</span></label>
            <Select value={formik.values.status} onValueChange={(value) => formik.setFieldValue('status', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(requirementStatus).map(([key, value]) => (
                  <SelectItem key={key} value={key}>{value}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Priority <span className="text-danger">*</span></label>
            <Select value={formik.values.priority} onValueChange={(value) => formik.setFieldValue('priority', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(requirementPriority).map(([key, value]) => (
                  <SelectItem key={key} value={key}>{value}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-2">
          <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
            {requirementID ? (formik.isSubmitting ? 'Updating...' : 'Update Requirement') : (formik.isSubmitting ? 'Creating...' : 'Create Requirement')}
          </button>
        </div>
      </form>
    </div>
  );
};

export { RequirementForm };
