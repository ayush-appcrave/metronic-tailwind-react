import { FileUpload } from '@/components/file-management';

const DocumentUpload = ({ companyID, Type }) => {
  return <FileUpload TypeId={companyID} Type={Type} />;
};

export { DocumentUpload };
