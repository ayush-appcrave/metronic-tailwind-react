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

import { AccountSettingsPlainContent } from '.';

const AccountSettingsPlainPage = () => {
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
                Clean, Efficient User Experience
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <a href="#" className="btn btn-sm btn-light">
              Public Profile
            </a>
            <a href="#" className="btn btn-sm btn-primary">
              Get Started
            </a>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountSettingsPlainContent />
      </Container>
    </>
  );
};

export { AccountSettingsPlainPage };
