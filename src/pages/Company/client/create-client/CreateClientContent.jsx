import { useState } from 'react';
import { ClientForm } from './blocks';
import { DocumentUpload } from './blocks/DocumentUpload';

const CreateClientContent = () => {
  const [companyId, setCompanyId] = useState(null);

  const handleClientCreated = (createdCompanyId) => {
    setCompanyId(createdCompanyId);
  };

  return (
    <div className="grid gap-5 lg:gap-7.5">
      {!companyId ? (
        <ClientForm onClientCreated={handleClientCreated} />
      ) : (
        <DocumentUpload companyId={companyId} />
      )}
    </div>
  );
};
export { CreateClientContent };
