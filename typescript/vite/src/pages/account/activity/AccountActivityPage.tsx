import { Fragment } from 'react';

import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';
import { PageNavbar } from '@/pages/account';

import { AccountActivityContent } from '.';

const AccountActivityPage = () => {
  return (
    <Fragment>
      <PageNavbar />

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
            <a href="#" className="btn btn-sm btn-light">
              Privacy Settings
            </a>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <AccountActivityContent />
      </Container>
    </Fragment>
  );
};

export { AccountActivityPage };
