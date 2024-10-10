/* eslint-disable react-hooks/exhaustive-deps */
import { Drawer, Scrollspy } from '@/components';
import { useEffect, useRef, useState } from 'react';
import { useResponsive, useScrollPosition, useViewport } from '@/hooks';
import { useDemo5Layout } from '../';
import clsx from 'clsx';
import { getHeight } from '@/utils';
import { usePathname } from '@/providers';
import { DashboardMenu, DefaultMenu } from '.';

const Sidebar = () => {
  const selfRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [, setContentHeight] = useState<number>(0);
  const [viewportHeight] = useViewport();
  const { pathname, prevPathname } = usePathname();
  const [sidebarSticky, setSidebarSticky] = useState(false);
  const navBar = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef(document);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 200) {
      setSidebarSticky(true);
    } else {
      setSidebarSticky(false);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = getHeight(headerRef.current);
      const availableHeight = viewportHeight - headerHeight;
      setContentHeight(availableHeight);
    } else {
      setContentHeight(viewportHeight);
    }
  }, [viewportHeight]);

  const desktopMode = useResponsive('up', 'lg');
  const { mobileSidebarOpen, setSidebarMouseLeave, setMobileSidebarOpen } = useDemo5Layout();
  const { layout } = useDemo5Layout();
  const themeClass: string =
    layout.options.sidebar.theme === 'dark' || pathname === '/dark-sidebar'
      ? 'dark [&.dark]:bg-coal-600'
      : 'dark:bg-coal-600';

  const handleMobileSidebarClose = () => {
    setMobileSidebarOpen(false);
  };

  const handleMouseEnter = () => {
    setSidebarMouseLeave(false);
  };

  const handleMouseLeave = () => {
    setSidebarMouseLeave(true);
  };

  const renderContent = () => {
    return (
      <div
        ref={selfRef}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={clsx('w-[--tw-sidebar-width] shrink-0 hidden lg:flex items-start', themeClass)}
      >
        <div
          className={clsx(
            'w-[--tw-sidebar-width] z-5 lg:top-[80px] top-0 bottom-0 lg:right-auto lg:left-auto shrink-0 p-5 lg:p-0 bg-light dark:bg-coal-100 lg:dark:bg-transparent',
            themeClass
          )}
        >
          {desktopMode && (
            <div className="w-[230px] shrink-0">
              <div
                ref={navBar}
                className={clsx(
                  'w-[230px]',
                  sidebarSticky &&
                    'fixed top-[calc(var(--tw-header-height)+1.875rem)] z-10 left-auto'
                )}
              >
                <Scrollspy offset={10} targetRef={parentRef}>
                  {pathname === '/' ? <DashboardMenu /> : <DefaultMenu />}
                </Scrollspy>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!desktopMode && prevPathname !== pathname) {
      handleMobileSidebarClose();
    }
  }, [desktopMode, handleMobileSidebarClose, pathname, prevPathname]);

  if (desktopMode) {
    return renderContent();
  } else {
    return (
      <Drawer
        open={mobileSidebarOpen}
        onClose={handleMobileSidebarClose}
        ModalProps={{
          keepMounted: true
        }}
      >
        {renderContent()}
      </Drawer>
    );
  }
};

export { Sidebar };
