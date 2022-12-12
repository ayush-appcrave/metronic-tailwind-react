import { Main } from "./main/Main";
import { Sidebar } from "./sidebar/Sidebar";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
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
