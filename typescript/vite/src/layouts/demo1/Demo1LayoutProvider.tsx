import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { useScrollPosition } from '../../hooks/useScrollPosition';
import { type LayoutsType, useLayouts } from '../../providers/LayoutsProvider';
import { type ILayoutConfig, type ILayoutProvider } from '../';
import { demo1LayoutConfig } from './Demo1LayoutConfig';

type Demo1LayoutProviderProps = {
  headerSticky: boolean;
  sidebarCollapse: boolean;
  sidebarExpand: boolean;
  mobileSidebarOpen: boolean;
  setSidebarExpand: (collapse: boolean) => void;
  setSidebarCollapse: (collapse: boolean) => void;
  setMobileSidebarOpen: (open: boolean) => void;
} & ILayoutProvider;

const initalLayoutProps: Demo1LayoutProviderProps = {
  layout: demo1LayoutConfig,
  sidebarCollapse: true,
  sidebarExpand: false,
  headerSticky: false,
  mobileSidebarOpen: false,
  setSidebarExpand: (_: boolean) => {},
  setSidebarCollapse: (_: boolean) => {},
  setMobileSidebarOpen: (_: boolean) => {}
};

const getLayoutConfig = (layouts: LayoutsType): ILayoutConfig => {
  return layouts.get(demo1LayoutConfig.name) ?? demo1LayoutConfig;
};

const LayoutContext = createContext<Demo1LayoutProviderProps>(initalLayoutProps);

const useDemo1Layout = () => useContext(LayoutContext);

const Demo1LayoutProvider = ({ children }: PropsWithChildren) => {
  const { layouts, updateLayout } = useLayouts();

  const scrollPosition = useScrollPosition();

  const [sidebarExpand, setSidebarExpand] = useState(false);

  const [layout, setLayout] = useState(getLayoutConfig(layouts));

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const headerSticky: boolean = scrollPosition > 0;

  const sidebarCollapse: boolean = layout.options.sidebar.collapse;

  const setSidebarCollapse = (collapse: boolean) => {
    const updatedLayout: ILayoutConfig = {
      ...layout,
      options: {
        sidebar: {
          collapse
        }
      }
    };

    setLayout(updatedLayout);
    updateLayout(updatedLayout);
  };

  return (
    <LayoutContext.Provider
      value={{
        layout,
        headerSticky,
        sidebarExpand,
        sidebarCollapse,
        mobileSidebarOpen,
        setSidebarExpand,
        setSidebarCollapse,
        setMobileSidebarOpen
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export { Demo1LayoutProvider, useDemo1Layout };
