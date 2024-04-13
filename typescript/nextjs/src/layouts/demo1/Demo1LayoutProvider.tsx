import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useMenuChildren } from '@/components/menu';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMenu } from '@/providers';
import { ILayoutConfig, useLayout } from '@/providers/LayoutProvider';
import { deepMerge } from '@/utils';

import { demo1LayoutConfig } from './';

export interface Demo1LayoutProviderProps {
  layout: ILayoutConfig;
  headerSticky: boolean;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  setSidebarCollapse: (collapse: boolean) => void;
}

const initialLayoutProps: Demo1LayoutProviderProps = {
  layout: demo1LayoutConfig,
  headerSticky: false,
  mobileSidebarOpen: false,
  setMobileSidebarOpen: (_: boolean) => {},
  setSidebarCollapse: (_: boolean) => {}
};

const Demo1LayoutContext = createContext<Demo1LayoutProviderProps>(initialLayoutProps);

const useDemo1Layout = () => useContext(Demo1LayoutContext);

const Demo1LayoutProvider = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();
  const { setMenuConfig } = useMenu();
  const [pathname, setPathname] = useState<string>(router.pathname);
  const secondaryMenu = useMenuChildren(pathname, MENU_SIDEBAR, 0);

  useEffect(() => {
    setMenuConfig('primary', MENU_SIDEBAR);
    setMenuConfig('secondary', secondaryMenu);

    const handleRouteChange = (url: string) => {
      setPathname(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  const { getLayout, updateLayout } = useLayout();

  const getLayoutConfig = () => {
    return deepMerge(demo1LayoutConfig, getLayout(demo1LayoutConfig.name));
  };

  const [layout, setLayout] = useState<ILayoutConfig>(getLayoutConfig);

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  const scrollPosition = useScrollPosition();

  const headerSticky: boolean = scrollPosition > 0;

  const setSidebarCollapse = (collapse: boolean) => {
    const updatedLayout = {
      options: {
        sidebar: {
          collapse
        }
      }
    };

    updateLayout(demo1LayoutConfig.name, updatedLayout);
    setLayout(getLayoutConfig());
  };

  return (
      <Demo1LayoutContext.Provider
          value={{
            layout,
            headerSticky,
            mobileSidebarOpen,
            setMobileSidebarOpen,
            setSidebarCollapse
          }}
      >
        {children}
      </Demo1LayoutContext.Provider>
  );
};

export { Demo1LayoutProvider, useDemo1Layout };
