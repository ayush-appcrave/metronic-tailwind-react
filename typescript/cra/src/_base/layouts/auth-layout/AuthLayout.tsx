import { Outlet } from "react-router-dom";
import { AuthLayoutProvider } from "./AuthLayoutProvider";

const Layout = () => {
  return (
    <>
      <h1>Auth layout</h1>
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
