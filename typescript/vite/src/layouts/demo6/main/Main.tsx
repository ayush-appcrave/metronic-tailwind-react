import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router';
import { useMenuCurrentItem } from '@/components/menu';
import { Footer, Header, Sidebar, Toolbar, ToolbarActions, ToolbarHeading } from '../';
import { useMenus } from '@/providers';
import { useResponsive, useViewport } from '@/hooks';
import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components';
import { ToolbarMenu } from '../toolbar/ToolbarMenu';

const Main = () => {
  const mobileMode = useResponsive('down', 'lg');
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

      <div className="flex grow">
        <Sidebar />

        <div className="flex grow flex-col pt-[--tw-header-height] lg:pt-0">
          {mobileMode && <Header />}

          <main
            className="scrollable-y-auto [scrollbar-width:auto] [--tw-scrollbar-thumb-color:var(--tw-content-scrollbar-color)] flex flex-col grow items-stretch rounded-xl bg-[--tw-content-bg] dark:bg-[--tw-content-bg-dark] border border-gray-300 dark:border-gray-200 lg:ms-[--tw-sidebar-width] pt-5 mt-0 lg:mt-[15px] m-[15px]"
            style={{ height: `${scrollableHeight}px` }}
          >
            <div className="grow" role="content">
              <Toolbar>
                <ToolbarHeading />

                <ToolbarActions>
                  <Link to={'account/home/get-started'} className="btn btn-sm btn-light">
                    <KeenIcon icon="exit-down !text-base" />
                    Export
                  </Link>
                  <ToolbarMenu />
                </ToolbarActions>
              </Toolbar>
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
