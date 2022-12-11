import { PropsWithChildren, createContext, useState, useContext } from "react";
import { ILayoutProvider, ILayoutConfig } from "../";
import { LayoutsType, useLayouts } from "../../providers/layouts";
import { defaultLayoutConfig } from "./DefaultLayoutConfig";

type DefaultLayoutProviderProps = {
  isSidebarCollapse: boolean;
  setSidebarCollapse: (collapse: boolean) => void;
} & ILayoutProvider;

const initalLayoutProps: DefaultLayoutProviderProps = {
  layout: defaultLayoutConfig,
  isSidebarCollapse: true,
  setSidebarCollapse: (_: boolean) => {}
};

const getLayoutConfig = (layouts: LayoutsType): ILayoutConfig => {
  return layouts.get(defaultLayoutConfig.name) || defaultLayoutConfig;
}

const DefaultLayoutContext = createContext<DefaultLayoutProviderProps>(initalLayoutProps);

const useDefaultLayout = () => useContext(DefaultLayoutContext);

const DefaultLayoutProvider = ({ children }: PropsWithChildren) => {
  const {layouts, updateLayout} = useLayouts();
  
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

  const isSidebarCollapse: boolean = layout.options.sidebar.collapse;

  return (
    <DefaultLayoutContext.Provider 
      value={{
        layout,
        isSidebarCollapse,
        setSidebarCollapse
      }}
    >
      {children}
    </DefaultLayoutContext.Provider>
  );
};

export { useDefaultLayout, DefaultLayoutProvider };
