import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Fragment, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ClientForm } from './blocks';
import { DocumentUpload } from './blocks/DocumentUpload';

const CompanyDetail = ({ companyType }) => {
  const { currentLayout } = useLayout();
  const { id } = useParams();
  const [companyId, setCompanyId] = useState(id || null);

  // const loadCompanyDetails = (companyId) => {
  //   // API call or logic to fetch company details from DB
  //   console.log(`Loading data for companyId: ${companyId}`);
  //   setCompanyId(companyId); // Ensure state is updated properly
  // };

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
                  <span className="text-md text-gray-700">
                    {companyId
                      ? `Edit ${companyType} Profile`
                      : `Create New ${companyType} Profile`}
                  </span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Link to={`/company/${companyType}`} className="btn btn-sm btn-light">
                Back to {companyType}
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        {/* Need to work on documents */}
        <div className="grid gap-5 lg:gap-7.5">
          <ClientForm
            onClientCreated={handleClientCreated}
            companyType={companyType}
            companyID={companyId}
          />
          {companyId && <DocumentUpload companyType={companyType} companyID={companyId} />}
        </div>
      </Container>
    </Fragment>
  );
};

export { CompanyDetail };
