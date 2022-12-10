export type Mode = "light" | "dark" | "system";

// settings types
export type AppSettings = {
  mode: Mode;
  containerWidth: "fluid" | "fixed";
  color: "default";
  layout: "default" | "without-sidebar";
};

// layout types
export type LayoutSettings = {
  SIDEBAR_WIDTH?: number;
  SIDEBAR_COLLAPSE_WIDTH?: number;
};

// menu types
export type PATHS = {
  [key: string]: string;
};

