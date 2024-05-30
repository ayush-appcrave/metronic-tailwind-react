import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
import {ReactElement} from "react";
import {Demo1Layout} from "@/layouts/demo1";
import SettingsSidebarPage from "@/pages/account/home/settings-sidebar/SettingsSidebarPage";

const UserProfilePage = () => {
  return (
    <>
      <Container>
        <Navbar>
          {MENU_SIDEBAR[3]?.children && <NavbarMenu items={MENU_SIDEBAR[3].children} />}
        </Navbar>
      </Container>

      <Container>Page content</Container>
    </>
  );
};

UserProfilePage.getLayout = (page: ReactElement) => <Demo1Layout>{page}</Demo1Layout>;

export default  UserProfilePage ;
