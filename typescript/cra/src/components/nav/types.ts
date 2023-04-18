/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { number } from 'yup';
import { ListItemButtonProps } from '@mui/material';
import { ColorSchema } from '../../theme/palette';

export interface NavType {
  variant?: 'inline' | 'popper';
  direction?: 'vertical' | 'horizontal';
  accordion?: boolean;
  collapse?: boolean;
  expand?: boolean;
  hover?: boolean;
  open?: boolean;
  height?: number | string;
  maxHeight?: number;
  items: NavConfigType;
  styles?: any;
  depth?: number;
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
  children?: NavType;
  onClick?: (_?: unknown) => unknown | void;
}

export interface NavItemArrowType {
  variant?: 'inline' | 'popper';
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
  title: string;
  href?: string;
  active?: boolean;
}
