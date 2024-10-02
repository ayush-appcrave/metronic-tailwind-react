import { createContext, useContext, useEffect, useState } from 'react';
import { deepMerge } from '@/utils';
import { useLayout } from '@/providers/LayoutProvider';
import { errorsLayoutConfig } from './ErrorsLayoutConfig';
const initalLayoutProps = {
  layout: errorsLayoutConfig
};
const LayoutContext = createContext(initalLayoutProps);
const useErrorsLayout = () => useContext(LayoutContext);
const ErrorsLayoutProvider = ({
  children
}) => {
  const {
    getLayout,
    setCurrentLayout
  } = useLayout();
  const getLayoutConfig = () => {
    return deepMerge(errorsLayoutConfig, getLayout(errorsLayoutConfig.name));
  };
  const [layout] = useState(getLayoutConfig);
  useEffect(() => {
    setCurrentLayout(layout);
  }, [layout, setCurrentLayout]);
  return <LayoutContext.Provider value={{
    layout
  }}>
      {children}
    </LayoutContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ErrorsLayoutProvider, useErrorsLayout };