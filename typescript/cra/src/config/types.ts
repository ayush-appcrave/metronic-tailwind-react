export type Mode = "light" | "dark" | "system";

// Settings types
export type AppSettings = {
  mode: Mode;
  containerWidth: "fluid" | "fixed";
  color: "default";
  layout: "default" | "without-sidebar";
};

// Layout types
export type LayoutSettings = {
  SIDEBAR_WIDTH?: number;
  SIDEBAR_COLLAPSE_WIDTH?: number;
};

// Menu types
export type PATHS = {
  [key: string]: string;
};

