import { PropsWithChildren, createContext, useState, useContext } from "react";
import { ILayout, ILayoutPartial, ILayoutProvider } from "../models";
import { LayoutsType, useLayouts } from "../../providers/layouts";
import { defaultLayoutConfig, DefaultSidebarType } from "./DefaultLayoutConfig";

type DefaultLayoutProviderProps = {
  isSidebarCollapsed: boolean;
  setSidebarCollapse: (collapse: boolean) => void;
} & ILayoutProvider;

const calculateInitDefaultLayout = (layouts: LayoutsType): ILayout =>
  layouts.get(defaultLayoutConfig.name) || defaultLayoutConfig;

const calculateSidebarIsCollapsible = (
  sidebar: ILayoutPartial | undefined
): boolean => {
  if (!sidebar) {
    return false;
  }

  return (sidebar.config as DefaultSidebarType).collapse;
};

const initalLayoutProps: DefaultLayoutProviderProps = {
  layout: defaultLayoutConfig,
  updatePartial: () => {},
  getConfig: (_: string) => undefined,
  isSidebarCollapsed: true,
  setSidebarCollapse: (_: boolean) => {},
};

const DefaultLayoutContext =
  createContext<DefaultLayoutProviderProps>(initalLayoutProps);
const useDefaultLayout = () => useContext(DefaultLayoutContext);

const DefaultLayoutProvider = ({ children }: PropsWithChildren) => {
  const { layouts, updateLayout } = useLayouts();
  const [layout, setLayout] = useState(calculateInitDefaultLayout(layouts));
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(
    calculateSidebarIsCollapsible(layout.partials.get("sidebar"))
  );

  const updatePartial = (part: ILayoutPartial) => {
    const updatedLayout = { ...layout, ...part };
    setLayout(updatedLayout);
    updateLayout(updatedLayout);
  };

  const getConfig = (partName: string) => {
    const partial = layout.partials.get(partName);
    if (!partial) {
      return;
    }

    return partial.config;
  };

  const setSidebarCollapse = (collapse: boolean) => {
    const sidebar = layout.partials.get("sidebar");
    if (!sidebar) {
      return;
    }

    const updatedSidebar = { ...sidebar, collapse };
    updatePartial(updatedSidebar);
    setIsSidebarCollapsed(collapse);
  };

  return (
    <DefaultLayoutContext.Provider
      value={{
        layout,
        updatePartial,
        getConfig,
        isSidebarCollapsed,
        setSidebarCollapse,
      }}
    >
      {children}
    </DefaultLayoutContext.Provider>
  );
};

export { useDefaultLayout, DefaultLayoutProvider };
