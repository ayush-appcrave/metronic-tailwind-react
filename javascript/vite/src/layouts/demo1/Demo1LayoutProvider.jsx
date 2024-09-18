import { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { useMenuChildren } from '@/components/menu';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMenu } from '@/providers';
import { useLayout } from '@/providers/LayoutProvider';
import { deepMerge } from '@/utils';
import { demo1LayoutConfig } from './';
const initalLayoutProps = {
  layout: demo1LayoutConfig,
  megaMenuEnabled: false,
  headerSticky: false,
  mobileSidebarOpen: false,
  mobileMegaMenuOpen: false,
  setMobileMegaMenuOpen: open => {
    console.log(`${open}`);
  },
  setMobileSidebarOpen: open => {
    console.log(`${open}`);
  },
  setMegaMenuEnabled: enabled => {
    console.log(`${enabled}`);
  },
  setSidebarCollapse: collapse => {
    console.log(`${collapse}`);
  },
  setSidebarTheme: mode => {
    console.log(`${mode}`);
  }
};
const Demo1LayoutContext = createContext(initalLayoutProps);
const useDemo1Layout = () => useContext(Demo1LayoutContext);
const Demo1LayoutProvider = ({
  children
}) => {
  const {
    pathname
  } = useLocation();
  const {
    setMenuConfig
  } = useMenu();
  const secondaryMenu = useMenuChildren(pathname, MENU_SIDEBAR, 0);
  setMenuConfig('primary', MENU_SIDEBAR);
  setMenuConfig('secondary', secondaryMenu);
  const {
    getLayout,
    updateLayout
  } = useLayout();
  const getLayoutConfig = () => {
    return deepMerge(demo1LayoutConfig, getLayout(demo1LayoutConfig.name));
  };
  const [layout, setLayout] = useState(getLayoutConfig);
  const [megaMenuEnabled, setMegaMenuEnabled] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileMegaMenuOpen, setMobileMegaMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const headerSticky = scrollPosition > 0;
  const setSidebarCollapse = collapse => {
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
  const setSidebarTheme = mode => {
    const updatedLayout = {
      options: {
        sidebar: {
          theme: mode
        }
      }
    };
    setLayout(deepMerge(layout, updatedLayout));
  };
  return <Demo1LayoutContext.Provider value={{
    layout,
    headerSticky,
    mobileSidebarOpen,
    mobileMegaMenuOpen,
    megaMenuEnabled,
    setMobileSidebarOpen,
    setMegaMenuEnabled,
    setMobileMegaMenuOpen,
    setSidebarCollapse,
    setSidebarTheme
  }}>
      {children}
    </Demo1LayoutContext.Provider>;
};
export { Demo1LayoutProvider, useDemo1Layout };