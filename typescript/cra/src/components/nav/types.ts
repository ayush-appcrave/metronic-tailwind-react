/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { MenuProps, type SxProps } from '@mui/material';
import { HTMLAttributes, RefAttributes } from 'react';

import { type ColorSchema } from '../../theme/palette';

export type NavMenuType = any;

export type NavDepthType = number;

export type NavTabIndexType = number;

export type NavDirectionType = any;

export type NavToggleType = any;

export type NavArrowType = boolean;

export type NavAccordionType = any;

export type NavCollapseType = boolean;

export type NavExpandType = boolean;

export type NavMinimizeType = boolean;

export type NavHoverType = boolean;

export type NavOpenType = boolean;

export type NavHereType = boolean;

export type NavActiveType = boolean;

export type NavStylesType = any;

export type NavMenuRefType = any;

export type NavMenuWidthType = any;

export type NavTitleType = string;

export interface NavBadgeType {
  content: string;
  color: ColorSchema;
}

export type NavBulletType = boolean;

export type NavIconType = any;

export type NavHasSubType = boolean;

export type NavHandleToggleType = any;

export type NavMenuPropsType = Partial<Omit<MenuProps, 'children'>>;

export interface NavPropsType {
  direction?: NavDirectionType;
  accordion?: NavAccordionType;
  collapse?: NavCollapseType;
  expand?: NavExpandType;
  hover?: NavHoverType;
  items?: NavConfigType | undefined;
  styles?: NavStylesType;
  sx?: SxProps;
  children?: any;
}

export interface NavItemSubPropsType {
  depth?: NavDepthType;
  menu: NavMenuType;
  menuProps?: NavMenuPropsType;
  menuWidth?: NavMenuWidthType;
  direction?: NavDirectionType;
  accordion?: NavAccordionType;
  collapse?: NavCollapseType;
  open?: NavOpenType;
  expand?: NavExpandType;
  hover?: NavHoverType;
  items?: NavConfigType | undefined;
  styles?: NavStylesType;
  sx?: SxProps;
  children?: any;
}

export interface NavItemPropsType {
  depth?: NavDepthType;
  menu?: NavMenuType;
  collapse?: NavCollapseType;
  expand?: NavExpandType;
  arrow?: NavArrowType;
  styles?: NavStylesType;
  key?: string;
  title?: string;
  path?: string;
  disabled?: boolean;
  tabIndex?: number;
  externalLink?: boolean;
  newTab?: boolean;
  bullet?: boolean;
  badge?: NavBadgeType;
  icon?: any;
  divider?: boolean;
  subheader?: string;
  caption?: string;
  sub?: NavItemSubConfigType | undefined;
  button?: any;
  sx?: SxProps;
  menuProps?: NavMenuPropsType;
  onClick?: (_?: unknown) => unknown | void;
  containerProps?: HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement | null>;
  children?: any;
}

export interface NavItemChildPropsType {
  depth: NavDepthType;
  menu?: NavMenuType;
  styles: NavStylesType;
  collapse?: NavCollapseType;
  expand?: NavExpandType;
  active?: NavActiveType;
  here?: NavHereType;
  hover?: NavHoverType;
  open?: NavOpenType;
}

export interface NavItemButtonPropsType {
  depth?: NavDepthType;
  menu?: NavMenuType;
  itemMenu?: NavMenuType;
  direction?: NavDirectionType;
  toggle?: NavToggleType;
  accordion?: NavAccordionType;
  active?: NavActiveType;
  here?: NavHereType;
  hover?: NavHoverType;
  open?: NavOpenType;
  collapse?: NavCollapseType;
  expand?: NavExpandType;
  styles?: NavStylesType;
  tabIndex?: NavTabIndexType;
  menuItemRef?: NavMenuRefType;
  handleToggle?: NavHandleToggleType;
  minimize?: NavMinimizeType;
  icon?: NavIconType;
  bullet?: NavBulletType;
  badge?: NavBadgeType;
  title?: NavTitleType;
  hasSub?: NavHasSubType;
  arrow?: NavArrowType;
  children?: any;
}

export interface NavItemArrowPropsType {
  depth: NavDepthType;
  menu: NavMenuType;
  itemMenu: NavMenuType;
  styles: NavStylesType;
  direction?: NavDirectionType;
  toggle?: NavToggleType;
  accordion?: NavAccordionType;
  icon?: any;
  collapse?: NavCollapseType;
  expand?: NavExpandType;
  active?: NavActiveType;
  here?: NavHereType;
  hover?: NavHoverType;
  open?: NavOpenType;
}

export type NavConfigType = NavItemPropsType[];

export interface NavItemSubConfigType {
  menu?: NavMenuType;
  menuProps?: NavMenuPropsType;
  menuWidth?: NavMenuWidthType;
  direction?: NavDirectionType;
  accordion?: NavAccordionType;
  collapse?: NavCollapseType;
  expand?: NavExpandType;
  toggle?: NavToggleType;
  arrow?: NavArrowType;
  hover?: NavHoverType;
  items?: NavConfigType;
  styles?: NavStylesType;
  sx?: SxProps;
}

export interface NavBreadcrumbPropsType {
  title?: string;
  path?: string;
  active?: boolean;
}

export type NavBreadcrumbsPropsType = NavBreadcrumbPropsType[];
