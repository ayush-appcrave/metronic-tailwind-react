import { Helmet } from 'react-helmet';

import { Container } from '@/components/container';
import { PageTitle } from '@/layouts/demo1/page-title';

import { MENU_SIDEBAR } from '../config/menu.config';
import { Content } from '../layouts/demo1';
import { NavbarMenu } from '../partials/menu/NavbarMenu';

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>

      <Content>
        <Container>
          <PageTitle />
        </Container>
      </Content>
    </>
  );
};

export { DashboardPage };
