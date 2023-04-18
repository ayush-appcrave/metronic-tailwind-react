import { PropsWithChildren, createContext, useState, useContext } from 'react';
import { getData, setData } from '../utils';
import { ILayoutConfig } from '../layouts/models';

const LAYOUTS_CONFIGS_KEY = 'layouts-configs';

export type LayoutsType = Map<string, ILayoutConfig>;
export type LayoutsProps = {
  layouts: LayoutsType;
  updateLayout: (layout: ILayoutConfig) => void;
};

const calculateInitialLayouts = () => {
  const storedLayouts = (getData(LAYOUTS_CONFIGS_KEY) as object) || {};
  const layouts = new Map(Object.entries(storedLayouts)) as LayoutsType;

  return layouts;
};

const calculateUpdatedLayouts = (
  updatedLayout: ILayoutConfig,
  layouts: LayoutsType
): LayoutsType => {
  const oldLayout = layouts.get(updatedLayout.name);
  const updatedLayouts = layouts;

  if (oldLayout) {
    updatedLayouts.delete(updatedLayout.name);
  }

  updatedLayouts.set(updatedLayout.name, updatedLayout);

  setData(LAYOUTS_CONFIGS_KEY, Object.fromEntries(updatedLayouts));

  return updatedLayouts;
};

const initialProps: LayoutsProps = {
  layouts: calculateInitialLayouts(),
  updateLayout: (_: ILayoutConfig) => {}
};

const LayoutsContext = createContext<LayoutsProps>(initialProps);
const useLayouts = () => useContext(LayoutsContext);

const LayoutsProvider = ({ children }: PropsWithChildren) => {
  const [layouts, setLayouts] = useState(initialProps.layouts);
  const updateLayout = (layout: ILayoutConfig) => {
    const updatedLayouts = calculateUpdatedLayouts(layout, layouts);

    setLayouts(updatedLayouts);
  };

  return (
    <LayoutsContext.Provider value={{ layouts, updateLayout }}>{children}</LayoutsContext.Provider>
  );
};

export { useLayouts, LayoutsProvider };
