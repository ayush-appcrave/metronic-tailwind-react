import { PropsWithChildren, createContext, useState, useContext } from 'react';
import { ILayoutProvider, ILayoutConfig } from '../';
import { LayoutsType, useLayouts } from '../../providers/LayoutsProvider';
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
  const { layouts, updateLayout } = useLayouts();

  const [layout, setLayout] = useState(getLayoutConfig(layouts));

  return (
    <ErrorsLayoutContext.Provider
      value={{
        layout
      }}>
      {children}
    </ErrorsLayoutContext.Provider>
  );
};

export { useErrorsLayout, ErrorsLayoutProvider };
