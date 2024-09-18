import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import { Toolbar, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { GetStartedContent } from '.';
import { Link } from 'react-router-dom';
const GetStartedPage = () => {
  return <>
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
        <GetStartedContent />
      </Container>
    </>;
};
export { GetStartedPage };