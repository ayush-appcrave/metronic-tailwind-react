import { PropsWithChildren, createContext, useState, useContext } from "react";
import {
  LayoutsType,
  ILayout,
  ILayoutPart,
  ILayoutProvider,
  useLayouts,
} from "@base/layouts/_core";
import { defaultLayoutConfig, DefaultSidebarType } from "./DefaultLayoutConfig";

type DefaultLayoutProviderProps = {
  isSidebarCollapsed: boolean;
  setSidebarCollapse: (collapse: boolean) => void;
} & ILayoutProvider;

const calculateInitDefaultLayout = (layouts: LayoutsType): ILayout =>
  layouts.get(defaultLayoutConfig.layoutName) || defaultLayoutConfig;

const calculateSidebarIsCollapsible = (
  sidebar: ILayoutPart | undefined
): boolean => {
  if (!sidebar) {
    return false;
  }

  return (sidebar.config as DefaultSidebarType).collapse;
};

const initalLayoutProps: DefaultLayoutProviderProps = {
  layout: defaultLayoutConfig,
  updateLayoutPart: () => {},
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
    calculateSidebarIsCollapsible(layout.parts.get("sidebar"))
  );

  const updateLayoutPart = (part: ILayoutPart) => {
    const updatedLayout = { ...layout, ...part };
    setLayout(updatedLayout);
    updateLayout(updatedLayout);
  };

  const getConfig = (partName: string) => {
    const part = layout.parts.get(partName);
    if (!part) {
      return;
    }

    return part.config;
  };

  const setSidebarCollapse = (collapse: boolean) => {
    const sidebar = layout.parts.get("sidebar");
    if (!sidebar) {
      return;
    }

    const updatedSidebar = { ...sidebar, collapse };
    updateLayoutPart(updatedSidebar);
    setIsSidebarCollapsed(collapse);
  };

  return (
    <DefaultLayoutContext.Provider
      value={{
        layout,
        updateLayoutPart,
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
