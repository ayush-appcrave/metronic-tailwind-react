import { createContext, type PropsWithChildren, useContext, useEffect, useState } from 'react';
import { deepMerge } from '@/utils';
import { ILayoutConfig, useLayout } from '@/providers';
import { errorsLayoutConfig } from './ErrorsLayoutConfig';

interface AuthLayoutProviderProps {
  layout: ILayoutConfig;
}

const initalLayoutProps: AuthLayoutProviderProps = {
  layout: errorsLayoutConfig
};

const LayoutContext = createContext<AuthLayoutProviderProps>(initalLayoutProps);

const useErrorsLayout = () => useContext(LayoutContext);

const ErrorsLayoutProvider = ({ children }: PropsWithChildren) => {
  const { getLayout, setCurrentLayout } = useLayout();

  const getLayoutConfig = () => {
    return deepMerge(errorsLayoutConfig, getLayout(errorsLayoutConfig.name));
  };

  const [layout] = useState(getLayoutConfig);

  useEffect(() => {
    setCurrentLayout(layout);
  });

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
export { ErrorsLayoutProvider, useErrorsLayout };
