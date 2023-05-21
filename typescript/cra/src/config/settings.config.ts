import { type SettingsType } from './types';

const defaultSettings: SettingsType = {
  mode: 'system',
  direction: 'ltr',
  keeniconsStyle: 'duotone',
  fontFamily: 'Inter',
  layout: 'default',
  containerWidth: 'fluid',
  colorPreset: 'default',
  mobileBreakpoint: 'md'
};
const COOKIES_EXPIRATION = 5;

export { COOKIES_EXPIRATION, defaultSettings };
