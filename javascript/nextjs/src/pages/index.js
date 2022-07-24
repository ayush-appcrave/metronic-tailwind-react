import { styled } from '@mui/material/styles';
import Layout from '../layouts';
import Page from '../components/Page';

const Content = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

HomePage.getLayout = function getLayout(page) {
  return <Layout type="default">{page}</Layout>;
};

export default function HomePage() {
  return (
    <Page title="Dashboard">
      Hello world
    </Page>
  );
}
