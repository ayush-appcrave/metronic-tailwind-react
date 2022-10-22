import { Link, Outlet } from "react-router-dom";
import { AuthLayoutProvider } from "./AuthLayoutProvider";

const Layout = () => {
  return (
    <>
      <h1>Auth layout</h1>
      <ul>
        <li>
          <Link to="/default1">Default page 1</Link>
        </li>
        <li>
          <Link to="/default2">Default page 2</Link>
        </li>
        <li>
          <Link to="/auth1">Auth page 1</Link>
        </li>
        <li>
          <Link to="/auth2">Auth page 2</Link>
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
