import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/layouts/demo1/toolbar';
import { Link } from 'react-router-dom';

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
