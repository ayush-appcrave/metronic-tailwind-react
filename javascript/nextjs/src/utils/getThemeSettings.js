// Config
import { CONFIG_THEME_DEFAULTS, CONFIG_COOKIES_KEYS } from '../config';

export const getThemeSettings = (cookies) => {
  const themeMode = getCookieData(cookies[CONFIG_COOKIES_KEYS.themeMode]) || CONFIG_THEME_DEFAULTS.themeMode;

  const themeDirection = getCookieData(cookies[CONFIG_COOKIES_KEYS.themeDirection]) || CONFIG_THEME_DEFAULTS.themeDirection;

  const themeContainerWidth = getCookieData(cookies[CONFIG_COOKIES_KEYS.themeContainerWidth]) || CONFIG_THEME_DEFAULTS.themeContainerWidth;

  const themeLayout = getCookieData(cookies[CONFIG_COOKIES_KEYS.themeLayout]) || CONFIG_THEME_DEFAULTS.themeLayout;

  const themeColorPresets = getCookieData(cookies[CONFIG_COOKIES_KEYS.themeColorPresets]) || CONFIG_THEME_DEFAULTS.themeColorPresets;

  return {
    themeMode,
    themeLayout,
    themeContainerWidth,
    themeDirection,
    themeColorPresets,
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
