import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';
import { PageNavbar } from '@/pages/account';

import { AccountCurrentSessionsContent } from '.';

const AccountCurrentSessionsPage = () => {
  return (
    <Fragment>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                Authorized Devices for Report Access
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Link to="/account/security/security-log" className="btn btn-sm btn-light">
              Activity Log
            </Link>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountCurrentSessionsContent />
      </Container>
    </Fragment>
  );
};

export { AccountCurrentSessionsPage };
