import { type SettingsType } from './types';

const defaultSettings: SettingsType = {
  mode: 'system',
  keeniconsStyle: 'duotone',
  fontFamily: 'Inter',
  layout: 'demo1',
  containerWidth: 'fixed'
};
const COOKIES_EXPIRATION = 5;

export { COOKIES_EXPIRATION, defaultSettings };
