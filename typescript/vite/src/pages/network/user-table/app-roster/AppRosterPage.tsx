import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { AppRosterContent } from '.';

const AppRosterPage = () => {
  return (
    <>
      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                Central Hub for Personal Customization
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>
            <a href="#" className="btn btn-sm btn-light">Import CSV</a>
            <a href="#" className="btn btn-sm btn-primary">Add Member</a>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AppRosterContent />
      </Container>
    </>
  );
};

export { AppRosterPage };
