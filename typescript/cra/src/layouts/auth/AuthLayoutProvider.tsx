import { type PropsWithChildren, createContext, useState, useContext } from 'react';
import { type ILayoutProvider, type ILayoutConfig } from '../';
import { type LayoutsType, useLayouts } from '../../providers/LayoutsProvider';
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

export { useAuthLayout, AuthLayoutProvider };
