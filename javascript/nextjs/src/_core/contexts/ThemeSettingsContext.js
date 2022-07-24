import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import getThemeColors, { themeColors, defaultThemeColor } from '../utils/getThemeColors';
import { SETTINGS_DEFAULTS, SETTINGS_KEYS, COOKIES_EXPIRATION } from '../config';
import getLanguage from '../utils/getLanguage';

// ----------------------------------------------------------------------

const initialState = {
  ...SETTINGS_DEFAULTS,

  // Mode
  onChangeMode: () => {},

  // Direction
  onChangeDirection: () => {},
  onChangeDirectionByLanguageSelection: () => {},

  // Layout
  onChangeLayout: () => {},

  // Theme colors
  onChangeColorOption: () => {},
  setThemeColor: defaultThemeColor,
  themeColorSelection: [],

  // Reset
  onResetSettings: () => {},
};

const ThemeSettingsContext = createContext(initialState);

ThemeSettingsProvider.propTypes = {
  children: PropTypes.node,
  defaultSettings: PropTypes.object,
};

function ThemeSettingsProvider({ children, defaultSettings }) {
  const [settings, setSettings] = useThemeSettingsStorage(defaultSettings);
  const [langugeValue, langugeDirection] = getLanguage(settings.themeLanguage);

  const isRtl = langugeDirection === 'rtl';

  useEffect(() => {
    if (isRtl) {
      onChangeDirectionByLanguageSelection(langugeValue);
    }
  }, [isRtl]);

  const onChangeMode = (event) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  // Direction
  const onChangeDirection = (event) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value,
    });
  };

  const onChangeDirectionByLanguageSelection = (lang) => {
    const [langugeValue, langugeDirection] = getLanguage(settings.themeLanguage);

    setSettings({
      ...settings,
      themeDirection: langugeDirection,
    });
  };

  // Layout
  const onChangeLayout = (event) => {
    setSettings({
      ...settings,
      themeLayout: event.target.value,
    });
  };

  // Contianer width
  const onChangeContainerWidth = (event) => {
    setSettings({
      ...settings,
      themeContainerWidth: event.target.value,
    });
  };

  // Reset
  const onResetSettings = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeDirection: initialState.themeLayout,
      themeLanguage: initialState.themeLanguage,
      themeLayout: initialState.themeStretch,
      themeContainerWidth: initialState.themeContainerWidth,      
      themeColor: initialState.themeColor,
    });
  };

  return (
    <ThemeSettingsContext.Provider
      value={{
        ...settings,

        // Mode
        onChangeMode,

        // Direction
        onChangeDirection,
        onChangeDirectionByLanguageSelection,

        // Layout
        onChangeLayout,

        // Container width
        onChangeContainerWidth,

        // Color
        onChangeColor,
        setColor: getThemeColors(settings.themeColor),
        colorOptions: themeColors.map((color) => ({
          name: color.name,
          value: color.main,
        })),

        // Reset
        onResetSettings,
      }}
    >
      {children}
    </ThemeSettingsContext.Provider>
  );
}

export { ThemeSettingsProvider, ThemeSettingsContext };

function useThemeSettingsStorage(defaultSettings) {
  const [settings, setSettings] = useState(defaultSettings);

  const onChangeSettings = () => {
    Cookies.set(SETTINGS_KEYS.themeMode, settings.themeMode, { expires: COOKIES_EXPIRATION });

    Cookies.set(SETTINGS_KEYS.themeDirection, settings.themeDirection, { expires: COOKIES_EXPIRATION });

    Cookies.set(SETTINGS_KEYS.themeLanguage, settings.themeLanguage, { expires: COOKIES_EXPIRATION });

    Cookies.set(SETTINGS_KEYS.themeColor, settings.themeColor, { expires: COOKIES_EXPIRATION });

    Cookies.set(SETTINGS_KEYS.themeLayout, settings.themeLayout, { expires: COOKIES_EXPIRATION });

    Cookies.set(SETTINGS_KEYS.themeContainerWidth, settings.themeContainerWidth, { expires: COOKIES_EXPIRATION });
  };

  useEffect(() => {
    onChangeSettings();
  }, [settings]);

  return [settings, setSettings];
}