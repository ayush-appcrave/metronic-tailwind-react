export type ModeType = "light" | "dark" | "system";

export type ThemeModeType = "light" | "dark";

// Settings types
export type AppSettings = {
  mode?: ModeType;
  containerWidth: "fluid" | "fixed";
  color: "default";
  keeniconsType: "duotone";
  layout: "default";
};

// Menu types
export type PathsType = {
  [key: string]: string;
};

