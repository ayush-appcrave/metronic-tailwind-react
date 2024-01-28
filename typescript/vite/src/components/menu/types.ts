import { MenuProps } from '@mui/base';
import { HTMLAttributes, MouseEvent, ReactNode, RefAttributes } from 'react';

export type MenuEventHandlerType = (e: MouseEvent<HTMLElement>) => void;

export type MenuClickEventType = (e: MouseEvent<HTMLElement>, props: any) => void;

export type MenuShowType = boolean;

export type MenuTriggerType = 'click' | 'hover';

export type MenuItemTriggerType = Record<string, MenuToggleType> | MenuTriggerType;

export type MenuToggleType = 'accordion' | 'dropdown';

export type MenuItemToggleType = Record<string, MenuToggleType> | MenuToggleType;

export type MenuTabIndexType = number;

export type MenuSubMenuPropsType = Partial<Omit<MenuProps, 'children'>>;

export interface MenuPropsType {
  className?: string;
  children: ReactNode;
  onLinksClick?: MenuClickEventType;
}

export interface MenuItemPropsType {
  path?: string;
  toggle?: MenuItemToggleType;
  trigger?: MenuItemTriggerType;
  disabled?: boolean;
  baseMenuProps?: MenuSubMenuPropsType;
  className?: string;
  onLinkClick?: MenuClickEventType;
  onLinksClick?: MenuClickEventType;
  handleParentClose?: MenuEventHandlerType;
  handleClick?: MenuEventHandlerType;
  tabIndex?: MenuTabIndexType;
  itemRef?: any;
  containerProps?: HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement | null>;
  children?: ReactNode;
}

export interface MenuLinkPropsType {
  path?: string;
  externalLink?: boolean;
  newTab?: boolean;
  hasItemSub?: boolean;
  className?: string;
  tabIndex?: MenuTabIndexType;
  menuItemRef?: any;
  handleToggle?: MenuEventHandlerType;
  handleClick?: MenuEventHandlerType;
  onLinkClick?: MenuClickEventType;
  onLinksClick?: MenuClickEventType;
  children?: ReactNode;
}

export interface MenuSubPropsType {
  show?: MenuShowType;
  enter?: boolean;
  toggle?: MenuToggleType;
  ref?: any;
  tabIndex?: number;
  className?: string;
  onLinkClick?: MenuClickEventType;
  onLinksClick?: MenuClickEventType;
  handleParentClose?: MenuEventHandlerType;
  handleClick?: MenuEventHandlerType;
  handleEnd?: () => void;
  accordionIn?: boolean;
  children?: ReactNode;
}
export interface MenuTitlePropsType {
  className?: string;
  children?: ReactNode;
}

export interface MenuIconPropsType {
  className?: string;
  children: ReactNode;
}

export interface MenuBulletPropsType {
  className?: string;
  children?: ReactNode;
}

export interface MenuTogglePropsType {
  className?: string;
  children: ReactNode;
}

export interface MenuHeadingPropsType {
  className?: string;
  children: ReactNode;
}

export type MenuConfigType = MenuItemConfigType[];

export interface MenuItemConfigType {
  title?: string;
  heading?: string;
  icon?: string;
  path?: string;
  bullet?: boolean;
  collapse?: boolean;
  collapseTitle?: string;
  expandTitle?: string;
  toggle?: MenuItemToggleType;
  trigger?: MenuItemTriggerType;
  children?: MenuItemConfigType[];
}

export interface MenuBreadcrumbPropsType {
  title?: string;
  path?: string;
  active?: boolean;
}

export type MenuBreadcrumbsPropsType = MenuBreadcrumbPropsType[];
