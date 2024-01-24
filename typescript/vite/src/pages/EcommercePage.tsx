import { Helmet } from 'react-helmet';

import { Container } from '@/components/container';

import { Content } from '../layouts/demo1';

const EcommercePage = () => {
  return (
    <>
      <Helmet>
        <title>eCommerce Page</title>
      </Helmet>

      <Content>
        <Container>eCommerce content goes here...</Container>
      </Content>
    </>
  );
};

export { EcommercePage };
