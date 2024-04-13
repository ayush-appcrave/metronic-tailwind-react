import { Link, Outlet } from 'react-router-dom';

import { AuthLayoutProvider } from './AuthLayoutProvider';

const Layout = () => {
  return (
    <>
      <h1>Auth layout</h1>
      <ul>
        <li>
          <Link href="/auth/login">Sign in</Link>
        </li>
        <li>
          <Link href="/auth/registration">Registration</Link>
        </li>
        <li>
          <Link href="/auth/forgot-password">Forgot password</Link>
        </li>
      </ul>
      <h5>Auth content</h5>
      <Outlet />
    </>
  );
};

const AuthLayout = () => (
  <AuthLayoutProvider>
    <Layout />
  </AuthLayoutProvider>
);

export { AuthLayout };
