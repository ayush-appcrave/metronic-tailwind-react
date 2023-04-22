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
    console.log('page: start');

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

  useEffect(() => {
    console.log('page: ecommerce');
  }, []);

  if (pageLoading) {
    return <LoadingPage />;
  } else {
    console.log('page: ecommerce inner');
    return (
      <>
        <Helmet>
          <title>Ecommerce Page</title>
        </Helmet>
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
  }
};

export { EcommercePage };
