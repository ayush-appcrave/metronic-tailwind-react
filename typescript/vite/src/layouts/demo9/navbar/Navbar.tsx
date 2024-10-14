import { Container } from '@/components';
import { MegaMenu } from '../mega-menu';

const Navbar = () => {
  return (
    <div className="bg-[--tw-navbar-bg] dark:bg-[--tw-navbar-bg-dark] lg:flex lg:items-stretch border-y border-gray-300 dark:border-t-light dark:border-light mb-5 lg:mb-10">
      <Container className="flex flex-wrap justify-between items-center gap-2 px-0 lg:px-7.5">
        <MegaMenu />
      </Container>
    </div>
  );
};

export { Navbar };
