import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Container } from '@/components/container';

import { MENU_SIDEBAR } from '../config/menu.config';
import { NavbarMenu } from '../partials/menu/NavbarMenu';

const DashboardPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>

      <Container>Dashboard page</Container>
    </Fragment>
  );
};

export { DashboardPage };
