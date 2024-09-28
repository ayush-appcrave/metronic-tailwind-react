import { Fragment } from 'react';
import { Container } from '@/components/container';
import { Toolbar, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { PageNavbar } from '@/pages/account';
import { AccountSecurityGetStartedContent } from '.';
import { Link } from 'react-router-dom';

const AccountSecurityGetStartedPage = () => {
  return (
    <Fragment>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">19 issues need your attention</span>
                <span className="size-0.75 bg-gray-600 rounded-full"></span>
                <Link to="/account/security/security-log" className="font-medium btn btn-link link">
                  Security Log
                </Link>
              </div>
            </ToolbarDescription>
          </ToolbarHeading>
        </Toolbar>
      </Container>

      <Container>
        <AccountSecurityGetStartedContent />
      </Container>
    </Fragment>
  );
};

export { AccountSecurityGetStartedPage };
