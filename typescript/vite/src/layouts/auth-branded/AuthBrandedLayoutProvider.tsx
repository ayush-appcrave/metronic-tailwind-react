import { createContext, type PropsWithChildren, useContext, useEffect, useState } from 'react';
import { deepMerge } from '@/utils';
import { ILayoutConfig, useLayout } from '@/providers';
import { authLayoutBrandedConfig } from './AuthBrandedLayoutConfig';

interface AuthLayoutProviderProps {
  layout: ILayoutConfig;
}

const initalLayoutProps: AuthLayoutProviderProps = {
  layout: authLayoutBrandedConfig
};

const LayoutContext = createContext<AuthLayoutProviderProps>(initalLayoutProps);

const useAuthBrandedLayout = () => useContext(LayoutContext);

const AuthBrandedLayoutProvider = ({ children }: PropsWithChildren) => {
  const { getLayout, setCurrentLayout } = useLayout();

  const getLayoutConfig = () => {
    return deepMerge(authLayoutBrandedConfig, getLayout(authLayoutBrandedConfig.name));
  };

  const [layout] = useState(getLayoutConfig);

  useEffect(() => {
    setCurrentLayout(layout);
  }, []);

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

// eslint-disable-next-line react-refresh/only-export-components
export { AuthBrandedLayoutProvider, useAuthBrandedLayout };
