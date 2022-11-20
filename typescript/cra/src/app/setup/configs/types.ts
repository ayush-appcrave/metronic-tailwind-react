import { Direction } from "@mui/material";
import { Localization } from "@mui/material/locale";

// i18n types
export type AvailableLanguages = "en" | "fr" | "zh" | "vn" | "ar" | "cn";
export type Language = {
  languageLabel: string;
  languageValue: AvailableLanguages;
  languageSystemValue: Localization;
  languageDirection: Direction;
  languageIcon: string;
};

// settings types
export type AppSettings = {
  mode: "light" | "dark";
  direction: Direction;
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

export type MenuItemType =
  | {
      title: string;
      path?: string;
      bullet?: boolean;
      icon?: string;
      children?: {
        variant: "accordion" | "dropdown";
        items: ReadonlyArray<MenuItemType>;
      };
      onClick?: (_?: unknown) => unknown | void;
    }
  | { divider: boolean };

export type MenuType =
  | {
      [key: string]: ReadonlyArray<MenuItemType>;
    }
  | ReadonlyArray<MenuItemType>;
