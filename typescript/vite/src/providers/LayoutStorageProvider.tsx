import { createContext, type PropsWithChildren, useContext } from 'react';

import { type ILayoutConfig } from '../layouts/models';
import { getData, setData } from '../utils';

const LAYOUTS_CONFIGS_KEY = 'layouts-configs';

export type LayoutsType = Map<string, any>;
export interface LayoutsProps {
  getLayout: (name: string) => ILayoutConfig | undefined;
  hasLayout: (name: string) => boolean;
  updateLayout: (name: string, config: any) => void;
};

const getLayouts = (): LayoutsType => {
  const storedLayouts = (getData(LAYOUTS_CONFIGS_KEY) as object) || {};

  return new Map(Object.entries(storedLayouts));
};

const initialProps: LayoutsProps = {
  getLayout: (name: string): ILayoutConfig | undefined => {
    const storedLayouts = getLayouts();

    return storedLayouts.get(name);
  },
  hasLayout: (name: string): boolean => {
    const storedLayouts = getLayouts();

    return storedLayouts && storedLayouts.has(name);
  },
  updateLayout: (name: string, config: any) => {
    const storedLayouts = getLayouts();

    if (storedLayouts.has(name)) {
      storedLayouts.delete(name);
    }

    storedLayouts.set(name, config);

    setData(LAYOUTS_CONFIGS_KEY, Object.fromEntries(storedLayouts));
  }
};

const LayoutsContext = createContext<LayoutsProps>(initialProps);
const useLayoutStorage = () => useContext(LayoutsContext);

const LayoutStorageProvider = ({ children }: PropsWithChildren) => {
  return <LayoutsContext.Provider value={initialProps}>{children}</LayoutsContext.Provider>;
};

export { LayoutStorageProvider, useLayoutStorage };
