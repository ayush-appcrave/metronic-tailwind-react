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

import { AccountDeviceManagementContent } from '.';

const AccountDeviceManagementPage = () => {
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
              <div className="flex items-center gap-2 font-medium">
                <span className="text-sm text-gray-600">Authorized Devices for Report Access</span>
                <span className="size-0.75 bg-gray-600 rounded-full"></span>
                <a href="#" className="font-semibold btn btn-link link">
                  Unlink All Devices
                </a>
              </div>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <a href="#" className="btn btn-sm btn-light">
              Security Overview
            </a>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountDeviceManagementContent />
      </Container>
    </>
  );
};

export { AccountDeviceManagementPage };
