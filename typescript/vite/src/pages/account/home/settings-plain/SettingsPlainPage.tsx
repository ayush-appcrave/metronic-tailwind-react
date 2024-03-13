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

import { SettingsPlainContent } from '.';

const SettingsPlainPage = () => {
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
              <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                Clean, Efficient User Experience
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>Buttons</ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <SettingsPlainContent />
      </Container>
    </>
  );
};

export { SettingsPlainPage };
