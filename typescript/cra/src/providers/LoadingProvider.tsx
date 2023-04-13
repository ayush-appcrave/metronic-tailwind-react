import { useState, createContext, useContext, PropsWithChildren } from "react";
import { PaletteMode } from '@mui/material';
import { LoadingScreen, LoadingProgressBar } from "../components/loading";

export type LoadingType = "progressBar" | "page" | "screen";

export type LoadingProviderType = {
  setLoading: (type: LoadingType, state: boolean) => void;
  getLoading: (type: LoadingType) => boolean;
};

const initialProps: LoadingProviderType = {
  setLoading: (type: LoadingType, state: boolean) => {},
  getLoading: (type: LoadingType) => false
}

const LoadingContext = createContext<LoadingProviderType>(initialProps);
const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingProgressBar, setLoadingProgressPage] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(false);

  const setLoading = (type: LoadingType, state: boolean) => {
    if (type === "progressBar") {
      setLoadingProgressPage(state);
    }

    if (type === "page") {
      setLoadingPage(state);
    }

    if (type === "screen") {
      setLoadingScreen(state);
    }
  }

  const getLoading = (type: LoadingType) => {
    if (type === "progressBar") {
      return loadingProgressBar;
    } else if (type === "page") {
      return loadingPage;
    } else {
      return loadingScreen;
    }
  }  

  return (
    <LoadingContext.Provider
      value={{
        setLoading,
        getLoading
      }}
    >
      {children}
      {getLoading("progressBar") && <LoadingProgressBar/>}
      {getLoading("screen") && <LoadingScreen/>}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider, useLoading };
