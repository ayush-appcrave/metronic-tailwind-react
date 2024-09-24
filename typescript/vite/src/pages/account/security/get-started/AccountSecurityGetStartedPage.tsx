import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import { Toolbar, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { AccountSecurityGetStartedContent } from '.';
import { Link } from 'react-router-dom';

const AccountSecurityGetStartedPage = () => {
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
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">19 issues need your attention</span>
                <span className="size-0.75 bg-gray-600 rounded-full"></span>
                <Link to="/account/security/security-log" className="font-medium btn btn-link link">
                  Security Log
                </Link>
              </div>
            </ToolbarDescription>
          </ToolbarHeading>
        </Toolbar>
      </Container>

      <Container>
        <AccountSecurityGetStartedContent />
      </Container>
    </>
  );
};

export { AccountSecurityGetStartedPage };
