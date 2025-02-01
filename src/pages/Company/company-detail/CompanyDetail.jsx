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
import { CommentSection } from './blocks/CommentSection';

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
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-7.5'>
          <div className='col-span-3'>
            <div className="grid gap-5 lg:gap-7.5">
              <ClientForm
                onClientCreated={handleClientCreated}
                companyType={companyType}
                companyID={companyId}
              />
              {companyId && <DocumentUpload Type={'Company'} companyID={companyId} />}
            </div>
          </div>
          <div className='col-span-1'>
            <div className="grid gap-5 lg:gap-7.5">
              {companyId && <CommentSection type={'Company'} typeId={companyId} />}
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export { CompanyDetail };
