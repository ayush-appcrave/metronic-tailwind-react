import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import { Toolbar, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { AccountGetStartedContent } from '.';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const AccountGetStartedPage = () => {
  return (
    <Fragment>
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
              <span className="text-gray-700 font-semibold">Jayson Tatum</span>
              <a href="mailto:jaytatum@ktstudio.com" className="text-gray-600 hover:text-primary">
                jaytatum@ktstudio.com
              </a>
              <span className="size-0.75 bg-gray-600 rounded-full"></span>
              <Link to="/account/members/team-info" className="font-semibold btn btn-link link">
                Personal Info
              </Link>
            </ToolbarDescription>
          </ToolbarHeading>
        </Toolbar>
      </Container>

      <Container>
        <AccountGetStartedContent />
      </Container>
    </Fragment>
  );
};

export { AccountGetStartedPage };
