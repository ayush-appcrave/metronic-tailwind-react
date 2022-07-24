// Config
import { SETTINGS_DEFAULTS, SETTINGS_KEYS } from '../../config';

export const getThemeSettings = (cookies) => {
  const themeMode = getCookieData(cookies[SETTINGS_KEYS.themeMode]) || SETTINGS_DEFAULTS.themeMode;

  const themeDirection = getCookieData(cookies[SETTINGS_KEYS.themeDirection]) || SETTINGS_DEFAULTS.themeDirection;

  const themeLanguage = getCookieData(cookies[SETTINGS_KEYS.themeLanguage]) || SETTINGS_DEFAULTS.themeLanguage;

  const themeContainerWidth = getCookieData(cookies[SETTINGS_KEYS.themeContainerWidth]) || SETTINGS_DEFAULTS.themeContainerWidth;

  const themeLayout = getCookieData(cookies[SETTINGS_KEYS.themeLayout]) || SETTINGS_DEFAULTS.themeLayout;

  const themeColor = getCookieData(cookies[SETTINGS_KEYS.themeColor]) || SETTINGS_DEFAULTS.themeColor;

  return {
    themeMode,
    themeLayout,
    themeContainerWidth,
    themeDirection,
    themeColor,
  };
};

const getCookieData = (value) => {
  if (value === 'true' || value === 'false') {
    return JSON.parse(value);
  }
  
  if (value === 'undefined' || !value) {
    return '';
  }

  return value;
};
