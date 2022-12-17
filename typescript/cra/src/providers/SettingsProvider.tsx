import { useState, createContext, useContext, PropsWithChildren } from "react";
import { getData, setData } from "../utils";
import { defaultSettings } from "../config/settings.config";
import { AppSettings, ThemeModeType } from "../config/types";

const SETTINGS_CONFIG_KEY = "app-settings-config";

export type SettingsProviderProps = {
  settings: AppSettings;
  updateSettings: (_: Partial<AppSettings>) => void;
  getMode: () => ThemeModeType;
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
  getMode: () => "light",
};

const SettingsContext = createContext<SettingsProviderProps>(initialProps);
const useSettings = () => useContext(SettingsContext);

const SettingsProvider = ({ children }: PropsWithChildren) => {
  const [settings, setSettings] = useState(initialProps.settings);
  const updateSettings = (prop: Partial<AppSettings>) => {
    const updatedSettings = calculateUpdatedSettings(prop, settings);
    setSettings(updatedSettings);
  };

  const getMode = () => {
    const { mode } = settings;
    if (mode === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else if (mode === "dark") {
      return "dark";
    } else {
      return "light";
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        getMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, useSettings };
