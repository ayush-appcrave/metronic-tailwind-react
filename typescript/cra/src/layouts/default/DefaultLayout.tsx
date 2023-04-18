import { Box } from '@mui/material';
import { Main } from './main/Main';
import { Sidebar } from './sidebar/Sidebar';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Settings } from '@components/settings';
import { LoadingPage, LoadingProgressBar } from '@components/loading';
import { DefaultLayoutProvider } from './DefaultLayoutProvider';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Main />
      <Settings />
    </>
  );
};

const DefaultLayout = () => (
  <DefaultLayoutProvider>
    <Layout />
  </DefaultLayoutProvider>
);

export { DefaultLayout };
