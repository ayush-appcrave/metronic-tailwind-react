import { PropsWithChildren, createContext, useState, useContext } from "react";
import { ILayout, ILayoutPartial, ILayoutProvider } from "../models";
import { LayoutsType, useLayouts } from "../../providers/layouts";
import { errorsLayoutConfig } from "./ErrorsLayoutConfig";

type ErrorsLayoutProviderProps = {} & ILayoutProvider;

const calculateInitErrorsLayout = (layouts: LayoutsType): ILayout =>
  layouts.get(errorsLayoutConfig.name) || errorsLayoutConfig;

const initalLayoutProps: ErrorsLayoutProviderProps = {
  layout: errorsLayoutConfig,
  updatePartial: () => {},
  getConfig: (_: string) => undefined,
};

const ErrorsLayoutContext =
  createContext<ErrorsLayoutProviderProps>(initalLayoutProps);
const useErrorsLayout = () => useContext(ErrorsLayoutContext);

const ErrorsLayoutProvider = ({ children }: PropsWithChildren) => {
  const { layouts, updateLayout } = useLayouts();
  const [layout, setLayout] = useState(calculateInitErrorsLayout(layouts));

  const updatePartial = (partial: ILayoutPartial) => {
    const updatedLayout = { ...layout, ...partial };
    setLayout(updatedLayout);
    updateLayout(updatedLayout);
  };

  const getConfig = (partName: string) => {
    const part = layout.partials.get(partName);
    if (!part) {
      return;
    }

    return part.config;
  };

  return (
    <ErrorsLayoutContext.Provider
      value={{
        layout,
        updatePartial,
        getConfig,
      }}
    >
      {children}
    </ErrorsLayoutContext.Provider>
  );
};

export { useErrorsLayout, ErrorsLayoutProvider };
