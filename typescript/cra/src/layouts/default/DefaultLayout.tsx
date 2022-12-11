import { Main } from "./components/main/Main";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { DefaultLayoutProvider } from "./DefaultLayoutProvider";

const Layout = () => (
  <>
    <Sidebar/>
    <Main/>
  </>
);

const DefaultLayout = () => (
  <DefaultLayoutProvider>
    <Layout/>
  </DefaultLayoutProvider>
);
export { DefaultLayout };
