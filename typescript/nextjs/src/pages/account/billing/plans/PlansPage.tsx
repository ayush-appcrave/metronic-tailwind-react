import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import { Fragment } from 'react';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/layouts/demo1/toolbar';
import Link from 'next/link';

import { PlansContent } from '.';

const PlansPage = () => {
  return (
    <Fragment>
      <Navbar>
        <Container>
          {MENU_SIDEBAR[3]?.children && <NavbarMenu items={MENU_SIDEBAR[3].children} />}
        </Container>
      </Navbar>

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
        <PlansContent />
      </Container>
    </Fragment>
  );
};

export default  PlansPage ;
