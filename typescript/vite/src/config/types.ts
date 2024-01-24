import { type KeenIconsStyleType } from '../components/keenicons/types';

export type SettingsModeOptionType = 'light' | 'dark' | 'system';

export type SettingsContainerType = 'fluid' | 'fixed';

// Settings types
export interface SettingsType {
  mode: SettingsModeOptionType;
  containerWidth: SettingsContainerType;
  keeniconsStyle: KeenIconsStyleType;
  fontFamily: string;
  layout: string;
}

// Menu types
export type PathsType = Record<string, string>;
