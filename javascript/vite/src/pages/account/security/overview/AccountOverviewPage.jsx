import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { PageNavbar } from '@/pages/account';
import { AccountOverviewContent } from '.';
const AccountOverviewPage = () => {
  return <Fragment>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>Central Hub for Personal Customization</ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Link to="/account/security/overview" className="btn btn-sm btn-light">
              Security History
            </Link>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountOverviewContent />
      </Container>
    </Fragment>;
};
export { AccountOverviewPage };