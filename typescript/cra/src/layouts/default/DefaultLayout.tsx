import { Main } from "./main/Main";
import { Sidebar } from "./sidebar/Sidebar";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Settings } from "../../components/settings";
import { DefaultLayoutProvider } from "./DefaultLayoutProvider";

const Layout = () => (
  <>
    <Sidebar/>
    <Main/>
    <Settings/>
  </>
);

const DefaultLayout = () => (
  <DefaultLayoutProvider>
    <Layout/>
  </DefaultLayoutProvider>
);
export { DefaultLayout };
