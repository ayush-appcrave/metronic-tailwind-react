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
import { AccountEnterpriseContent } from '.';

const AccountEnterprisePage = () => {
  return (
    <Fragment>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                Advanced Billing Solutions for Large Businesses
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <a href="#" className="btn btn-sm btn-light">
              Order History
            </a>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountEnterpriseContent />
      </Container>
    </Fragment>
  );
};

export { AccountEnterprisePage };
