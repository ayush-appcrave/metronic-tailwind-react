import { Helmet } from 'react-helmet-async';
import { useDefaultLayout } from '../layouts/default';
import { Content, Toolbar, Intro } from "../layouts/default";
import { useNavBreadcrumbs } from "@components/nav";
import { PageContainer } from "@components/page-container";
import { NAV_VERTICAL } from "../config/navs.config";

const MarketingPage = () => {  
  
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
        <PageContainer>
          Dashboard page content goes here...
        </PageContainer>
      </Content>
    </>
  );
};

export { MarketingPage };
