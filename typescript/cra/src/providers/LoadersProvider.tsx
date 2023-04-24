import { useState, createContext, useContext, type PropsWithChildren } from 'react';
import { ScreenLoader, ProgressBarLoader } from '@components/loaders';

export interface LoadersProviderType {
  progressBarLoader: boolean;
  setProgressBarLoader: (state: boolean) => void;
  screenLoader: boolean;
  setScreenLoader: (state: boolean) => void;
}

const initialProps: LoadersProviderType = {
  progressBarLoader: false,
  setProgressBarLoader: (state: boolean) => {},
  screenLoader: false,
  setScreenLoader: (state: boolean) => {}
};

const LoadersContext = createContext<LoadersProviderType>(initialProps);
const useLoaders = () => useContext(LoadersContext);

const LoadersProvider = ({ children }: PropsWithChildren) => {
  const [progressBarLoader, setProgressBarLoader] = useState(false);
  const [screenLoader, setScreenLoader] = useState(true);

  return (
    <LoadersContext.Provider
      value={{
        progressBarLoader,
        setProgressBarLoader,
        screenLoader,
        setScreenLoader
      }}>
      {children}
      {progressBarLoader && <ProgressBarLoader />}
      {screenLoader && <ScreenLoader />}
    </LoadersContext.Provider>
  );
};

export { LoadersProvider, useLoaders };
