import { Settings } from '@/components/settings';

import { DefaultLayoutProvider } from './DefaultLayoutProvider';
import { Main } from './main/Main';
import { Sidebar } from './sidebar/Sidebar';

const Layout = () => {
  return (
    <>
      <div className="text-primary">Test</div>
    </>
  );
};

const DefaultLayout = () => (
  <DefaultLayoutProvider>
    <Layout />
  </DefaultLayoutProvider>
);

export { DefaultLayout };
