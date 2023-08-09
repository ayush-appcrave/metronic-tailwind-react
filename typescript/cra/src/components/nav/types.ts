/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { MenuProps, type SxProps } from '@mui/material';
import { HTMLAttributes, RefAttributes } from 'react';

import { type ColorSchema } from '../../theme/palette';

export interface NavType {
  variant?: any;
  direction?: any;
  toggle?: any;
  accordion?: any;
  collapse?: boolean;
  expand?: boolean;
  hover?: boolean;
  open?: boolean;
  height?: number | string;
  maxHeight?: number;
  items: NavConfigType | undefined;
  styles?: any;
  depth?: number;
  sx?: SxProps;
}

export interface NavItemType {
  options: NavItemOptionsType;
  collapse?: boolean;
  expand?: boolean;
  styles?: any;
  depth?: number;
  parentVariant: string;
  disabled?: boolean;
  ContainerProps?: HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement | null>;
  MenuProps?: Partial<Omit<MenuProps, 'children'>>;
}

export interface NavItemOptionsType {
  key?: string;
  title?: string;
  path?: string;
  disabled?: boolean;
  tabIndex?: number;
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
  variant?: any;
  direction?: any;
  toggle?: any;
  accordion?: any;
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
