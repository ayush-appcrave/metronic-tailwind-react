import { createContext, useContext, useEffect, useState } from 'react';
import { deepMerge } from '@/utils';
import { useLayout } from '@/providers/LayoutProvider';
import { authLayoutConfig } from './AuthLayoutConfig';
const initalLayoutProps = {
  layout: authLayoutConfig
};
const LayoutContext = createContext(initalLayoutProps);
const useAuthLayout = () => useContext(LayoutContext);
const AuthLayoutProvider = ({
  children
}) => {
  const {
    getLayout,
    setCurrentLayout
  } = useLayout();
  const getLayoutConfig = () => {
    return deepMerge(authLayoutConfig, getLayout(authLayoutConfig.name));
  };
  const [layout] = useState(getLayoutConfig);
  useEffect(() => {
    setCurrentLayout(layout);
  }, [layout, setCurrentLayout]);
  return <LayoutContext.Provider value={{
    layout
  }}>
      {children}
    </LayoutContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthLayoutProvider, useAuthLayout };