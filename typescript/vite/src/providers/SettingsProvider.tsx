import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { defaultSettings } from '@/config/';
import { ISettings, type SettingsModeType } from '@/config/types';

import { getData, setData } from '../utils/LocalStorage';

export interface ISettingsProps {
  settings: ISettings;
  storeSettings: (settings: Partial<ISettings>) => void;
  updateSettings: (settings: Partial<ISettings>) => void;
  getMode: () => SettingsModeType;
}

const SETTINGS_CONFIGS_KEY = 'settings-configs';

const getStoredSettings = (): Partial<ISettings> => {
  return (getData(SETTINGS_CONFIGS_KEY) as Partial<ISettings>) || {};
};

const initialProps: ISettingsProps = {
  settings: { ...defaultSettings, ...getStoredSettings() },
  updateSettings: (_: Partial<ISettings>) => {},
  storeSettings: (_: Partial<ISettings>) => {},
  getMode: () => 'light'
};

const LayoutsContext = createContext<ISettingsProps>(initialProps);
const useSettings = () => useContext(LayoutsContext);

const SettingsProvider = ({ children }: PropsWithChildren) => {
  const [settings, setSettings] = useState(initialProps.settings);

  const updateSettings = (newSettings: Partial<ISettings>) => {
    setSettings({ ...settings, ...newSettings });
  };

  const storeSettings = (newSettings: Partial<ISettings>) => {
    setData(SETTINGS_CONFIGS_KEY, { ...getStoredSettings(), ...newSettings });
    updateSettings(newSettings);
  };

  const getMode = (): SettingsModeType => {
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
    <LayoutsContext.Provider value={{ settings, updateSettings, storeSettings, getMode }}>
      {children}
    </LayoutsContext.Provider>
  );
};

export { SettingsProvider, useSettings };
