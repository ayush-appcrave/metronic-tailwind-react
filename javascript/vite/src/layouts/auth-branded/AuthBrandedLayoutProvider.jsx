import { createContext, useContext, useEffect, useState } from 'react';
import { deepMerge } from '@/utils';
import { useLayout } from '@/providers/LayoutProvider';
import { authLayoutBrandedConfig } from './AuthBrandedLayoutConfig';
const initalLayoutProps = {
  layout: authLayoutBrandedConfig
};
const LayoutContext = createContext(initalLayoutProps);
const useAuthBrandedLayout = () => useContext(LayoutContext);
const AuthBrandedLayoutProvider = ({
  children
}) => {
  const {
    getLayout,
    setCurrentLayout
  } = useLayout();
  const getLayoutConfig = () => {
    return deepMerge(authLayoutBrandedConfig, getLayout(authLayoutBrandedConfig.name));
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
export { AuthBrandedLayoutProvider, useAuthBrandedLayout };