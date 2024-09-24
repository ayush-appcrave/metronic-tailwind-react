import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { SaasUsersContent } from '.';

const SaasUsersPage = () => {
  return (
    <>
      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <div className="flex items-center flex-wrap gap-1.5 font-medium">
                <span className="text-md text-gray-600">All Members:</span>
                <span className="text-md text-gray-800 font-semibold me-2">49,053</span>
                <span className="text-md text-gray-600">Pro Licenses</span>
                <span className="text-md text-gray-800 font-semibold">1724</span>
              </div>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <a href="#" className="btn btn-sm btn-light">
              Import CSV
            </a>
            <a href="#" className="btn btn-sm btn-primary">
              Add Member
            </a>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <SaasUsersContent />
      </Container>
    </>
  );
};

export { SaasUsersPage };
