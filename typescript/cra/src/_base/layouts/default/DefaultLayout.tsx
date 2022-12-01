import { Outlet } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Sidebar } from "./components/sidebar/Sidebar";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { DefaultLayoutProvider } from "./DefaultLayoutProvider";

const Layout = () => (
  <Grid2 container spacing={1}>
    <Grid2 xs={3}>
      <Sidebar />
    </Grid2>
    <Grid2 xs={9}>
      <Header />
      <Content>
        <>
          <h4>Conent: </h4>
          <Outlet />
        </>
      </Content>
      <Footer />
    </Grid2>
  </Grid2>
);

const DefaultLayout = () => (
  <DefaultLayoutProvider>
    <Layout />
  </DefaultLayoutProvider>
);
export { DefaultLayout };
