import { Fragment } from 'react';
import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { AccountSettingsEnterpriseContent } from '.';
import { PageNavbar } from '@/pages/account';

const AccountSettingsEnterprisePage = () => {
  return (
    <Fragment>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                Tailored Tools for Business Scalability
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <a href="#" className="btn btn-sm btn-light">
              Public Profile
            </a>
            <a href="#" className="btn btn-sm btn-primary">
              My profile
            </a>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountSettingsEnterpriseContent />
      </Container>
    </Fragment>
  );
};

export { AccountSettingsEnterprisePage };
