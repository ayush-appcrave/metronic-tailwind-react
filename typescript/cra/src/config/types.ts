import { Direction, Breakpoint } from '@mui/material';
import { KeenIconsStyleType } from '../components/keenicons/types';

export type SettingsModeOptionType = 'light' | 'dark' | 'system';

export type SettingsContainerType = 'fluid' | 'fixed';

// Settings types
export interface SettingsType {
  mode: SettingsModeOptionType;
  direction: Direction;
  container: SettingsContainerType;
  keeniconsStyle: KeenIconsStyleType;
  fontFamily: string;
  colorPreset: string;
  mobileBreakpoint: Breakpoint;
  layout: string;
}

// Menu types
export type PathsType = Record<string, string>;
