import { Link, Outlet } from 'react-router-dom';

import { ErrorsLayoutProvider } from './ErrorsLayoutProvider';

const Layout = () => {
  return (
    <>
      <h1>Errors layout</h1>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard page 1</Link>
        </li>
        <li>
          <Link href="/dashboard2">Dashboard page 2</Link>
        </li>
        <li>
          <Link href="/errors/404">404 Page not found</Link>
        </li>
        <li>
          <Link href="/errors/500">500 Server internal error</Link>
        </li>
      </ul>
      <h5>Errors content</h5>
      <Outlet />
    </>
  );
};

const ErrorsLayout = () => (
  <ErrorsLayoutProvider>
    <Layout />
  </ErrorsLayoutProvider>
);

export { ErrorsLayout };
