import { Container } from '@/components/container';
import { NavbarMenu } from '../';

const Navbar = () => {
  return (
    <div className="bg-[--tw-header-bg] dark:bg-[--tw-header-bg-dark] border-y border-t-gray-200 border-b-gray-300 mb-5 lg:mb-10">
      <Container className="flex flex-wrap justify-between items-center gap-2">
        <NavbarMenu />
      </Container>
    </div>
  );
};

export { Navbar };
