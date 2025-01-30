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
import { Users } from './blocks/users';

const CompanyListing = () => {
  const { currentLayout } = useLayout();
  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <div className="flex items-center flex-wrap gap-1.5 font-medium">
                  <span className="text-md text-gray-700">Registered Companies:</span>
                  <span className="text-md text-gray-800 font-medium me-2">49,053</span>
                  <span className="text-md text-gray-700">Onboarded Clients</span>
                  <span className="text-md text-gray-800 font-medium">724</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-light">
                Import CSV
              </a>
              <Link to="/company/clients/create" className="btn btn-sm btn-primary">
                Add New Client
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <div className="grid gap-5 lg:gap-7.5">
          <Users />
        </div>
      </Container>
    </Fragment>
  );
};
export { CompanyListing };
