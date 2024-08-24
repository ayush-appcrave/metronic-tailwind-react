import { Helmet } from 'react-helmet';

import { Container } from '@/components/container';
import { LightSidebarContent } from './light-sidebar';

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>

      <Container>
        <LightSidebarContent />
      </Container>
    </>
  );
};

export { DashboardPage };
