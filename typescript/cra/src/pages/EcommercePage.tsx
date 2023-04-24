import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Content, Toolbar, Intro } from '../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { ContentLoader } from '@components/loaders';
import { NAV_VERTICAL } from '../config/navs.config';

const EcommercePage = () => {
  const [loading, setLoading] = useState(true);
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  const simulateRestCall = () => {
    console.log('page: start');

    try {
      setTimeout(() => {
        setLoading(false);
      }, 3000); // simulate 2 second delay
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    simulateRestCall();
  }, []);

  const renderContent = () => {
    return (
      <>
        <Toolbar>
          <Intro title="Ecommerce" subTitle="statistics & reports" breadcrumbs={breadcrumbs} />
        </Toolbar>
        <Content>
          <PageContainer>Ecommerce page content goes here...</PageContainer>
        </Content>
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>Ecommerce Page</title>
      </Helmet>

      {loading ? <ContentLoader /> : renderContent()}
    </>
  );
};

export { EcommercePage };
