import { Fragment } from 'react';
import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { PageNavbar } from '@/pages/account';
import { AccountCompanyProfileContent } from '.';
const AccountCompanyProfilePage = () => {
  return <Fragment>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>Central Hub for Personal Customization</ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <a href="#" className="btn btn-sm btn-light">
              Public Profile
            </a>
            <a href="#" className="btn btn-sm btn-primary">
              Billing
            </a>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountCompanyProfileContent />
      </Container>
    </Fragment>;
};
export { AccountCompanyProfilePage };