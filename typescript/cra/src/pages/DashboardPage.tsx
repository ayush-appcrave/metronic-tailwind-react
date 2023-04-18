import { Helmet } from 'react-helmet';
import { useDefaultLayout, Content, Toolbar, Intro } from '../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { NAV_VERTICAL } from '../config/navs.config';

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>

      <Toolbar>
        <Intro
          title="Dashboard"
          subTitle="statistics & reports"
          breadcrumbs={useNavBreadcrumbs(NAV_VERTICAL)}
        />
      </Toolbar>

      <Content>
        <PageContainer>Dashboard page content goes here...</PageContainer>
      </Content>
    </>
  );
};

export { DashboardPage };
