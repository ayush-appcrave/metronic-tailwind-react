import { Link, Outlet } from "react-router-dom";
import { DefaultLayout2Provider } from "./DefaultLayout2Provider";

const Layout = () => {
  return (
    <>
      <h1>Default layout 2</h1>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard page 1</Link>
        </li>
        <li>
          <Link to="/dashboard2">Dashboard page 2</Link>
        </li>
        <li>
          <Link to="/errors/404">404 Page not found</Link>
        </li>
        <li>
          <Link to="/errors/500">500 Server internal error</Link>
        </li>
      </ul>
      <h5>Default layout 2 content</h5>
      <Outlet />
    </>
  );
};

const DefaultLayout2 = () => (
  <DefaultLayout2Provider>
    <Layout />
  </DefaultLayout2Provider>
);

export { DefaultLayout2 };
