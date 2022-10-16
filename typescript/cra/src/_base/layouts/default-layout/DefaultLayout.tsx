import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { DefaultLayoutProvider } from "./DefaultLayoutProvider";

const Layout = () => (
  <>
    <Sidebar />
    <Content>
      <Outlet />
    </Content>
    <Footer />
    <Header />
  </>
);

const DefaulLayout = () => (
  <DefaultLayoutProvider>
    <Layout />
  </DefaultLayoutProvider>
);
export { DefaulLayout };
