import { Helmet } from 'react-helmet';
import { Content, Toolbar, Intro } from '../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { NAV_VERTICAL } from '../config/navs.config';

const MarketingPage = () => {
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);
  return (
    <>
      <Helmet>
        <title>Marketing Page</title>
      </Helmet>

      <Toolbar>
        <Intro title="Ecommerce" subTitle="statistics & reports" breadcrumbs={breadcrumbs} />
      </Toolbar>

      <Content>
        <PageContainer>Marketing page content goes here...</PageContainer>
      </Content>
    </>
  );
};

export { MarketingPage };
