import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { deepMerge } from '@/utils';

import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLayoutStorage } from '../../providers/LayoutStorageProvider';
import { type ILayoutStorageProvider } from '../';
import { demo1LayoutConfig } from './Demo1LayoutConfig';

type Demo1LayoutProviderProps = {
  headerSticky: boolean;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  setSidebarCollapse: (collapse: boolean) => void;
} & ILayoutStorageProvider;

const initalLayoutProps: Demo1LayoutProviderProps = {
  layout: demo1LayoutConfig,
  headerSticky: false,
  mobileSidebarOpen: false,
  setMobileSidebarOpen: (_: boolean) => {},
  setSidebarCollapse: (_: boolean) => {}
};

const LayoutContext = createContext<Demo1LayoutProviderProps>(initalLayoutProps);

const useDemo1Layout = () => useContext(LayoutContext);

const Demo1LayoutProvider = ({ children }: PropsWithChildren) => {
  const { getLayout, updateLayout } = useLayoutStorage();

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

  return (
    <LayoutContext.Provider
      value={{
        layout,
        headerSticky,
        mobileSidebarOpen,
        setMobileSidebarOpen,
        setSidebarCollapse
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export { Demo1LayoutProvider, useDemo1Layout };
