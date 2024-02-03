import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Container } from '@/components/container';

import { MENU_SIDEBAR } from '../config/menu.config';
import { NavbarMenu } from '../partials/menu/NavbarMenu';

const MarketingPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>eCommerce Page</title>
      </Helmet>
      <Container>Ecommerce page</Container>
    </Fragment>
  );
};

export { MarketingPage };
