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

const CreateClientPage = () => {
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
        <ClientForm />
      </Container>
    </Fragment>
  );
};

export { CreateClientPage };
