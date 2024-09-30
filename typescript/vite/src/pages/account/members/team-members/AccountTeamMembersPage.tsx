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

import { AccountTeamMembersContent } from '.';

const AccountTeamMembersPage = () => {
  return (
    <Fragment>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                Overview of all team members and roles.
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <a href="#" className="btn btn-sm btn-light">
              Import Members
            </a>
            <a href="#" className="btn btn-sm btn-primary">
              Add Member
            </a>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountTeamMembersContent />
      </Container>
    </Fragment>
  );
};

export { AccountTeamMembersPage };
