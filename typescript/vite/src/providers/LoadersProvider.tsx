/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { ProgressBarLoader, ScreenLoader } from '@/components/loaders';

export interface LoadersProviderType {
  contentLoader: boolean;
  setContentLoader: (state: boolean) => void;
  progressBarLoader: boolean;
  setProgressBarLoader: (state: boolean) => void;
  screenLoader: boolean;
  setScreenLoader: (state: boolean) => void;
}

const initialProps: LoadersProviderType = {
  contentLoader: false,
  setContentLoader: (state: boolean) => {},
  progressBarLoader: false,
  setProgressBarLoader: (state: boolean) => {},
  screenLoader: false,
  setScreenLoader: (state: boolean) => {}
};

const LoadersContext = createContext<LoadersProviderType>(initialProps);
const useLoaders = () => useContext(LoadersContext);

const LoadersProvider = ({ children }: PropsWithChildren) => {
  const [contentLoader, setContentLoader] = useState(false);
  const [progressBarLoader, setProgressBarLoader] = useState(false);
  const [screenLoader, setScreenLoader] = useState(false);

  return (
    <LoadersContext.Provider
      value={{
        contentLoader,
        setContentLoader,
        progressBarLoader,
        setProgressBarLoader,
        screenLoader,
        setScreenLoader
      }}
    >
      {children}
      {progressBarLoader && <ProgressBarLoader />}
      {screenLoader && <ScreenLoader />}
    </LoadersContext.Provider>
  );
};

export { LoadersProvider, useLoaders };
