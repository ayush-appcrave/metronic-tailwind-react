import { useState } from 'react';
import { FileTable, FileUpload } from '@/components/file-management';
import { FILE_TYPES } from '@/constants/fileTypes';
import axios from 'axios';

const DocumentUpload = ({ companyId }) => {
  const [documents, setDocuments] = useState([]);
  const [uploadError, setUploadError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleDeleteDocument = async (id) => {
    try {
      await axios.delete(`/api/delete-document/${id}`);
      setDocuments((prev) => prev.filter((doc) => doc.id !== id));
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const handleFileUpload = async (file, displayName) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('companyId', companyId);
    formData.append('type', displayName);

    setIsUploading(true);
    setUploadError(null);

    try {
      const response = await axios.post('/api/upload-document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const newDocument = {
        id: response.data.id,
        type: displayName,
        name: file.name,
        file: file,
        url: response.data.url,
      };
      setDocuments((prev) => [...prev, newDocument]);
    } catch (error) {
      console.error('Error uploading document:', error);
      setUploadError('Failed to upload document. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-gray-900 font-medium">Upload Company Documents</h4>
      <FileUpload
        onFileUpload={handleFileUpload}
        acceptedFiles={[FILE_TYPES.PDF, FILE_TYPES.DOC, FILE_TYPES.DOCX]}
        isUploading={isUploading}
      />
      {uploadError && (
        <div className="text-red-500 text-sm mt-2">{uploadError}</div>
      )}
      {isUploading && (
        <div className="text-gray-500 text-sm mt-2">Uploading...</div>
      )}
      {documents.length > 0 && (
        <FileTable documents={documents} onDelete={handleDeleteDocument} />
      )}
    </div>
  );
};

export { DocumentUpload };
