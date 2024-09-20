import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { CurrentSessionsContent } from '.';
import { Link } from 'react-router-dom';

const CurrentSessionsPage = () => {
  return (
    <>
      <Navbar>
        <Container>
          {MENU_SIDEBAR[3]?.children && <NavbarMenu items={MENU_SIDEBAR[3].children} />}
        </Container>
      </Navbar>

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                Authorized Devices for Report Access
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <Link to="/account/security/security-log" className="btn btn-sm btn-light">
              Activity Log
            </Link>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <CurrentSessionsContent />
      </Container>
    </>
  );
};

export { CurrentSessionsPage };
