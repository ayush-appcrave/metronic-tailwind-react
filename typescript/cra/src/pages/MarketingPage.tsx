import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Content, Toolbar, Intro } from '../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { NAV_VERTICAL } from '../config/navs.config';

const MarketingPage = () => {
  useEffect(() => {
    console.log('page: marketing');
  }, []);

  return (
    <>
      <Helmet>
        <title>Marketing Page</title>
      </Helmet>

      <Toolbar>
        <Intro
          title="Marketing"
          subTitle="statistics & reports"
          breadcrumbs={useNavBreadcrumbs(NAV_VERTICAL)}
        />
      </Toolbar>

      <Content>
        <PageContainer>Marketing page content goes here...</PageContainer>
      </Content>
    </>
  );
};

export { MarketingPage };
