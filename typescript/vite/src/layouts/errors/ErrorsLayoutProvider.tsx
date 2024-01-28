import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { deepMerge } from '@/utils';

import { useLayoutStorage } from '../../providers/LayoutStorageProvider';
import { ILayoutStorageProvider } from '../';
import { errorsLayoutConfig } from './ErrorsLayoutConfig';

type ErrorLayoutProviderProps = ILayoutStorageProvider;

const initalLayoutProps: ErrorLayoutProviderProps = {
  layout: errorsLayoutConfig
};

const LayoutContext = createContext<ErrorLayoutProviderProps>(initalLayoutProps);

const useAuthLayout = () => useContext(LayoutContext);

const ErrorsLayoutProvider = ({ children }: PropsWithChildren) => {
  const { getLayout } = useLayoutStorage();

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

export { ErrorsLayoutProvider, useAuthLayout };
