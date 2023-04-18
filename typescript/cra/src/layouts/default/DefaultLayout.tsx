import { Main } from './main/Main';
import { Sidebar } from './sidebar/Sidebar';
import { Settings } from '@components/settings';
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
