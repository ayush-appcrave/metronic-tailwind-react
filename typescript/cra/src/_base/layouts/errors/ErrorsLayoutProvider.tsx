import { PropsWithChildren, createContext, useState, useContext } from "react";
import {
  LayoutsType,
  ILayout,
  ILayoutPart,
  ILayoutProvider,
  useLayouts,
} from "@base/layouts/_core";
import { errorsLayoutConfig } from "./ErrorsLayoutConfig";

type ErrorsLayoutProviderProps = {} & ILayoutProvider;

const calculateInitErrorsLayout = (layouts: LayoutsType): ILayout =>
  layouts.get(errorsLayoutConfig.layoutName) || errorsLayoutConfig;

const initalLayoutProps: ErrorsLayoutProviderProps = {
  layout: errorsLayoutConfig,
  updateLayoutPart: () => {},
  getConfig: (_: string) => undefined,
};

const ErrorsLayoutContext =
  createContext<ErrorsLayoutProviderProps>(initalLayoutProps);
const useErrorsLayout = () => useContext(ErrorsLayoutContext);

const ErrorsLayoutProvider = ({ children }: PropsWithChildren) => {
  const { layouts, updateLayout } = useLayouts();
  const [layout, setLayout] = useState(calculateInitErrorsLayout(layouts));

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
    <ErrorsLayoutContext.Provider
      value={{
        layout,
        updateLayoutPart,
        getConfig,
      }}
    >
      {children}
    </ErrorsLayoutContext.Provider>
  );
};

export { useErrorsLayout, ErrorsLayoutProvider };
