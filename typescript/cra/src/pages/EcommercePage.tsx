import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Content, Toolbar, Intro } from '../layouts/default';
import { useLoading } from '../providers/LoadingProvider';
import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { LoadingPage } from '@components/loading';
import { NAV_VERTICAL } from '../config/navs.config';

const EcommercePage = () => {
  const { pageLoading, setPageLoading } = useLoading();

  const simulateRestCall = () => {
    setPageLoading(true);

    try {
      setTimeout(() => {
        setPageLoading(false);
      }, 3000); // simulate 2 second delay
    } catch (error) {
      console.error(error);
      setPageLoading(false);
    }
  };

  useEffect(() => {
    simulateRestCall();
  }, []);

  const renderContent = () => {
    console.log('compoent: content');
    return (
      <>
        <Toolbar>
          <Intro
            title="Ecommerce"
            subTitle="statistics & reports"
            breadcrumbs={useNavBreadcrumbs(NAV_VERTICAL)}
          />
        </Toolbar>

        <Content>
          <PageContainer>Ecommerce page content goes here...</PageContainer>
        </Content>
      </>
    );
  };

  console.log('page: ecommerce');

  return (
    <>
      <Helmet>
        <title>Ecommerce Page</title>
      </Helmet>

      {pageLoading ? <LoadingPage /> : renderContent()}
    </>
  );
};

export { EcommercePage };
