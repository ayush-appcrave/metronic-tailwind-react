import { FileUpload } from '@/components/file-management';

const DocumentUpload = ({ typeID }) => {
  return <FileUpload TypeId={typeID} Type="Requirement" />;
};

export { DocumentUpload };
