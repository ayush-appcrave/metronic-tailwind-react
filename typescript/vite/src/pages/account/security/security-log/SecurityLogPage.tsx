import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import { Toolbar, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { SecurityLogContent } from '.';
import { Link } from 'react-router-dom';

const SecurityLogPage = () => {
  return (
    <>
      <Container>
        <Navbar>
          {MENU_SIDEBAR[3]?.children && <NavbarMenu items={MENU_SIDEBAR[3].children} />}
        </Navbar>
      </Container>

      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Authorized Devices for Report Access</span>
                <span className="size-0.75 bg-gray-600 rounded-full"></span>
                <Link to="/" className="font-medium btn btn-link link">
                  Unlink All Devices
                </Link>
              </div>
            </ToolbarDescription>
          </ToolbarHeading>
        </Toolbar>
      </Container>

      <Container>
        <SecurityLogContent />
      </Container>
    </>
  );
};

export { SecurityLogPage };
