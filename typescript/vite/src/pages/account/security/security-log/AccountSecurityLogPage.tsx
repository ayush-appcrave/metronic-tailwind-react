import { Fragment } from 'react';
import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';
import { PageNavbar } from '@/pages/account';
import { AccountSecurityLogContent } from '.';
import { Link } from 'react-router-dom';

const AccountSecurityLogPage = () => {
  return (
    <Fragment>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Authorized Devices for Report Access</span>
                <span className="size-0.75 bg-gray-600 rounded-full"></span>
                <Link to="/" className="font-medium btn btn-link link">
                  Unlink All Devices
                </Link>
              </div>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Link to="/account/security/overview" className="btn btn-sm btn-light">
              Security Overview
            </Link>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountSecurityLogContent />
      </Container>
    </Fragment>
  );
};

export { AccountSecurityLogPage };
