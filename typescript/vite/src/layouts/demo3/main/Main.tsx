import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { useMenuCurrentItem } from '@/components/menu';
import { useMenus } from '@/providers';
import { Header, Navbar, Sidebar, Content, Footer } from '..';
import { Toolbar } from '../toolbar';
import { useViewport } from '@/hooks';

const Main = () => {
  const { pathname } = useLocation();
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const menuItem = useMenuCurrentItem(pathname, menuConfig);
  const [viewportHeight] = useViewport();
  const scrollableHeight = viewportHeight - 200;

  return (
    <Fragment>
      <Helmet>
        <title>{menuItem?.title}</title>
      </Helmet>
      <div className="flex flex-col grow">
        <Header />

        <div className="wrapper flex grow flex-col pt-[--tw-header-height]">
          <Sidebar />

          <Navbar />

          <div
            className="scrollable-y-auto [scrollbar-width:auto] light:[--tw-scrollbar-thumb-color:var(--tw-content-scrollbar-color)] 
              flex flex-col grow rounded-b-xl bg-[--tw-content-bg] dark:bg-[--tw-content-bg-dark] border-x border-b border-gray-400 
              dark:border-gray-200 lg:mt-[--tw-navbar-height] mx-5 lg:ms-[--tw-sidebar-width] lg:me-5 pt-7 mb-5"
            style={{ height: `${scrollableHeight}px` }}
          >
            <Toolbar />
            <Content />
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { Main };
