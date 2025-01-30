import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { ClientForm } from './blocks';
import { useState } from 'react';
import { DocumentUpload } from './blocks/DocumentUpload';

const CompanyDetail = ({ companyType }) => {
  console.log('company type', CompanyType);
  console.log('company id', companyId);
  const { currentLayout } = useLayout();
  const [companyId, setCompanyId] = useState(null);

  const handleClientCreated = (createdCompanyId) => {
    setCompanyId(createdCompanyId);
  };


  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <div className="flex items-center flex-wrap gap-1.5 font-medium">
                  <span className="text-md text-gray-700">Create New Client Profile</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Link to="/company/clients" className="btn btn-sm btn-light">
                Back to Clients
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <div className="grid gap-5 lg:gap-7.5">
          {!companyId ? (
            <ClientForm onClientCreated={handleClientCreated} />
          ) : (
            <DocumentUpload companyId={companyId} />
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export { CompanyDetail };
