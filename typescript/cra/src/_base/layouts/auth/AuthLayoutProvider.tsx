import { PropsWithChildren, createContext, useState, useContext } from "react";
import {
  LayoutsType,
  ILayout,
  ILayoutPart,
  ILayoutProvider,
  useLayouts,
} from "@base/layouts/_core";
import { authLayoutConfig } from "./AuthLayoutConfig";

type AuthLayoutProviderProps = {} & ILayoutProvider;

const calculateInitAuthLayout = (layouts: LayoutsType): ILayout =>
  layouts.get(authLayoutConfig.layoutName) || authLayoutConfig;

const initalLayoutProps: AuthLayoutProviderProps = {
  layout: authLayoutConfig,
  updateLayoutPart: () => {},
  getConfig: (_: string) => undefined,
};

const AuthLayoutContext =
  createContext<AuthLayoutProviderProps>(initalLayoutProps);
const useAuthLayout = () => useContext(AuthLayoutContext);

const AuthLayoutProvider = ({ children }: PropsWithChildren) => {
  const { layouts, updateLayout } = useLayouts();
  const [layout, setLayout] = useState(calculateInitAuthLayout(layouts));

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

  return (
    <AuthLayoutContext.Provider
      value={{
        layout,
        updateLayoutPart,
        getConfig,
      }}
    >
      {children}
    </AuthLayoutContext.Provider>
  );
};

export { useAuthLayout, AuthLayoutProvider };
