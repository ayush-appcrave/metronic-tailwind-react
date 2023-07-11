/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { type ColorSchema } from '../../theme/palette';

export interface NavType {
  variant?: 'inline' | 'dropdown';
  direction?: 'vertical' | 'horizontal';
  accordion?: boolean;
  collapse?: boolean;
  expand?: boolean;
  hover?: boolean;
  open?: boolean;
  height?: number | string;
  maxHeight?: number;
  items: NavConfigType | undefined;
  styles?: any;
  depth?: number;
  itemAnchor?: any;
}

export interface NavItemType {
  options: NavItemOptionsType;
  collapse?: boolean;
  expand?: boolean;
  styles?: any;
  depth?: number;
}

export interface NavItemOptionsType {
  key?: string;
  title?: string;
  path?: string;
  externalLink?: boolean;
  newTab?: boolean;
  bullet?: boolean;
  badge?: {
    content: string;
    color: ColorSchema;
  };
  icon?: any;
  divider?: boolean;
  subheader?: string;
  caption?: string;
  children?: NavType | undefined;
  onClick?: (_?: unknown) => unknown | void;
}

export interface NavItemArrowType {
  variant?: 'inline' | 'dropdown';
  direction?: 'vertical' | 'horizontal';
  icon?: any;
  depth?: number;
  collapse?: boolean;
  expand?: boolean;
  hover?: boolean;
  active?: boolean;
  open?: boolean;
  here?: boolean;
  disabled?: boolean;
  styles?: any;
}

export interface NavItemBulletType {
  variant?: 'bar' | 'dot';
  depth?: number;
  collapse?: boolean;
  expand?: boolean;
  hover?: boolean;
  active?: boolean;
  open?: boolean;
  here?: boolean;
  disabled?: boolean;
  styles?: any;
}

export interface NavItemChildType {
  depth?: number;
  collapse?: boolean;
  expand?: boolean;
  hover?: boolean;
  active?: boolean;
  open?: boolean;
  here?: boolean;
  disabled?: boolean;
  styles?: any;
}

export type NavConfigType = readonly NavItemOptionsType[];

export type NavBreadcrumbsType = NavBreadcrumbType[];

export interface NavBreadcrumbType {
  title?: string;
  path?: string;
  active?: boolean;
}
