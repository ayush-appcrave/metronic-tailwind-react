import { PropsWithChildren, createContext, useState, useContext } from "react";
import { getData, setData } from "../../utils";
import { ILayout } from "./models";

const LAYOUTS_CONFIGS_KEY = "layouts-configs";

export type LayoutsType = Map<string, ILayout>;
export type LayoutsProps = {
  layouts: LayoutsType;
  updateLayout: (layout: ILayout) => void;
};

const calculateInitialLayouts = () => {
  const layouts = getData(LAYOUTS_CONFIGS_KEY) as LayoutsType | undefined;
  return layouts || new Map<string, ILayout>();
};

const calculateUpdatedLayouts = (
  updatedLayout: ILayout,
  layouts: LayoutsType
): LayoutsType => {
  const oldLayout = layouts.get(updatedLayout.layoutName);
  const updatedLayouts = { ...layouts };
  if (oldLayout) {
    updatedLayouts.delete(updatedLayout.layoutName);
  }
  updatedLayouts.set(updatedLayout.layoutName, updatedLayout);
  setData(LAYOUTS_CONFIGS_KEY, JSON.stringify(updatedLayouts));
  return updatedLayouts;
};

const initialProps: LayoutsProps = {
  layouts: calculateInitialLayouts(),
  updateLayout: (_: ILayout) => {},
};

const LayoutsContext = createContext<LayoutsProps>(initialProps);
const useLayouts = () => useContext(LayoutsContext);

const LayoutsProvider = ({ children }: PropsWithChildren) => {
  const [layouts, setLayouts] = useState(initialProps.layouts);
  const updateLayout = (layout: ILayout) => {
    const updatedLayouts = calculateUpdatedLayouts(layout, layouts);
    setLayouts(updatedLayouts);
  };

  return (
    <LayoutsContext.Provider value={{ layouts, updateLayout }}>
      {children}
    </LayoutsContext.Provider>
  );
};

export { useLayouts, LayoutsProvider };
