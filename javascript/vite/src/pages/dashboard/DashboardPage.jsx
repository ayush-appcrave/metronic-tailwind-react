import { Helmet } from 'react-helmet';
import { Container } from '@/components/container';
const DashboardPage = () => {
  return <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>

      <Container>Dashboard page</Container>
    </>;
};
export { DashboardPage };