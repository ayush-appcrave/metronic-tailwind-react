import { useState, createContext, useContext, PropsWithChildren } from "react";
import { Direction } from "@mui/material";
import { getData, setData } from "@base/helpers";
import { defaultSettings } from "./settings.config";
import { AppSettings } from "./types";

const SETTINGS_CONFIG_KEY = "app-settings-congif";

export type SettingsProviderProps = {
  settings: AppSettings;
  updateSettings: (_: Partial<AppSettings>) => void;
  changeDirection: (direction: Direction) => void;
};

const calculateInitialSettings = () => {
  const settings = getData(SETTINGS_CONFIG_KEY) as AppSettings | undefined;
  return settings || defaultSettings;
};

const calculateUpdatedSettings = (
  prop: Partial<AppSettings>,
  oldSettings: AppSettings
): AppSettings => {
  const updatedSettings = { ...oldSettings, ...prop };
  setData(SETTINGS_CONFIG_KEY, updatedSettings);
  return updatedSettings;
};

const initialProps: SettingsProviderProps = {
  settings: calculateInitialSettings(),
  updateSettings: (_: Partial<AppSettings>) => {},
  changeDirection: (_: Direction) => {},
};

const SettingsContext = createContext<SettingsProviderProps>(initialProps);
const useSettings = () => useContext(SettingsContext);

const SettingsProvider = ({ children }: PropsWithChildren) => {
  const [settings, setSettings] = useState(initialProps.settings);
  const updateSettings = (prop: Partial<AppSettings>) => {
    const updatedSettings = calculateUpdatedSettings(prop, settings);
    setSettings(updatedSettings);
  };

  const changeDirection = (direction: Direction) => {
    updateSettings({ direction });
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        changeDirection,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, useSettings };
