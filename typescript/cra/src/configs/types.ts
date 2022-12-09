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

export type MenuItemType = {
  title?: string;
  path?: string;
  bullet?: boolean;
  icon?: string;
  children?: {
    variant: "accordion" | "dropdown";
    items: ReadonlyArray<MenuItemType>;
  };
  onClick?: (_?: unknown) => unknown | void;
  divider?: boolean;
};

export type MenuType =
  | {
      [key: string]: ReadonlyArray<MenuItemType>;
    }
  | ReadonlyArray<MenuItemType>;
