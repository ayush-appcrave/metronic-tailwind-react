import { MenuProps } from '@mui/base';
import { HTMLAttributes, MouseEvent, ReactNode, RefAttributes } from 'react';

export type MenuEventHandlerType = (e: MouseEvent<HTMLElement>) => void;

export type MenuClickEventType = (e: MouseEvent<HTMLElement>, props: any) => void;

export type MenuCollapseType = boolean;

export type MenuExpandType = boolean;

export type MenuShowType = boolean;

export type MenuTriggerType = any;

export type MenuToggleType = any;

export type MenuTabIndexType = number;

export type MenuSubMenuPropsType = Partial<Omit<MenuProps, 'children'>>;

export interface MenuPropsType {
  collapse?: MenuCollapseType;
  expand?: MenuExpandType;
  className?: string;
  children: ReactNode;
  onLinksClick?: MenuClickEventType;
}

export interface MenuItemPropsType {
  path?: string;
  collapse?: MenuCollapseType;
  expand?: MenuExpandType;
  toggle?: MenuToggleType;
  trigger?: MenuTriggerType;
  disabled?: boolean;
  baseMenuProps?: MenuSubMenuPropsType;
  className?: string;
  onLinkClick?: MenuClickEventType;
  onLinksClick?: MenuClickEventType;
  handleParentClose?: MenuEventHandlerType;
  tabIndex?: MenuTabIndexType;
  itemRef?: any;
  containerProps?: HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement | null>;
  children?: ReactNode;
}

export interface MenuLinkPropsType {
  collapse?: MenuCollapseType;
  expand?: MenuExpandType;
  className?: string;
  tabIndex?: MenuTabIndexType;
  menuItemRef?: any;
  handleToggle?: any;
  onLinkClick?: MenuClickEventType;
  onLinksClick?: MenuClickEventType;
  children?: ReactNode;
}

export interface MenuSubPropsType {
  collapse?: MenuCollapseType;
  expand?: MenuExpandType;
  show?: MenuShowType;
  ref?: any;
  tabIndex?: number;
  className?: string;
  children?: ReactNode;
}

export interface MenuTitlePropsType {
  collapse?: MenuCollapseType;
  expand?: MenuExpandType;
  className?: string;
  children?: ReactNode;
}

export interface MenuIconPropsType {
  collapse?: MenuCollapseType;
  expand?: MenuExpandType;
  className?: string;
  children: ReactNode;
}

export interface MenuTogglePropsType {
  collapse?: MenuCollapseType;
  expand?: MenuExpandType;
  className?: string;
  children: ReactNode;
}

export interface MenuHeadingPropsType {
  collapse?: MenuCollapseType;
  expand?: MenuExpandType;
  className?: string;
  children: ReactNode;
}