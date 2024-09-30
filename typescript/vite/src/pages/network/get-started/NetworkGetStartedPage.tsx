import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@/components/container';
import { Toolbar, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';

import { NetworkGetStartedContent } from '.';

const NetworkGetStartedPage = () => {
  return (
    <Fragment>
      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <span className="text-gray-700 font-semibold">19 issues need your attention</span>
              <span className="size-0.75 bg-gray-600 rounded-full"></span>
              <Link to="/account/members/team-info" className="font-semibold btn btn-link link">
                Security Log
              </Link>
            </ToolbarDescription>
          </ToolbarHeading>
        </Toolbar>
      </Container>

      <Container>
        <NetworkGetStartedContent />
      </Container>
    </Fragment>
  );
};

export { NetworkGetStartedPage };
