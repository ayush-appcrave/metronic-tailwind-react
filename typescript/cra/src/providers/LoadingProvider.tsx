import { useState, createContext, useContext, type PropsWithChildren } from 'react';
import { LoadingScreen, LoadingProgressBar } from '../components/loading';

export interface LoadingProviderType {
  pageLoading: boolean;
  setPageLoading: (state: boolean) => void;
  progressBarLoading: boolean;
  setProgressBarLoading: (state: boolean) => void;
  screenLoading: boolean;
  setScreenLoading: (state: boolean) => void;
}

const initialProps: LoadingProviderType = {
  pageLoading: true,
  setPageLoading: (state: boolean) => {},
  progressBarLoading: true,
  setProgressBarLoading: (state: boolean) => {},
  screenLoading: true,
  setScreenLoading: (state: boolean) => {}
};

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
      }}>
      {children}
      {progressBarLoading && <LoadingProgressBar />}
      {screenLoading && <LoadingScreen />}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider, useLoading };
