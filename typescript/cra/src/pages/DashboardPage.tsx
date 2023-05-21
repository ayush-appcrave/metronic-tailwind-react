import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { Helmet } from 'react-helmet';

import { NAV_VERTICAL } from '../config/navs.config';
import { Content, Intro, Toolbar } from '../layouts/default';

const DashboardPage = () => {
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>

      <Toolbar>
        <Intro title="Ecommerce" subTitle="statistics & reports" breadcrumbs={breadcrumbs} />
      </Toolbar>

      <Content>
        <PageContainer>Dashboard page content goes here...</PageContainer>
      </Content>
    </>
  );
};

export { DashboardPage };
