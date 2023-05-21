import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { Helmet } from 'react-helmet';

import { NAV_VERTICAL } from 'configs';
import { Content, Intro, Toolbar } from '../layouts/default';

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
