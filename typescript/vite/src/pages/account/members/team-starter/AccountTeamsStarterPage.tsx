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
import { AccountTeamsStarterContent } from '.';

const AccountTeamsStarterPage = () => {
  return (
    <Fragment>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                Efficient team organization with real-time updates
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <a href="#" className="btn btn-sm btn-light">
              Plans
            </a>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountTeamsStarterContent />
      </Container>
    </Fragment>
  );
};

export { AccountTeamsStarterPage };
