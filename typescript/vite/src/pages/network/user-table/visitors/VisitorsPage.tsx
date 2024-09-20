import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar, NavbarActions } from '@/partials/navbar';
import { Toolbar, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { VisitorsContent } from '.';

const VisitorsPage = () => {
  return (
    <>
      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <div className="flex items-center flex-wrap gap-1.5 font-medium">
                <span className="text-md text-gray-600">All Members:</span>
                <span className="text-md gray-800 font-semibold me-2">49,053</span> 
                <span className="text-md text-gray-600">Pro Licenses</span>
                <span className="text-md gray-800 font-semibold">1724</span> 
              </div>
            </ToolbarDescription>
          </ToolbarHeading>
          <NavbarActions>
            <a href="#" className="btn btn-sm btn-light">Import CSV</a>
            <a href="#" className="btn btn-sm btn-primary">Add Member</a>
          </NavbarActions>
        </Toolbar>
      </Container>

      <Container>
        <VisitorsContent />
      </Container>
    </>
  );
};

export { VisitorsPage };
