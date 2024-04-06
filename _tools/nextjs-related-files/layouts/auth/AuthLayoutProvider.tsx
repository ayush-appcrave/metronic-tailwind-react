import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { deepMerge } from '@/utils';

import { ILayoutConfig, useLayout } from '../../providers/LayoutProvider';
import { authLayoutConfig } from './AuthLayoutConfig';

interface AuthLayoutProviderProps {
  layout: ILayoutConfig;
}

const initalLayoutProps: AuthLayoutProviderProps = {
  layout: authLayoutConfig
};

const LayoutContext = createContext<AuthLayoutProviderProps>(initalLayoutProps);

const useAuthLayout = () => useContext(LayoutContext);

const AuthLayoutProvider = ({ children }: PropsWithChildren) => {
  const { getLayout } = useLayout();

  const getLayoutConfig = () => {
    return deepMerge(authLayoutConfig, getLayout(authLayoutConfig.name));
  };

  const [layout] = useState(getLayoutConfig);

  return (
    <LayoutContext.Provider
      value={{
        layout
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export { AuthLayoutProvider, useAuthLayout };
