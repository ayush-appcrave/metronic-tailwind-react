import { PropsWithChildren, createContext, useState, useContext } from "react";
import {
  LayoutsType,
  ILayout,
  ILayoutPart,
  ILayoutProvider,
  useLayouts,
} from "../_base";
import { defaultLayout2Config } from "./DefaultLayout2Config";

type DefaultLayout2ProviderProps = {} & ILayoutProvider;

const calculateInitDefaultLayout2 = (layouts: LayoutsType): ILayout =>
  layouts.get(defaultLayout2Config.layoutName) || defaultLayout2Config;

const initalLayoutProps: DefaultLayout2ProviderProps = {
  layout: defaultLayout2Config,
  updateLayoutPart: () => {},
  getConfig: (_: string) => undefined,
};

const DefaultLayout2Context =
  createContext<DefaultLayout2ProviderProps>(initalLayoutProps);
const useDefaultLayout2 = () => useContext(DefaultLayout2Context);

const DefaultLayout2Provider = ({ children }: PropsWithChildren) => {
  const { layouts, updateLayout } = useLayouts();
  const [layout, setLayout] = useState(calculateInitDefaultLayout2(layouts));

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
    <DefaultLayout2Context.Provider
      value={{
        layout,
        updateLayoutPart,
        getConfig,
      }}
    >
      {children}
    </DefaultLayout2Context.Provider>
  );
};

export { useDefaultLayout2, DefaultLayout2Provider };
