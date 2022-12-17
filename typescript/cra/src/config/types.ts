export type ModeType = "light" | "dark" | "system";

export type ThemeModeType = "light" | "dark";

// Settings types
export type AppSettings = {
  mode?: ModeType;
  containerWidth: "fluid" | "fixed";
  color: "default";
  layout: "default" | "without-sidebar";
};

// Layout types
export type LayoutSettingsType = {
  SIDEBAR_WIDTH?: number;
  SIDEBAR_COLLAPSE_WIDTH?: number;
};

// Menu types
export type PathsType = {
  [key: string]: string;
};

