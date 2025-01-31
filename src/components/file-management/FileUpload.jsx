import { Alert, KeenIcon } from '@/components';
import axios from 'axios';
import clsx from 'clsx';
import { ErrorMessage, Field, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { FileTable } from './FileTable';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const FileUpload = ({ TypeId, Type }) => {
  const [documents, setDocuments] = useState([]);
  const [pagination, setPagination] = useState({ totalPages: 1, currentPage: 1, pageSize: 10 });
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const FileUploadSchema = Yup.object().shape({
    DocumentName: Yup.string().required('Document Name is required'),
  });

  useEffect(() => {
    if (!TypeId) return;
    fetchDocuments(pagination.currentPage);
  }, [TypeId, pagination.currentPage]);

  const fetchDocuments = async (page) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/document/get-documents/${TypeId}`, {
        params: { page, limit: pagination.pageSize },
      });

      const data = response.data.data;
      setDocuments(
        data.documents.map((doc) => ({
          id: doc._id,
          name: doc.DocumentName,
          createdAt: doc.CreatedAt,
          createdBy: doc.CreatedBy || 'Unknown',
          url: doc.DocumentFileUrl.replace(/\\/g, '/'),
        }))
      );

      setPagination({
        totalPages: data.totalPages,
        currentPage: data.currentPage,
        pageSize: data.pageSize,
      });
    } catch (error) {
      setUploadError(error.response.data.message || 'Failed to fetch documents.');
      setTimeout(() => setUploadError(null), 5000);
    }
  };

  const handleFileUpload = async (file, documentName) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('DocumentName', documentName);
    formData.append('Type', Type);
    formData.append('TypeId', TypeId);

    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/document/upload-document`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      fetchDocuments(pagination.currentPage);

      setUploadSuccess(response.data.message);

      setTimeout(() => setUploadSuccess(null), 3000);
    } catch (error) {
      setUploadError(
        error.response?.data?.message || 'Failed to upload document. Please try again.'
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (documentId) => {
    try {
      await axios.delete(`${API_BASE_URL}/document/delete-document/${documentId}`);
      fetchDocuments(pagination.currentPage);
      setUploadSuccess('Document deleted successfully');
      setTimeout(() => setUploadSuccess(null), 5000);
    } catch (error) {
      setUploadError('Failed to delete document.');
    }
  };

  return (
    <div className="card">
      <div className="card-header border-b border-gray-200 py-6">
        <h3 className="card-title text-gray-900 font-medium">Upload Documents</h3>
      </div>

      <div className="card-body flex flex-col gap-8 p-10">
        {uploadSuccess && <Alert variant="success">{uploadSuccess}</Alert>}
        {uploadError && <Alert variant="danger">{uploadError}</Alert>}

        <Formik
          initialValues={{ DocumentName: '' }}
          validationSchema={FileUploadSchema}
          onSubmit={() => {}}
        >
          {({ values, touched, errors, setFieldValue }) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col gap-1">
                <label className="form-label text-gray-900">
                  Document Name <span className="text-danger">*</span>
                </label>
                <label className="input">
                  <Field
                    type="text"
                    name="DocumentName"
                    placeholder="Enter document name"
                    className={clsx('form-control', {
                      'is-invalid': touched.DocumentName && errors.DocumentName,
                    })}
                  />
                </label>
                <ErrorMessage
                  name="DocumentName"
                  component="div"
                  className="text-danger text-xs mt-1"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="form-label text-gray-900">
                  Upload Document <span className="text-danger">*</span>
                </label>
                <label className="btn cursor-pointer btn-light flex items-center px-4 py-2">
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

                      setFieldValue('DocumentFile', file);
                      if (values.DocumentName) {
                        handleFileUpload(file, values.DocumentName);
                      }
                    }}
                  />
                  <KeenIcon icon="document" className="me-2" />
                  Choose File
                </label>
              </div>
            </div>
          )}
        </Formik>

        <FileTable
          documents={documents}
          onDelete={handleDelete}
          pagination={pagination}
          onPageChange={fetchDocuments}
        />
      </div>
    </div>
  );
};

export { FileUpload };
