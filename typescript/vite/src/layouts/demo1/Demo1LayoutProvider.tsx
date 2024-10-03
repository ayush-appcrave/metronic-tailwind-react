/* eslint-disable no-unused-vars */
import { createContext, type PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useMenuChildren } from '@/components/menu';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMenus } from '@/providers';
import { ILayoutConfig, useLayout } from '@/providers';
import { deepMerge } from '@/utils';
import { demo1LayoutConfig } from './';

export interface IDemo1LayoutProviderProps {
  layout: ILayoutConfig;
  megaMenuEnabled: boolean;
  headerSticky: boolean;
  mobileSidebarOpen: boolean;
  mobileMegaMenuOpen: boolean;
  sidebarMouseLeave: boolean;
  setSidebarMouseLeave: (state: boolean) => void;
  setMobileSidebarOpen: (open: boolean) => void;
  setMobileMegaMenuOpen: (open: boolean) => void;
  setMegaMenuEnabled: (enabled: boolean) => void;
  setSidebarCollapse: (collapse: boolean) => void;
  setSidebarTheme: (mode: string) => void;
}

const initalLayoutProps: IDemo1LayoutProviderProps = {
  layout: demo1LayoutConfig,
  megaMenuEnabled: false,
  headerSticky: false,
  mobileSidebarOpen: false,
  mobileMegaMenuOpen: false,
  sidebarMouseLeave: false,
  setSidebarMouseLeave: (state: boolean) => {
    console.log(`${state}`);
  },
  setMobileMegaMenuOpen: (open: boolean) => {
    console.log(`${open}`);
  },
  setMobileSidebarOpen: (open: boolean) => {
    console.log(`${open}`);
  },
  setMegaMenuEnabled: (enabled: boolean) => {
    console.log(`${enabled}`);
  },
  setSidebarCollapse: (collapse: boolean) => {
    console.log(`${collapse}`);
  },
  setSidebarTheme: (mode: string) => {
    console.log(`${mode}`);
  }
};

const Demo1LayoutContext = createContext<IDemo1LayoutProviderProps>(initalLayoutProps);

const useDemo1Layout = () => useContext(Demo1LayoutContext);

const Demo1LayoutProvider = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const { setMenuConfig } = useMenus();
  const secondaryMenu = useMenuChildren(pathname, MENU_SIDEBAR, 0);

  setMenuConfig('primary', MENU_SIDEBAR);
  setMenuConfig('secondary', secondaryMenu);

  const { getLayout, updateLayout, setCurrentLayout } = useLayout();

  const getLayoutConfig = () => {
    return deepMerge(demo1LayoutConfig, getLayout(demo1LayoutConfig.name));
  };

  const [layout, setLayout] = useState(getLayoutConfig);

  useEffect(() => {
    setCurrentLayout(layout);
  }, [layout, setCurrentLayout]);

  const [megaMenuEnabled, setMegaMenuEnabled] = useState(false);

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [mobileMegaMenuOpen, setMobileMegaMenuOpen] = useState(false);

  const [sidebarMouseLeave, setSidebarMouseLeave] = useState(false);

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
        mobileMegaMenuOpen,
        megaMenuEnabled,
        sidebarMouseLeave,
        setMobileSidebarOpen,
        setMegaMenuEnabled,
        setSidebarMouseLeave,
        setMobileMegaMenuOpen,
        setSidebarCollapse,
        setSidebarTheme
      }}
    >
      {children}
    </Demo1LayoutContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { Demo1LayoutProvider, useDemo1Layout };
