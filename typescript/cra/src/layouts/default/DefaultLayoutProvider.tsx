import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { useScrollPosition } from '../../hooks/useScrollPosition';
import { type LayoutsType, useLayouts } from '../../providers/LayoutsProvider';
import { type ILayoutConfig, type ILayoutProvider } from '../';
import { DefaultLayoutStylesConfig } from './';
import { defaultLayoutConfig } from './DefaultLayoutConfig';

type DefaultLayoutProviderProps = {
  isHeaderSticky: boolean;
  sidebarWidth: number;
  isSidebarCollapse: boolean;
  isSidebarExpand: boolean;
  setSidebarExpand: (collapse: boolean) => void;
  setSidebarCollapse: (collapse: boolean) => void;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
} & ILayoutProvider;

const initalLayoutProps: DefaultLayoutProviderProps = {
  layout: defaultLayoutConfig,
  sidebarWidth: 0,
  isSidebarCollapse: true,
  isSidebarExpand: false,
  isHeaderSticky: false,
  setSidebarExpand: (_: boolean) => {},
  setSidebarCollapse: (_: boolean) => {},
  mobileSidebarOpen: false,
  setMobileSidebarOpen: (_: boolean) => {}
};

const getLayoutConfig = (layouts: LayoutsType): ILayoutConfig => {
  return layouts.get(defaultLayoutConfig.name) ?? defaultLayoutConfig;
};

const DefaultLayoutContext = createContext<DefaultLayoutProviderProps>(initalLayoutProps);

const useDefaultLayout = () => useContext(DefaultLayoutContext);

const DefaultLayoutProvider = ({ children }: PropsWithChildren) => {
  const styles = DefaultLayoutStylesConfig();

  const { layouts, updateLayout } = useLayouts();

  const scrollPosition = useScrollPosition();

  const [sidebarExpandState, setSidebarExpandState] = useState(false);

  const [layout, setLayout] = useState(getLayoutConfig(layouts));

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

  const setSidebarExpand = (hover: boolean) => {
    setSidebarExpandState(hover);
  };

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const isHeaderSticky: boolean = scrollPosition > styles.HEADER_STICKY_OFFSET;

  const isSidebarCollapse: boolean = layout.options.sidebar.collapse;

  const sidebarWidth: number = isSidebarCollapse
    ? styles.SIDEBAR_COLLAPSE_WIDTH
    : styles.SIDEBAR_WIDTH;

  return (
    <DefaultLayoutContext.Provider
      value={{
        layout,
        isHeaderSticky,
        isSidebarExpand: sidebarExpandState,
        setSidebarExpand,
        isSidebarCollapse,
        sidebarWidth,
        setSidebarCollapse,
        mobileSidebarOpen,
        setMobileSidebarOpen
      }}
    >
      {children}
    </DefaultLayoutContext.Provider>
  );
};

export { DefaultLayoutProvider, useDefaultLayout };
