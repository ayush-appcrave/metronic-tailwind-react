// Todo: refactor
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import getColors, { colors, defaultColor } from "../utils/getColors";
import {
  SETTINGS_DEFAULTS,
  SETTINGS_KEYS,
  COOKIES_EXPIRATION,
} from "../../config";
import getLanguage from "../utils/getLanguage";

// ----------------------------------------------------------------------

const initialState = {
  ...SETTINGS_DEFAULTS,

  // Mode
  onChangeMode: () => {},

  // Direction
  onChangeDirection: () => {},

  // Layout
  onChangeLayout: () => {},

  // Colors
  onChangeColor: () => {},
  setColor: defaultColor,
  colorOptions: [],

  // Reset
  onResetSettings: () => {},
};

const SettingsContext = createContext(initialState);

SettingsProvider.propTypes = {
  children: PropTypes.node,
  defaultSettings: PropTypes.object,
};

function SettingsProvider({ children, defaultSettings }) {
  const [settings, setSettings] = useSettingsStorage(defaultSettings);

  const language = getLanguage(settings.themeLanguage);

  const isRtl = language.languageDirection === "rtl";

  const onChangeMode = (event) => {
    setSettings({
      ...settings,
      mode: event.target.value,
    });
  };

  // Direction
  const onChangeDirection = (event) => {
    setSettings({
      ...settings,
      direction: event.target.value,
    });
  };

  // Layout
  const onChangeLayout = (event) => {
    setSettings({
      ...settings,
      layout: event.target.value,
    });
  };

  // Color
  const onChangeColor = (event) => {
    setSettings({
      ...settings,
      color: event.target.value,
    });
  };

  // Contianer width
  const onChangeContainerWidth = (event) => {
    setSettings({
      ...settings,
      containerWidth: event.target.value,
    });
  };

  // Reset
  const onResetSettings = () => {
    setSettings({
      mode: initialState.mode,
      direction: initialState.direction,
      language: initialState.language,
      layout: initialState.layout,
      containerWidth: initialState.containerWidth,
      color: initialState.color,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,

        // Mode
        onChangeMode,

        // Direction
        onChangeDirection,

        // Layout
        onChangeLayout,

        // Container width
        onChangeContainerWidth,

        // Color
        onChangeColor,
        setColor: getColors(settings.color),
        colorOptions: colors.map((color) => ({
          name: color.name,
          value: color.main,
        })),

        // Reset
        onResetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };

function useSettingsStorage(defaultSettings) {
  const [settings, setSettings] = useState(defaultSettings);

  const onChangeSettings = () => {
    Cookies.set(SETTINGS_KEYS.mode, settings.mode, {
      expires: COOKIES_EXPIRATION,
    });

    Cookies.set(SETTINGS_KEYS.direction, settings.direction, {
      expires: COOKIES_EXPIRATION,
    });

    Cookies.set(SETTINGS_KEYS.language, settings.language, {
      expires: COOKIES_EXPIRATION,
    });

    Cookies.set(SETTINGS_KEYS.color, settings.color, {
      expires: COOKIES_EXPIRATION,
    });

    Cookies.set(SETTINGS_KEYS.layout, settings.layout, {
      expires: COOKIES_EXPIRATION,
    });

    Cookies.set(SETTINGS_KEYS.containerWidth, settings.containerWidth, {
      expires: COOKIES_EXPIRATION,
    });
  };

  useEffect(() => {
    onChangeSettings();
  }, [settings]);

  return [settings, setSettings];
}
