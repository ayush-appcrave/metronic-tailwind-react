import { SettingsType } from './types';

const defaultSettings: SettingsType = {
  mode: 'system',
  direction: 'ltr',
  keeniconsStyle: 'duotone',
  fontFamily: 'Inter',
  layout: 'default',
  container: 'fluid',
  colorPreset: 'default',
  mobileBreakpoint: 'md'
};
const COOKIES_EXPIRATION = 5;

export { defaultSettings, COOKIES_EXPIRATION };
