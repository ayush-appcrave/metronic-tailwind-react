import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router';
import { useMenuCurrentItem } from '@/components/menu';
import { Footer, Header, Sidebar, Toolbar, ToolbarActions, ToolbarHeading } from '..';
import { useMenus } from '@/providers';
import { useResponsive } from '@/hooks';
import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components';
import { ToolbarMenu } from '../toolbar/ToolbarMenu';

const Main = () => {
  const mobileMode = useResponsive('down', 'lg');
  const { pathname } = useLocation();
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig('primary');

  return (
    <Fragment>
      <div className="flex flex-col grow">
        <Header />

        <div className="flex grow flex-col pt-[--tw-header-height] lg:pt-0">	
          <Sidebar />
          {mobileMode && <Header />}

          <main className="scrollable-y-auto [scrollbar-width:auto] [--tw-scrollbar-thumb-color:var(--tw-gray-300)] flex flex-col grow lg:rounded-l-xl bg-[--tw-content-bg] dark:bg-[--tw-content-bg-dark] border border-gray-300 dark:border-gray-200 lg:ms-[--tw-sidebar-width] pt-5" role="content">
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
          </main>
        </div> 
      </div>
    </Fragment>
  );
};

export { Main };
