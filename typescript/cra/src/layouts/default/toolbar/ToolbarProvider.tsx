import { PropsWithChildren, createContext, useState, useContext } from "react";
import { IntroBreadcrumbsType } from "../intro";

type ToolbarProviderProps = {
  introTitle?: string;
  introSubTitle?: string;
  introBreadcrumbs?: IntroBreadcrumbsType;
  setIntroTitle: (_: string) => void,
  setIntroSubTitle: (_: string) => void,
  setIntroBreadcrumbs: (_: IntroBreadcrumbsType) => void,
  resetIntro: () => void,
};

const initialProps: ToolbarProviderProps = {
  introTitle: "",
  introSubTitle: "",
  introBreadcrumbs: [],
  setIntroTitle: () => {},
  setIntroSubTitle: () => {},
  setIntroBreadcrumbs: () => {},
  resetIntro: () => {}
};

const ToolbarContext = createContext<ToolbarProviderProps>(initialProps);

const useToolbar = () => useContext(ToolbarContext);

const ToolbarProvider = ({ children }: PropsWithChildren) => {
  const [introTitle, setIntroTitle] = useState("");
  const [introSubTitle, setIntroSubTitle] = useState("");
  const [introBreadcrumbs, setIntroBreadcrumbs] = useState<IntroBreadcrumbsType>([]);

  const resetIntro = () => {
    setIntroTitle("");
    setIntroSubTitle("");
    setIntroBreadcrumbs([]);
  };

  return (
    <ToolbarContext.Provider 
      value={{
        introTitle,
        introSubTitle,
        introBreadcrumbs,
        setIntroTitle,
        setIntroSubTitle,
        setIntroBreadcrumbs,
        resetIntro
      }}
    >
      {children}
    </ToolbarContext.Provider>
  );
};

export { useToolbar, ToolbarProvider };
