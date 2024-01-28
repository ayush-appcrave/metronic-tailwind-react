import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { deepMerge } from '@/utils';

import { useLayoutStorage } from '../../providers/LayoutStorageProvider';
import { ILayoutStorageProvider } from '../';
import { authLayoutConfig } from './AuthLayoutConfig';

type AuthLayoutProviderProps = ILayoutStorageProvider;

const initalLayoutProps: AuthLayoutProviderProps = {
  layout: authLayoutConfig
};

const LayoutContext = createContext<AuthLayoutProviderProps>(initalLayoutProps);

const useAuthLayout = () => useContext(LayoutContext);

const AuthLayoutProvider = ({ children }: PropsWithChildren) => {
  const { getLayout } = useLayoutStorage();

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
