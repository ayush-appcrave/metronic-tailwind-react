import { PropsWithChildren, createContext, useState, useContext } from "react";
import { ILayoutProvider, ILayoutConfig } from "../";
import { LayoutsType, useLayouts } from "../../providers/LayoutsProvider";
import { defaultLayoutConfig } from "./DefaultLayoutConfig";

type DefaultLayoutProviderProps = {
  isSidebarCollapse: boolean;
  isSidebarHover: boolean;
  setSidebarHover: (collapse: boolean) => void;
  setSidebarCollapse: (collapse: boolean) => void;
} & ILayoutProvider;

const initalLayoutProps: DefaultLayoutProviderProps = {
  layout: defaultLayoutConfig,
  isSidebarCollapse: true,
  isSidebarHover: false,
  setSidebarHover: (_: boolean) => {},
  setSidebarCollapse: (_: boolean) => {}
};

const getLayoutConfig = (layouts: LayoutsType): ILayoutConfig => {
  return layouts.get(defaultLayoutConfig.name) || defaultLayoutConfig;
}

const DefaultLayoutContext = createContext<DefaultLayoutProviderProps>(initalLayoutProps);

const useDefaultLayout = () => useContext(DefaultLayoutContext);

const DefaultLayoutProvider = ({ children }: PropsWithChildren) => {
  const {layouts, updateLayout} = useLayouts();
  
  const [sidebarHoverState, setSidebarHoverState] = useState(false);

  const [layout, setLayout] = useState(getLayoutConfig(layouts));

  const setSidebarCollapse = (collapse: boolean) => {
    const updatedLayout: ILayoutConfig = { ...layout, options: {
      sidebar: {
        collapse: collapse
      }
    }};
    
    setLayout(updatedLayout);
    updateLayout(updatedLayout);
  };

  const setSidebarHover = (hover: boolean) => {
    setSidebarHoverState(hover);
  };

  const isSidebarCollapse: boolean = layout.options.sidebar.collapse;
  let sidebarHover: boolean = false;

  return (
    <DefaultLayoutContext.Provider 
      value={{
        layout,
        isSidebarHover: sidebarHoverState,
        setSidebarHover,
        isSidebarCollapse,
        setSidebarCollapse
      }}
    >
      {children}
    </DefaultLayoutContext.Provider>
  );
};

export { useDefaultLayout, DefaultLayoutProvider };
