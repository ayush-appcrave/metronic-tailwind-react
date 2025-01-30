import { FileUpload } from '@/components/file-management';
import { companyDocumentType } from '../../../../constants/company';

const DocumentUpload = ({ companyID, companyType }) => {
  return <FileUpload TypeId={companyID} Type={companyDocumentType} />;
};

export { DocumentUpload };
