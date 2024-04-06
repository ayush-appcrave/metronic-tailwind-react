import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { deepMerge } from '@/utils';

import { ILayoutConfig, useLayout } from '../../providers/LayoutProvider';
import { errorsLayoutConfig } from './ErrorsLayoutConfig';

interface ErrorsLayoutProviderProps {
  layout: ILayoutConfig;
}

const initalLayoutProps: ErrorsLayoutProviderProps = {
  layout: errorsLayoutConfig
};

const LayoutContext = createContext<ErrorsLayoutProviderProps>(initalLayoutProps);

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

export { ErrorsLayoutProvider, useErrorsLayout };
