import { type KeenIconsStyleType } from '../components/keenicons/types';

export type SettingsModeType = 'light' | 'dark' | 'system';

export type SettingsContainerType = 'default' | 'fluid' | 'fixed';

export interface ISettings {
  mode: SettingsModeType;
  container: SettingsContainerType;
  keenIconsStyle: KeenIconsStyleType;
}

export type PathsType = Record<string, string>;
