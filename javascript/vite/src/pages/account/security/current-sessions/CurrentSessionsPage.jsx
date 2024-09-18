import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import { Toolbar, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { CurrentSessionsContent } from '.';
const CurrentSessionsPage = () => {
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
              <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                Authorized Devices for Report Access
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
        </Toolbar>
      </Container>

      <Container>
        <CurrentSessionsContent />
      </Container>
    </>;
};
export { CurrentSessionsPage };