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

import { AccountSettingsEnterpriseContent } from '.';

const AccountSettingsEnterprisePage = () => {
  return (
    <Fragment>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>Tailored Tools for Business Scalability</ToolbarDescription>
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
