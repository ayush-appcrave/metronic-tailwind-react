import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDefaultLayout, Content, Toolbar, Intro } from '../layouts/default';
import { useLoading } from '../providers/LoadingProvider';
import { useNavBreadcrumbs } from '@components/nav';
import { PageContainer } from '@components/page-container';
import { NAV_VERTICAL } from '../config/navs.config';

const EcommercePage = () => {
  const { pageLoading, setPageLoading } = useLoading();

  const simulateRestCall = async () => {
    setPageLoading(true);
    console.log(`wow1: ${pageLoading}`);

    try {
      setTimeout(() => {
        setPageLoading(false);
        console.log('wow2:' + pageLoading);
      }, 3000); // simulate 2 second delay
    } catch (error) {
      console.error(error);
      setPageLoading(false);
      console.log('wow3:' + pageLoading);
    }
  };

  useEffect(() => {
    simulateRestCall();
  }, []);

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
};

export { EcommercePage };
