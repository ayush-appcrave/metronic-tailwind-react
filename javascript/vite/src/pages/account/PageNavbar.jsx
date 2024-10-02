import { Container } from '@/components/container';
import { useMenus } from '@/providers';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';
const PageNavbar = () => {
  const {
    getMenuConfig
  } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const accountMenuConfig = menuConfig?.['3']?.children;
  if (accountMenuConfig) {
    return <Navbar>
        <Container>
          <NavbarMenu items={accountMenuConfig} />
        </Container>
      </Navbar>;
  } else {
    return <>test</>;
  }
};
export { PageNavbar };