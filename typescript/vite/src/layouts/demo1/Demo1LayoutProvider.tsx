import { createContext, type PropsWithChildren, useContext, useState } from 'react';
import { useLocation } from 'react-router';
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
  setSidebarTheme: (mode: string) => void;
}

const initalLayoutProps: Demo1LayoutProviderProps = {
  layout: demo1LayoutConfig,
  headerSticky: false,
  mobileSidebarOpen: false,
  setMobileSidebarOpen: (_: boolean) => {},
  setSidebarCollapse: (_: boolean) => {},
  setSidebarTheme: (_: string) => {}
};

const Demo1LayoutContext = createContext<Demo1LayoutProviderProps>(initalLayoutProps);

const useDemo1Layout = () => useContext(Demo1LayoutContext);

const Demo1LayoutProvider = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const { setMenuConfig } = useMenu();
  const secondaryMenu = useMenuChildren(pathname, MENU_SIDEBAR, 0);

  setMenuConfig('primary', MENU_SIDEBAR);
  setMenuConfig('secondary', secondaryMenu);

  const { getLayout, updateLayout } = useLayout();

  const getLayoutConfig = () => {
    return deepMerge(demo1LayoutConfig, getLayout(demo1LayoutConfig.name));
  };

  const [layout, setLayout] = useState(getLayoutConfig);

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

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

  const setSidebarTheme = (mode: string) => {
    const updatedLayout = {
      options: {
        sidebar: {
          theme: mode
        }
      }
    };

    setLayout(deepMerge(layout, updatedLayout));
  };

  return (
    <Demo1LayoutContext.Provider
      value={{
        layout,
        headerSticky,
        mobileSidebarOpen,
        setMobileSidebarOpen,
        setSidebarCollapse,
        setSidebarTheme
      }}
    >
      {children}
    </Demo1LayoutContext.Provider>
  );
};

export { Demo1LayoutProvider, useDemo1Layout };
