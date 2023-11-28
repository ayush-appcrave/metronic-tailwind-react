import { Helmet } from 'react-helmet';

import { useNavBreadcrumbs } from '@/components/nav';
import { PageContainer } from '@/components/page-container';

import { NAV_VERTICAL } from '../config/navs.config';
import { Content, Intro, Toolbar } from '../layouts/default';

const DashboardPage = () => {
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);
  console.log('page render: dashboard');

  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>

      <Toolbar>
        <Intro title="Ecommerce" subTitle="statistics & reports" breadcrumbs={breadcrumbs} />
      </Toolbar>

      <Content>
        <PageContainer>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
          <p>Dashboard page content goes here...</p>
        </PageContainer>
      </Content>
    </>
  );
};

export { DashboardPage };
