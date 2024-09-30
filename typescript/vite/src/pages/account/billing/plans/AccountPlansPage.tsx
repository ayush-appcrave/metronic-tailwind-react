import { Link } from 'react-router-dom';

import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/layouts/demo1/toolbar';
import { PageNavbar } from '@/pages/account';

import { AccountPlansContent } from '.';

const AccountPlansPage = () => {
  return (
    <>
      <PageNavbar />

      <Container>
        <Toolbar>
          <ToolbarHeading title="Plans" description="Central Hub for Personal Customization" />
          <ToolbarActions>
            <Link to="#" className="btn btn-sm btn-light">
              View Billing
            </Link>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountPlansContent />
      </Container>
    </>
  );
};

export { AccountPlansPage };
