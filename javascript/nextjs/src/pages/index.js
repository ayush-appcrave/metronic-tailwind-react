import { styled } from '@mui/material/styles';
import Layout from '../layouts';
import Page from '../_core/components/Page';

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
