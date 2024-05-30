import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
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
              <span className="text-gray-700">Jayson Tatum</span>
              <a href="mailto:jaytatum@ktstudio.com" className="text-gray-600 hover:text-primary">
                jaytatum@ktstudio.com
              </a>
              <span className="size-0.75 bg-gray-600 rounded-full"></span>
              <a href="#" className="font-semibold text-primary hover:text-primary-active">
                Personal Info
              </a>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>Buttons</ToolbarActions>
        </Toolbar>
      </Container>

      <Container>Page content</Container>
    </>;
};
export { GetStartedPage };