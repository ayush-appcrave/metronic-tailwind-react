import { useState, createContext, useContext, PropsWithChildren } from 'react';
import { PaletteMode } from '@mui/material';
import { LoadingScreen, LoadingProgressBar } from '../components/loading';

export type LoadingProviderType = {
  pageLoading: boolean;
  setPageLoading: (state: boolean) => void;
  progressBarLoading: boolean;
  setProgressBarLoading: (state: boolean) => void;
  screenLoading: boolean;
  setScreenLoading: (state: boolean) => void;
};

const initialProps: LoadingProviderType = {
  pageLoading: false,
  setPageLoading: (state: boolean) => {},
  progressBarLoading: false,
  setProgressBarLoading: (state: boolean) => {},
  screenLoading: false,
  setScreenLoading: (state: boolean) => {}
}

const LoadingContext = createContext<LoadingProviderType>(initialProps);
const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [pageLoading, setPageLoading] = useState(false);
  const [progressBarLoading, setProgressBarLoading] = useState(false);
  const [screenLoading, setScreenLoading] = useState(true);

  return (
    <LoadingContext.Provider
      value={{
        pageLoading,
        setPageLoading,
        progressBarLoading,
        setProgressBarLoading,
        screenLoading,
        setScreenLoading
      }}
    >
      {children}
      {progressBarLoading && <LoadingProgressBar/>}
      {screenLoading && <LoadingScreen/>}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider, useLoading };
