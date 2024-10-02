import { createContext, type PropsWithChildren, useContext, useEffect, useState } from 'react';
import { deepMerge } from '@/utils';
import { ILayoutConfig, useLayout } from '@/providers/LayoutProvider';
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
  const { getLayout, setCurrentLayout } = useLayout();

  const getLayoutConfig = () => {
    return deepMerge(authLayoutConfig, getLayout(authLayoutConfig.name));
  };

  const [layout] = useState(getLayoutConfig);

  useEffect(() => {
    setCurrentLayout(layout);
  }, [layout, setCurrentLayout]);

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
export { AuthLayoutProvider, useAuthLayout };
