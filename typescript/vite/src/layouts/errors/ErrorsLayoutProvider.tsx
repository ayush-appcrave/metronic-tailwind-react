import { createContext, type PropsWithChildren, useContext, useState } from 'react';
import { ILayoutConfig, useLayout } from '../../providers/LayoutProvider';
import { errorsLayoutConfig } from './ErrorsLayoutConfig';
import { deepMerge } from '@/utils';

interface IErrorsLayoutProviderProps {
  layout: ILayoutConfig;
}

const initalLayoutProps: IErrorsLayoutProviderProps = {
  layout: errorsLayoutConfig
};

const LayoutContext = createContext<IErrorsLayoutProviderProps>(initalLayoutProps);

const useErrorsLayout = () => useContext(LayoutContext);

const ErrorsLayoutProvider = ({ children }: PropsWithChildren) => {
  const { getLayout } = useLayout();

  const getLayoutConfig = () => {
    return deepMerge(errorsLayoutConfig, getLayout(errorsLayoutConfig.name));
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

// eslint-disable-next-line react-refresh/only-export-components
export { ErrorsLayoutProvider, useErrorsLayout };
