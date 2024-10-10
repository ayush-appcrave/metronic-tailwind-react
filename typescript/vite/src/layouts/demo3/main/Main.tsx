import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router';
import { useMenuCurrentItem } from '@/components/menu';
import { useMenus } from '@/providers';
import { useResponsive, useViewport } from '@/hooks';
import { KeenIcon } from '@/components';
import { Link } from 'react-router-dom';
import { Header, Navbar, Sidebar, Footer, Toolbar, ToolbarActions, ToolbarHeading } from '..';

const Main = () => {
  const desktopMode = useResponsive('up', 'lg');
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

        <div className="flex grow flex-col pt-[--tw-header-height]">
          <Sidebar />

          <Navbar />

          <main
            className="scrollable-y-auto [scrollbar-width:auto] light:[--tw-scrollbar-thumb-color:var(--tw-content-scrollbar-color)] flex flex-col grow rounded-b-xl bg-[--tw-content-bg] dark:bg-[--tw-content-bg-dark] border-x border-b border-gray-400 dark:border-gray-200 lg:mt-[--tw-navbar-height] mx-5 lg:ms-[--tw-sidebar-width] lg:me-5 pt-7 mb-5"
            style={{
              ...(desktopMode && scrollableHeight > 0 && { height: `${scrollableHeight}px` })
            }}
          >
            <div className="grow" role="content">
              {pathname !== '/' && (
                <Toolbar>
                  <ToolbarHeading />
                  <ToolbarActions>
                    <Link to={'account/home/get-started'} className="btn btn-sm btn-light">
                      <KeenIcon icon="exit-down !text-base" />
                      Export
                    </Link>
                  </ToolbarActions>
                </Toolbar>
              )}

              <Outlet />
            </div>

            <Footer />
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export { Main };
