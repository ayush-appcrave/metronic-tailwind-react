import { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router';
import { useMenuCurrentItem } from '@/components/menu';
import { useMenus } from '@/providers';
import { Header, Sidebar, Footer, Toolbar, ToolbarActions, ToolbarHeading } from '..';
import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components';
import { useResponsive, useViewport } from '@/hooks';

const Main = () => {
  const mobileMode = useResponsive('down', 'lg');
  const { pathname } = useLocation();
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const menuItem = useMenuCurrentItem(pathname, menuConfig);
  const [viewportHeight] = useViewport();
  const [scrollableHeight, setScrollableHeight] = useState<number>(0);
  const scrollableOffset = 200;

  useEffect(() => {
    const calculateHeight = viewportHeight - scrollableOffset;
    setScrollableHeight(calculateHeight);
  }, [viewportHeight]);

  return (
    <Fragment>
      <Helmet>
        <title>{menuItem?.title}</title>
      </Helmet>
      <div className="flex flex-col grow">
        {mobileMode && <Header />}

        <div className="flex grow flex-col pt-[--tw-header-height] lg:pt-0">
          <Sidebar />

          <main
            className="scrollable-y-auto [scrollbar-width:auto] light:[--tw-scrollbar-thumb-color:var(--tw-content-scrollbar-color)] flex flex-col grow rounded-xl bg-[--tw-content-bg] dark:bg-[--tw-content-bg-dark] border border-gray-300 dark:border-gray-200 lg:ms-[--tw-sidebar-width] pt-5 mt-0 lg:mt-5 m-5"
            style={{
              ...(scrollableHeight > 0 && { height: `${scrollableHeight}px` })
            }}
          >
            <div className="grow" role="content">
              <Toolbar>
                <ToolbarHeading />

                <ToolbarActions>
                  <Link to={'account/home/get-started'} className="btn btn-sm btn-light">
                    <KeenIcon icon="exit-down !text-base" />
                    Export
                  </Link>
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
