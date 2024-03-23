import { createContext, useContext, useState } from 'react';
import { deepMerge } from '@/utils';
import { useLayout } from '../../providers/LayoutProvider';
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
    getLayout
  } = useLayout();
  const getLayoutConfig = () => {
    return deepMerge(authLayoutConfig, getLayout(authLayoutConfig.name));
  };
  const [layout] = useState(getLayoutConfig);
  return <LayoutContext.Provider value={{
    layout
  }}>
      {children}
    </LayoutContext.Provider>;
};
export { AuthLayoutProvider, useAuthLayout };