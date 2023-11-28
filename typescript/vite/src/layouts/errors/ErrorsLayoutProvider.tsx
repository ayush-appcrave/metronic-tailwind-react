/* eslint-disable no-unused-vars */
import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { type LayoutsType, useLayouts } from '../../providers/LayoutsProvider';
import { type ILayoutConfig, type ILayoutProvider } from '../';
import { errorsLayoutConfig } from './ErrorsLayoutConfig';

// eslint-disable-next-line @typescript-eslint/ban-types
type ErrorsLayoutProviderProps = {} & ILayoutProvider;

const initalLayoutProps: ErrorsLayoutProviderProps = {
  layout: errorsLayoutConfig
};

const getLayoutConfig = (layouts: LayoutsType): ILayoutConfig => {
  return layouts.get(errorsLayoutConfig.name) ?? errorsLayoutConfig;
};

const ErrorsLayoutContext = createContext<ErrorsLayoutProviderProps>(initalLayoutProps);

const useErrorsLayout = () => useContext(ErrorsLayoutContext);

const ErrorsLayoutProvider = ({ children }: PropsWithChildren) => {
  const { layouts } = useLayouts();

  const [layout, setLayout] = useState(getLayoutConfig(layouts));

  return (
    <ErrorsLayoutContext.Provider
      value={{
        layout
      }}
    >
      {children}
    </ErrorsLayoutContext.Provider>
  );
};

export { ErrorsLayoutProvider, useErrorsLayout };
