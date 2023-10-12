import { type Breakpoint, type Direction } from '@mui/material';

import { type KeenIconsStyleType } from '../components/keenicons/types';

export type SettingsModeOptionType = 'light' | 'dark' | 'system';

export type SettingsContainerWidthType = 'fluid' | 'fixed';

// Settings types
export interface SettingsType {
  mode: SettingsModeOptionType;
  direction: Direction;
  containerWidth: SettingsContainerWidthType;
  keeniconsStyle: KeenIconsStyleType;
  fontFamily: string;
  colorPreset: string;
  mobileBreakpoint: Breakpoint;
  layout: string;
}

// Menu types
export type PathsType = Record<string, string>;
