import { PropsWithChildren, createContext, useState, useContext } from 'react';
import { ILayoutProvider, ILayoutConfig } from '../';
import { LayoutsType, useLayouts } from '../../providers/LayoutsProvider';
import { authLayoutConfig } from './AuthLayoutConfig';

type AuthLayoutProviderProps = {} & ILayoutProvider;

const initalLayoutProps: AuthLayoutProviderProps = {
  layout: authLayoutConfig
};

const getLayoutConfig = (layouts: LayoutsType): ILayoutConfig => {
  return layouts.get(authLayoutConfig.name) || authLayoutConfig;
};

const AuthLayoutContext = createContext<AuthLayoutProviderProps>(initalLayoutProps);

const useAuthLayout = () => useContext(AuthLayoutContext);

const AuthLayoutProvider = ({ children }: PropsWithChildren) => {
  const { layouts, updateLayout } = useLayouts();

  const [layout, setLayout] = useState(getLayoutConfig(layouts));

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
