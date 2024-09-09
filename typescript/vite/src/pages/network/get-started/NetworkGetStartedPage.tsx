import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu';
import { Navbar } from '@/partials/navbar';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { NetworkGetStartedContent } from '.';
import { Link } from 'react-router-dom';

const NetworkGetStartedPage = () => {
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
              <span className="text-gray-700 font-semibold">19 issues need your attention</span>
              <span className="size-0.75 bg-gray-600 rounded-full"></span>
              <Link 
                to="/account/members/team-info" 
                className="font-semibold btn btn-link link"
              >
                Security Log
              </Link>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>Buttons</ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <NetworkGetStartedContent />
      </Container>
    </>
  );
};

export { NetworkGetStartedPage };
