import { PropsWithChildren, createContext, useState, useContext } from "react";
import { ILayout, ILayoutPartial, ILayoutProvider } from "../models";
import { LayoutsType, useLayouts } from "../../providers/layouts";
import { authLayoutConfig } from "./AuthLayoutConfig";

type AuthLayoutProviderProps = {} & ILayoutProvider;

const calculateInitAuthLayout = (layouts: LayoutsType): ILayout =>
  layouts.get(authLayoutConfig.name) || authLayoutConfig;

const initalLayoutProps: AuthLayoutProviderProps = {
  layout: authLayoutConfig,
  updatePartial:() => {},
  getConfig: (_: string) => undefined,
};

const AuthLayoutContext =
  createContext<AuthLayoutProviderProps>(initalLayoutProps);
const useAuthLayout = () => useContext(AuthLayoutContext);

const AuthLayoutProvider = ({ children }: PropsWithChildren) => {
  const { layouts, updateLayout } = useLayouts();
  const [layout, setLayout] = useState(calculateInitAuthLayout(layouts));

  const updatePartial = (part: ILayoutPartial) => {
    const updatedLayout = { ...layout, ...part };
    setLayout(updatedLayout);
    updateLayout(updatedLayout);
  };

  const getConfig = (partialName: string) => {
    const partial = layout.partials.get(partialName);
    if (!partial) {
      return;
    }

    return partial.config;
  };

  return (
    <AuthLayoutContext.Provider
      value={{
        layout,
        updatePartial,
        getConfig,
      }}
    >
      {children}
    </AuthLayoutContext.Provider>
  );
};

export { useAuthLayout, AuthLayoutProvider };
