import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { type LayoutsType, useLayouts } from '../../providers/LayoutsProvider';
import { type ILayoutConfig, type ILayoutProvider } from '../';
import { authLayoutConfig } from './AuthLayoutConfig';

// eslint-disable-next-line @typescript-eslint/ban-types
type AuthLayoutProviderProps = {} & ILayoutProvider;

const initalLayoutProps: AuthLayoutProviderProps = {
  layout: authLayoutConfig
};

const getLayoutConfig = (layouts: LayoutsType): ILayoutConfig => {
  return layouts.get(authLayoutConfig.name) ?? authLayoutConfig;
};

const AuthLayoutContext = createContext<AuthLayoutProviderProps>(initalLayoutProps);

const useAuthLayout = () => useContext(AuthLayoutContext);

const AuthLayoutProvider = ({ children }: PropsWithChildren) => {
  const { layouts } = useLayouts();

  const [layout] = useState(getLayoutConfig(layouts));

  return (
    <AuthLayoutContext.Provider
      value={{
        layout
      }}
    >
      {children}
    </AuthLayoutContext.Provider>
  );
};

export { AuthLayoutProvider, useAuthLayout };
