import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { DefaultLayoutProvider } from "./DefaultLayoutProvider";

const Layout = () => (
  <>
    <Header />
    <Sidebar />
    <Content>
      <>
        <h4>Conent: </h4>
        <Outlet />
      </>
    </Content>
    <Footer />
  </>
);

const DefaultLayout = () => (
  <DefaultLayoutProvider>
    <Layout />
  </DefaultLayoutProvider>
);
export { DefaultLayout };
