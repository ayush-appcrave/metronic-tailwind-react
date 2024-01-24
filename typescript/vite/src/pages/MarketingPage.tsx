import { Helmet } from 'react-helmet';

import { Container } from '@/components/container';

import { Content } from '../layouts/demo1';

const MarketingPage = () => {
  return (
    <>
      <Helmet>
        <title>Marketing Page</title>
      </Helmet>

      <Content>
        <Container>Marketing page content goes here...</Container>
      </Content>
    </>
  );
};

export { MarketingPage };
