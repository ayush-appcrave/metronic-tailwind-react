import { type PaletteMode } from '@mui/material';
import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { defaultSettings } from '../config/settings.config';
import { type SettingsType } from '../config/types';
import { getData, setData } from '../utils';

const SETTINGS_CONFIG_KEY = 'app-settings-config';

export interface SettingsProviderProps {
  settings: SettingsType;
  updateSettings: (_: Partial<SettingsType>) => void;
  getMode: () => PaletteMode;
}

const calculateInitialSettings = () => {
  const settings = getData(SETTINGS_CONFIG_KEY) as SettingsType | undefined;
  return settings ?? defaultSettings;
};

const calculateUpdatedSettings = (
  prop: Partial<SettingsType>,
  oldSettings: SettingsType
): SettingsType => {
  const updatedSettings = { ...oldSettings, ...prop };
  setData(SETTINGS_CONFIG_KEY, updatedSettings);
  return updatedSettings;
};

const initialProps: SettingsProviderProps = {
  settings: calculateInitialSettings(),
  updateSettings: (_: Partial<SettingsType>) => {},
  getMode: () => 'light'
};

const SettingsContext = createContext<SettingsProviderProps>(initialProps);
const useSettings = () => useContext(SettingsContext);

const SettingsProvider = ({ children }: PropsWithChildren) => {
  const [settings, setSettings] = useState(initialProps.settings);
  const updateSettings = (prop: Partial<SettingsType>) => {
    const updatedSettings = calculateUpdatedSettings(prop, settings);
    setSettings(updatedSettings);
  };

  const getMode = () => {
    const { mode } = settings;
    if (mode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else if (mode === 'dark') {
      return 'dark';
    } else {
      return 'light';
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        getMode
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, useSettings };
