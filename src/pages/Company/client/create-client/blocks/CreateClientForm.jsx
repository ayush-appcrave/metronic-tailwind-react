import {Alert} from '@/components';
import {FileTable, FileUpload} from '@/components/file-management';
import {Checkbox} from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import clsx from 'clsx';
import {City, State} from 'country-state-city';
import {useFormik} from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';
import {companyDocumentType, companyStatus, compnayTypes} from '../../../../../constants/company';
import {FILE_TYPES} from '../../../../../constants/fileTypes';
import axios from "axios";
import * as authHelper from '../../../../../auth/_helpers.js';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const CreateClientForm = () => {
    const [selectedState, setSelectedState] = useState('');
    const [Documents, setDocuments] = useState([]);

    const indianStates = State.getStatesOfCountry('IN');
    const cities = City.getCitiesOfState('IN', selectedState);

    const formik = useFormik({
        initialValues: {
            CompanyName: '',
            CompanyEmail: '',
            CompanyAddress: {
                city: '',
                state: '',
            },
            CompanySocialLinks: {
                linkedin: '',
                website: '',
            },
            CompanyGst: '',
            CompanyStatus: companyStatus["1"],
            PocName: '',
            PocContact: '',
            PocEmail: '',
            Documents: [],
            DocumentType: '',
            DocumentName: '',
            DocumentFile: null,
            ModeOfOperations: [],
        },
        validationSchema: Yup.object({
            CompanyName: Yup.string().required('Company name is required'),
            CompanyEmail: Yup.string().email('Invalid email').required('Company email is required'),
            CompanyAddress: Yup.object({
                state: Yup.string().required('State is required'),
                city: Yup.string().when('state', {
                    is: (state) => !!state,
                    then: () => Yup.string().required('City is required'),
                }),
            }),
            CompanySocialLinks: Yup.object({
                linkedin: Yup.string().required('LinkedIn URL is required'),
                website: Yup.string().url('Invalid URL'),
            }),
            CompanyGst: Yup.string()
                .matches(
                    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                    'Invalid GST format. Format: 22AAAAA0000A1Z5'
                )
                .length(15, 'GST number must be exactly 15 characters'),
            CompanyStatus: Yup.string()
                .required('Status is required')
                .oneOf(
                    Object.keys(companyStatus), // ✅ Now validating against KEYS instead of values
                    'Invalid status'
                ),
            PocEmail: Yup.string().email('Invalid email'),
            DocumentName: Yup.string().when('DocumentType', {
                is: companyDocumentType["5"],
                then: () => Yup.string().required('Document name is required'),
            }),
            ModeOfOperations: Yup.array()
                .min(1, 'At least one mode of operation is required')
                .of(
                    Yup.string().oneOf(
                        Object.keys(compnayTypes.ModeOfOperations),
                        'Invalid mode of operation'
                    )
                ),
        }),
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            try {
                const formData = new FormData();

                const response = await axios.post(`${API_BASE_URL}/company/create-company-type`, formik.values);
                // Object.keys(values).forEach((key) => {
                //   if (key !== 'Documents') {
                //     formData.append(key, values[key]);
                //   }
                // });
                //
                // // Add documents
                // Documents.forEach((doc, index) => {
                //   formData.append(`Documents[${index}][type]`, doc.type);
                //   formData.append(`Documents[${index}][name]`, doc.name);
                //   formData.append(`Documents[${index}][file]`, doc.file);
                // });
                //
                // console.log('Form submission data:', formData);

                setStatus({type: 'success', message: 'Client created successfully'});
            } catch (error) {
                setStatus({type: 'error', message: error.message});
            }
            setSubmitting(false);
        },
    });

    const handleStateChange = (stateCode) => {
        setSelectedState(stateCode);
        formik.setFieldValue(
            'CompanyAddress.state',
            indianStates.find((state) => state.isoCode === stateCode)?.name || ''
        );
        formik.setFieldValue('CompanyAddress.city', '');
    };

    const handleDeleteDocument = (id) => {
        setDocuments((prev) => prev.filter((doc) => doc.id !== id));
    };
    const handleModeOfOperationsChange = (id) => {
        console.log(id);
        const currentModes = formik.values.ModeOfOperations;
        const updatedModes = currentModes.includes(id)
            ? currentModes.filter((mode) => mode !== id)
            : [...currentModes, id];

        formik.setFieldValue('ModeOfOperations', updatedModes);
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
                        {Object.entries(compnayTypes.ModeOfOperations).map(([key, value]) => (
                            <div key={key} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`mode-${key}`}
                                    checked={formik.values.ModeOfOperations.includes(key)}
                                    onCheckedChange={() => handleModeOfOperationsChange(key)}
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
                                        formik.touched.CompanyAddress?.state && formik.errors.CompanyAddress?.state,
                                })}
                            >
                                <SelectValue placeholder="Select State"/>
                            </SelectTrigger>
                            <SelectContent>
                                {indianStates.map((state) => (
                                    <SelectItem key={state.isoCode} value={state.isoCode}>
                                        {state.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {formik.touched.CompanyAddress?.state && formik.errors.CompanyAddress?.state && (
                            <span className="text-danger text-xs mt-1">{formik.errors.CompanyAddress.state}</span>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="form-label text-gray-900">
                            City {selectedState && <span className="text-danger">*</span>}
                        </label>
                        <Select
                            value={formik.values.CompanyAddress.city}
                            onValueChange={(city) => formik.setFieldValue('CompanyAddress.city', city)}
                            disabled={!selectedState}
                        >
                            <SelectTrigger
                                className={clsx('w-full', {
                                    'border-red-500':
                                        formik.touched.CompanyAddress?.city && formik.errors.CompanyAddress?.city,
                                })}
                            >
                                <SelectValue placeholder="Select City"/>
                            </SelectTrigger>
                            <SelectContent>
                                {cities.map((city) => (
                                    <SelectItem key={city.name} value={city.name}>
                                        {city.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {formik.touched.CompanyAddress?.city && formik.errors.CompanyAddress?.city && (
                            <span className="text-danger text-xs mt-1">{formik.errors.CompanyAddress.city}</span>
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
                                {...formik.getFieldProps('CompanySocialLinks.linkedin')}
                                className={clsx('form-control', {
                                    'is-invalid':
                                        formik.touched.CompanySocialLinks?.linkedin &&
                                        formik.errors.CompanySocialLinks?.linkedin,
                                })}
                            />
                        </label>
                        {formik.touched.CompanySocialLinks?.linkedin &&
                        formik.errors.CompanySocialLinks?.linkedin && (
                            <span className="text-danger text-xs mt-1">
                  {formik.errors.CompanySocialLinks.linkedin}
                </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="form-label text-gray-900">Website</label>
                        <label className="input">
                            <input
                                type="url"
                                placeholder="Enter website URL"
                                {...formik.getFieldProps('CompanySocialLinks.website')}
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
                            onValueChange={(value) => formik.setFieldValue('CompanyStatus', value)} // ✅ Stores key (ID) instead of label
                        >
                            <SelectTrigger
                                className={clsx('w-full', {
                                    'border-red-500': formik.touched.CompanyStatus && formik.errors.CompanyStatus,
                                })}
                            >
                                <SelectValue placeholder="Select Status"/>
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(companyStatus).map(([key, value]) => ( // ✅ Iterating over [key, value]
                                    <SelectItem key={key} value={key}> {/* ✅ Using key (ID) as value */}
                                        {value} {/* Displaying the label */}
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

                {/* Documents Section */}

                <div className="flex flex-col gap-4">
                    <h4 className="text-gray-900 font-medium">Company Documents</h4>
                    <FileUpload
                        DocumentType={formik.values.DocumentType}
                        DocumentName={formik.values.DocumentName}
                        onTypeChange={(value) => formik.setFieldValue('DocumentType', value)}
                        onNameChange={(value) => formik.setFieldValue('DocumentName', value)}
                        onFileUpload={(file, displayName) => {
                            const newDocument = {
                                id: Date.now(),
                                type: displayName,
                                name: file.name,
                                file: file,
                                url: URL.createObjectURL(file),
                            };
                            setDocuments((prev) => [...prev, newDocument]);
                            formik.setFieldValue('DocumentType', '');
                            formik.setFieldValue('DocumentName', '');
                        }}
                        documentTypes={companyDocumentType}
                        isOtherType={formik.values.DocumentType === companyDocumentType["5"]}
                        formik={formik}
                        acceptedFiles={[FILE_TYPES.PDF, FILE_TYPES.DOC, FILE_TYPES.DOCX]}
                    />
                    {Documents.length > 0 && (
                        <FileTable documents={Documents} onDelete={handleDeleteDocument}/>
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

export {CreateClientForm};
