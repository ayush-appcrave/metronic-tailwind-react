import { Direction } from "@mui/material";

export type SettingsModeType = "light" | "dark";

export type SettingsModeOptionType = "light" | "dark" | "system";

export type SettingsKeenIconsType = "duotone" | "solid" | "outline";

export type SettingsContainerType = "fluid" | "fixed";

// Settings types
export type SettingsType = {
  mode: SettingsModeOptionType;
  direction: Direction;
  container: SettingsContainerType;
  keenicons: SettingsKeenIconsType;
  fontFamily: string;
  color: string;
  layout: string;
};

// Menu types
export type PathsType = {
  [key: string]: string;
};

