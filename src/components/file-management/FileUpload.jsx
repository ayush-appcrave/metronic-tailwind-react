import { Alert, KeenIcon } from '@/components';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import clsx from 'clsx';
import { FILE_TYPES } from '@/constants/fileTypes';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const FileUpload = ({ 
  documentType,
  documentName,
  onTypeChange,
  onNameChange,
  onFileUpload,
  documentTypes,
  isOtherType,
  formik,
  acceptedFiles = [FILE_TYPES.PDF, FILE_TYPES.DOC, FILE_TYPES.DOCX]
}) => {
  const handleFileUpload = (event) => {
    const file = event.currentTarget.files[0];
    if (!file || !documentType) return;

    if (file.size > MAX_FILE_SIZE) {
      formik.setStatus({ 
        type: 'error', 
        message: 'File size exceeds 5MB limit' 
      });
      event.target.value = '';
      return;
    }

    const fileExtension = `.${file.name.split('.').pop().toLowerCase()}`;
    const isValidType = acceptedFiles.some(
      type => type.extension === fileExtension || type.type === file.type
    );

    if (!isValidType) {
      formik.setStatus({
        type: 'error',
        message: `Invalid file type. Accepted types: ${acceptedFiles.map(type => type.label).join(', ')}`
      });
      event.target.value = '';
      return;
    }

    const displayName = documentType === documentTypes.OTHER ? documentName : documentType;
    onFileUpload(file, displayName);
    formik.setStatus(null);
  };

  return (
    <div className="flex flex-col gap-4">
      {formik.status && (
        <Alert variant={formik.status.type === 'success' ? 'success' : 'danger'}>
          {formik.status.message}
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Document Type</label>
          <Select value={documentType} onValueChange={onTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Document Type" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(documentTypes).map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {isOtherType && (
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Document Name</label>
            <label className="input">
              <input
                type="text"
                placeholder="Enter document name"
                value={documentName}
                onChange={(e) => onNameChange(e.target.value)}
                className="form-control"
              />
            </label>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Upload Document</label>
          <label className={clsx(
            "btn cursor-pointer",
            !documentType ? 'btn-light opacity-50 cursor-not-allowed' : 'btn-light'
          )}>
            <input
              type="file"
              className="hidden"
              accept={acceptedFiles.map(type => `${type.extension}`).join(',')}
              disabled={!documentType}
              onChange={handleFileUpload}
            />
            <KeenIcon icon="document" className="me-2" />
            Choose File
          </label>
        </div>
      </div>
    </div>
  );
};

export { FileUpload };
