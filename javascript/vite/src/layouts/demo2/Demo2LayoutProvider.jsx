import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useMenuChildren } from '@/components/menu';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMenus } from '@/providers';
import { useLayout } from '@/providers';
import { deepMerge } from '@/utils';
import { Demo2LayoutConfig } from './';
const initalLayoutProps = {
  layout: Demo2LayoutConfig,
  megaMenuEnabled: false,
  headerSticky: false,
  mobileSidebarOpen: false,
  mobileMegaMenuOpen: false,
  sidebarMouseLeave: false,
  setSidebarMouseLeave: state => {
    console.log(`${state}`);
  },
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
const Demo2LayoutContext = createContext(initalLayoutProps);
const useDemo2Layout = () => useContext(Demo2LayoutContext);
const Demo2LayoutProvider = ({
  children
}) => {
  const {
    pathname
  } = useLocation();
  const {
    setMenuConfig
  } = useMenus();
  const secondaryMenu = useMenuChildren(pathname, MENU_SIDEBAR, 0);
  setMenuConfig('primary', MENU_SIDEBAR);
  setMenuConfig('secondary', secondaryMenu);
  const {
    getLayout,
    updateLayout,
    setCurrentLayout
  } = useLayout();
  const getLayoutConfig = () => {
    return deepMerge(Demo2LayoutConfig, getLayout(Demo2LayoutConfig.name));
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
  const headerSticky = scrollPosition > 0;
  const setSidebarCollapse = collapse => {
    const updatedLayout = {
      options: {
        sidebar: {
          collapse
        }
      }
    };
    updateLayout(Demo2LayoutConfig.name, updatedLayout);
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
  return <Demo2LayoutContext.Provider value={{
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
  }}>
      {children}
    </Demo2LayoutContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { Demo2LayoutProvider, useDemo2Layout };