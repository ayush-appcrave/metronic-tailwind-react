import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Fragment } from 'react';
import { ClientTableContent } from '.';
import { AddClientDialog } from './dialogs';
const ClientTablePage = () => {
  const { currentLayout } = useLayout();
  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <div className="flex items-center flex-wrap gap-1.5 font-medium">
                  <span className="text-md text-gray-700">All Members:</span>
                  <span className="text-md text-gray-800 font-medium me-2">49,053</span>
                  <span className="text-md text-gray-700">Pro Licenses</span>
                  <span className="text-md text-gray-800 font-medium">724</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-light">
                Import CSV
              </a>

              <AddClientDialog />
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <ClientTableContent />
      </Container>
    </Fragment>
  );
};
export { ClientTablePage };
