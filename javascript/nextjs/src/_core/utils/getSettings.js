// Config
import { SETTINGS_DEFAULTS, SETTINGS_KEYS } from '../../config';

export const getSettings = (cookies) => {
  const mode = getCookieData(cookies[SETTINGS_KEYS.mode]) || SETTINGS_DEFAULTS.mode;

  const direction = getCookieData(cookies[SETTINGS_KEYS.direction]) || SETTINGS_DEFAULTS.direction;

  const language = getCookieData(cookies[SETTINGS_KEYS.language]) || SETTINGS_DEFAULTS.language;

  const containerWidth = getCookieData(cookies[SETTINGS_KEYS.containerWidth]) || SETTINGS_DEFAULTS.containerWidth;

  const layout = getCookieData(cookies[SETTINGS_KEYS.layout]) || SETTINGS_DEFAULTS.layout;

  const color = getCookieData(cookies[SETTINGS_KEYS.color]) || SETTINGS_DEFAULTS.color;

  return {
    mode,
    language,
    direction,
    layout,
    containerWidth,    
    color
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
