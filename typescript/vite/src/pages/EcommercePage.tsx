import { Helmet } from 'react-helmet';

import { Container } from '@/components/container';
import { PageTitle } from '@/layouts/demo1/page-title';

import { MENU_SIDEBAR } from '../config/menu.config';
import { Content } from '../layouts/demo1';
import { NavbarMenu } from '../partials/menu/NavbarMenu';

const EcommercePage = () => {
  return (
    <>
      <Helmet>
        <title>eCommerce Page</title>
      </Helmet>

      <Content>
        <Container>
          <PageTitle />
          {MENU_SIDEBAR[2]?.children && <NavbarMenu items={MENU_SIDEBAR[2].children} />}
        </Container>
      </Content>
    </>
  );
};

export { EcommercePage };
