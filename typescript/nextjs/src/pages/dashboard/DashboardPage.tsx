import { Helmet } from 'react-helmet';

import { Container } from '@/components/container';
import { Demo1Layout } from "@/layouts/demo1";

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>

      <Container>Dashboard page</Container>
    </>
  );
};

DashboardPage.getLayout = (page: React.ReactElement) => <Demo1Layout>{page}</Demo1Layout>;

export default  DashboardPage ;
