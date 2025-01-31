import { Alert, KeenIcon } from '@/components';
import { FileTable } from '@/components/file-management';
import axios from 'axios';
import clsx from 'clsx';
import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const FileUpload = ({ TypeId, Type }) => {
  const [documents, setDocuments] = useState([]);
  const [uploadError, setUploadError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const FileUploadSchema = Yup.object().shape({
    documentType: Yup.string().required('Document Type is required'),
  });

  const handleFileUpload = async (file, displayName) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('companyId', companyId);
    formData.append('type', displayName);

    setIsUploading(true);
    setUploadError(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/upload-document`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setDocuments((prev) => [
        ...prev,
        {
          id: response.data.id,
          type: displayName,
          name: file.name,
          url: response.data.url,
        },
      ]);
    } catch (error) {
      setUploadError(
        error.response?.data?.message || 'Failed to upload document. Please try again.'
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteDocument = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/delete-document/${id}`);
      setDocuments((prev) => prev.filter((doc) => doc.id !== id));
    } catch (error) {
      setUploadError('Failed to delete document. Please try again.');
    }
  };

  return (
    <Formik
      initialValues={{ documentType: '', documentName: '' }}
      validationSchema={FileUploadSchema}
      onSubmit={() => {}}
    >
      {({ values, setFieldValue }) => {
        return (
          <div className="card">
            <div className="card-header border-b border-gray-200 py-6">
              <h3 className="card-title text-gray-900 font-medium">Upload Documents</h3>
            </div>

            {uploadError && <Alert variant="danger">{uploadError}</Alert>}

            <div className="card-body flex flex-col gap-8 p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="flex flex-col gap-1">
                  <label className="form-label text-gray-900">Document Type</label>
                  <Field
                    type="text"
                    name="documentType"
                    placeholder="Enter document type"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="documentType"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="form-label text-gray-900">Upload Document</label>
                  <label
                    className={clsx(
                      'btn cursor-pointer',
                      !values.documentType ? 'btn-light opacity-50 cursor-not-allowed' : 'btn-light'
                    )}
                  >
                    <input
                      type="file"
                      className="hidden"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (!file) return;

                        if (file.size > MAX_FILE_SIZE) {
                          setUploadError('File size exceeds 5MB limit');
                          return;
                        }

                        handleFileUpload(file, values.documentType);
                      }}
                    />
                    <KeenIcon icon="document" className="me-2" />
                    Choose File
                  </label>
                </div>
              </div>

              {isUploading && <div className="text-gray-500 text-sm">Uploading...</div>}
              {documents.length > 0 && (
                <FileTable documents={documents} onDelete={handleDeleteDocument} />
              )}
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export { FileUpload };
