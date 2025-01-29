import { Alert } from '@/components';
import { FileTable, FileUpload } from '@/components/file-management';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import clsx from 'clsx';
import { City, State } from 'country-state-city';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { companyDocumentType, companyStatus, compnayTypes } from '../../../../../constants/company';
import { FILE_TYPES } from '../../../../../constants/fileTypes';

const CreateClientForm = () => {
  const [selectedState, setSelectedState] = useState('');
  const [documents, setDocuments] = useState([]);

  const indianStates = State.getStatesOfCountry('IN');
  const cities = City.getCitiesOfState('IN', selectedState);

  const formik = useFormik({
    initialValues: {
      companyname: '',
      companyemail: '',
      companyaddress: {
        city: '',
        state: '',
      },
      companysociallinks: {
        linkedin: '',
        website: '',
      },
      companygst: '',
      companystatus: companyStatus.REQUEST_PENDING,
      pocname: '',
      poccontact: '',
      pocemail: '',
      documents: [],
      documentType: '',
      documentName: '',
      documentFile: null,
      modeofoperations: [],
    },
    validationSchema: Yup.object({
      companyname: Yup.string().required('Company name is required'),
      companyemail: Yup.string().email('Invalid email').required('Company email is required'),
      companyaddress: Yup.object({
        state: Yup.string().required('State is required'),
        city: Yup.string().when('state', {
          is: (state) => !!state,
          then: () => Yup.string().required('City is required'),
        }),
      }),
      companysociallinks: Yup.object({
        linkedin: Yup.string().required('LinkedIn URL is required'),
        website: Yup.string().url('Invalid URL'),
      }),
      companygst: Yup.string()
        .matches(
          /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
          'Invalid GST format. Format: 22AAAAA0000A1Z5'
        )
        .length(15, 'GST number must be exactly 15 characters'),
      companystatus: Yup.string()
        .required('Status is required')
        .oneOf(Object.values(companyStatus), 'Invalid status'),
      pocemail: Yup.string().email('Invalid email'),
      documentName: Yup.string().when('documentType', {
        is: companyDocumentType.OTHER,
        then: () => Yup.string().required('Document name is required'),
      }),
      modeofoperations: Yup.array()
        .min(1, 'At least one mode of operation is required')
        .of(
          Yup.string().oneOf(
            Object.values(compnayTypes.modeofoperations),
            'Invalid mode of operation'
          )
        ),
    }),
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      try {
        const formData = new FormData();

        Object.keys(values).forEach((key) => {
          if (key !== 'documents') {
            formData.append(key, values[key]);
          }
        });

        // Add documents
        documents.forEach((doc, index) => {
          formData.append(`documents[${index}][type]`, doc.type);
          formData.append(`documents[${index}][name]`, doc.name);
          formData.append(`documents[${index}][file]`, doc.file);
        });

        console.log('Form submission data:', formData);
        setStatus({ type: 'success', message: 'Client created successfully' });
      } catch (error) {
        setStatus({ type: 'error', message: error.message });
      }
      setSubmitting(false);
    },
  });

  const handleStateChange = (stateCode) => {
    setSelectedState(stateCode);
    formik.setFieldValue(
      'companyaddress.state',
      indianStates.find((state) => state.isoCode === stateCode)?.name || ''
    );
    formik.setFieldValue('companyaddress.city', '');
  };

  const handleDeleteDocument = (id) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  };
  const handleModeOfOperationsChange = (value) => {
    const currentModes = formik.values.modeofoperations;
    const updatedModes = currentModes.includes(value)
      ? currentModes.filter((mode) => mode !== value)
      : [...currentModes, value];
    formik.setFieldValue('modeofoperations', updatedModes);
  };
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
                {...formik.getFieldProps('companyname')}
                className={clsx('form-control', {
                  'is-invalid': formik.touched.companyname && formik.errors.companyname,
                })}
              />
            </label>
            {formik.touched.companyname && formik.errors.companyname && (
              <span className="text-danger text-xs mt-1">{formik.errors.companyname}</span>
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
                {...formik.getFieldProps('companyemail')}
                className={clsx('form-control', {
                  'is-invalid': formik.touched.companyemail && formik.errors.companyemail,
                })}
              />
            </label>
            {formik.touched.companyemail && formik.errors.companyemail && (
              <span className="text-danger text-xs mt-1">{formik.errors.companyemail}</span>
            )}
          </div>
        </div>
        {/* Mode of Operations */}
        <div className="flex flex-col gap-4">
          <label className="form-label text-gray-900">
            Mode of Operations <span className="text-danger">*</span>
          </label>
          <div className="flex md:flex-row flex-col gap-4">
            {Object.entries(compnayTypes.modeofoperations).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox
                  id={`mode-${key}`}
                  checked={formik.values.modeofoperations.includes(value)}
                  onCheckedChange={() => handleModeOfOperationsChange(value)}
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
          {formik.touched.modeofoperations && formik.errors.modeofoperations && (
            <span className="text-danger text-xs mt-1">{formik.errors.modeofoperations}</span>
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
                    formik.touched.companyaddress?.state && formik.errors.companyaddress?.state,
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
            {formik.touched.companyaddress?.state && formik.errors.companyaddress?.state && (
              <span className="text-danger text-xs mt-1">{formik.errors.companyaddress.state}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              City {selectedState && <span className="text-danger">*</span>}
            </label>
            <Select
              value={formik.values.companyaddress.city}
              onValueChange={(city) => formik.setFieldValue('companyaddress.city', city)}
              disabled={!selectedState}
            >
              <SelectTrigger
                className={clsx('w-full', {
                  'border-red-500':
                    formik.touched.companyaddress?.city && formik.errors.companyaddress?.city,
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
            {formik.touched.companyaddress?.city && formik.errors.companyaddress?.city && (
              <span className="text-danger text-xs mt-1">{formik.errors.companyaddress.city}</span>
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
                {...formik.getFieldProps('companysociallinks.linkedin')}
                className={clsx('form-control', {
                  'is-invalid':
                    formik.touched.companysociallinks?.linkedin &&
                    formik.errors.companysociallinks?.linkedin,
                })}
              />
            </label>
            {formik.touched.companysociallinks?.linkedin &&
              formik.errors.companysociallinks?.linkedin && (
                <span className="text-danger text-xs mt-1">
                  {formik.errors.companysociallinks.linkedin}
                </span>
              )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Website</label>
            <label className="input">
              <input
                type="url"
                placeholder="Enter website URL"
                {...formik.getFieldProps('companysociallinks.website')}
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
                {...formik.getFieldProps('companygst')}
                className={clsx('form-control', {
                  'is-invalid': formik.touched.companygst && formik.errors.companygst,
                })}
              />
            </label>
            {formik.touched.companygst && formik.errors.companygst && (
              <span className="text-danger text-xs mt-1">{formik.errors.companygst}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">
              Status <span className="text-danger">*</span>
            </label>
            <Select
              value={formik.values.companystatus}
              onValueChange={(value) => formik.setFieldValue('companystatus', value)}
            >
              <SelectTrigger
                className={clsx('w-full', {
                  'border-red-500': formik.touched.companystatus && formik.errors.companystatus,
                })}
              >
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(companyStatus).map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.companystatus && formik.errors.companystatus && (
              <span className="text-danger text-xs mt-1">{formik.errors.companystatus}</span>
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
                {...formik.getFieldProps('pocname')}
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
                {...formik.getFieldProps('poccontact')}
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
                {...formik.getFieldProps('pocemail')}
                className={clsx('form-control', {
                  'is-invalid': formik.touched.pocemail && formik.errors.pocemail,
                })}
              />
            </label>
            {formik.touched.pocemail && formik.errors.pocemail && (
              <span className="text-danger text-xs mt-1">{formik.errors.pocemail}</span>
            )}
          </div>
        </div>

        {/* Documents Section */}

        <div className="flex flex-col gap-4">
          <h4 className="text-gray-900 font-medium">Company Documents</h4>
          <FileUpload
            documentType={formik.values.documentType}
            documentName={formik.values.documentName}
            onTypeChange={(value) => formik.setFieldValue('documentType', value)}
            onNameChange={(value) => formik.setFieldValue('documentName', value)}
            onFileUpload={(file, displayName) => {
              const newDocument = {
                id: Date.now(),
                type: displayName,
                name: file.name,
                file: file,
                url: URL.createObjectURL(file),
              };
              setDocuments((prev) => [...prev, newDocument]);
              formik.setFieldValue('documentType', '');
              formik.setFieldValue('documentName', '');
            }}
            documentTypes={companyDocumentType}
            isOtherType={formik.values.documentType === companyDocumentType.OTHER}
            formik={formik}
            acceptedFiles={[FILE_TYPES.PDF, FILE_TYPES.DOC, FILE_TYPES.DOCX]}
          />
          {documents.length > 0 && (
            <FileTable documents={documents} onDelete={handleDeleteDocument} />
          )}
        </div>

        <div className="flex justify-end gap-2">
          <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? 'Creating...' : 'Create Client'}
          </button>
        </div>
      </form>
    </div>
  );
};

export { CreateClientForm };
