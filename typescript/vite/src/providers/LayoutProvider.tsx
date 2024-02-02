import { createContext, type PropsWithChildren, useContext } from 'react';

import { getData, setData } from '../utils';

interface ILayoutConfig {
  name: string;
  options: any;
}

interface ILayoutsProps {
  getLayout: (name: string) => Partial<ILayoutConfig> | undefined;
  hasLayout: (name: string) => boolean;
  updateLayout: (name: string, config: Partial<ILayoutConfig>) => void;
}

const LAYOUTS_CONFIGS_KEY = 'layouts-configs';

const getLayouts = (): Map<string, Partial<ILayoutConfig>> => {
  const storedLayouts = (getData(LAYOUTS_CONFIGS_KEY) as object) || {};

  return new Map(Object.entries(storedLayouts));
};

const initialProps: ILayoutsProps = {
  getLayout: (name: string): Partial<ILayoutConfig> | undefined => {
    const storedLayouts = getLayouts();

    return storedLayouts.get(name);
  },
  hasLayout: (name: string): boolean => {
    const storedLayouts = getLayouts();

    return storedLayouts && storedLayouts.has(name);
  },
  updateLayout: (name: string, config: Partial<ILayoutConfig>) => {
    const storedLayouts = getLayouts();

    if (storedLayouts.has(name)) {
      storedLayouts.delete(name);
    }

    storedLayouts.set(name, config);

    setData(LAYOUTS_CONFIGS_KEY, Object.fromEntries(storedLayouts));
  }
};

const LayoutsContext = createContext<ILayoutsProps>(initialProps);
const useLayout = () => useContext(LayoutsContext);

const LayoutProvider = ({ children }: PropsWithChildren) => {
  return <LayoutsContext.Provider value={initialProps}>{children}</LayoutsContext.Provider>;
};

export { type ILayoutConfig, LayoutProvider, useLayout };
