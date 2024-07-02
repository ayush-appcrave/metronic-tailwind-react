import { PopperProps } from '@mui/material';
import { HTMLAttributes, MouseEvent, ReactNode, RefAttributes } from 'react';

export type MenuEventHandlerType = (e: MouseEvent<HTMLElement>) => void;

export type MenuClickEventType = (e: MouseEvent<HTMLElement>, props: any) => void;

export type MenuShowType = boolean;

export type MenuTriggerType = 'click' | 'hover';

export type MenuItemTriggerType = Record<string, MenuToggleType> | MenuTriggerType;

export type MenuToggleType = 'accordion' | 'dropdown';

export type MenuItemToggleType = Record<string, MenuToggleType> | MenuToggleType;

export type MenuDropdownType = Partial<Omit<PopperProps, 'children'>>;

export type MenuTabIndexType = number;

export interface IMenuProps {
  className?: string;
  children: ReactNode;
  onLinksClick?: MenuClickEventType;
}

export interface IMenuItemProps {
  path?: string;
  soon?: boolean;
  toggle?: MenuItemToggleType;
  trigger?: MenuItemTriggerType;
  disabled?: boolean;
  dropdownProps?: MenuDropdownType;
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

export interface IMenuLinkProps {
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

export interface IMenuLabelProps {
  className?: string;
  tabIndex?: MenuTabIndexType;
  menuItemRef?: any;
  children?: ReactNode;
}

export interface IMenuToggleProps {
  className?: string;
  tabIndex?: MenuTabIndexType;
  menuItemRef?: any;
  handleToggle?: MenuEventHandlerType;
  handleClick?: MenuEventHandlerType;
  onLinkClick?: MenuClickEventType;
  onLinksClick?: MenuClickEventType;
  children?: ReactNode;
}

export interface IMenuSubProps {
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
export interface IMenuTitleProps {
  className?: string;
  children?: ReactNode;
}

export interface IMenuIconProps {
  className?: string;
  children: ReactNode;
}

export interface IMenuBadgeProps {
  className?: string;
  children: ReactNode;
}

export interface IMenuBulletProps {
  className?: string;
  children?: ReactNode;
}

export interface IMenuHeadingProps {
  className?: string;
  children: ReactNode;
}

export interface IMenuItemConfig {
  title?: string;
  soon?: boolean;
  heading?: string;
  icon?: string;
  path?: string;
  bullet?: boolean;
  collapse?: boolean;
  collapseTitle?: string;
  expandTitle?: string;
  toggle?: MenuItemToggleType;
  dropdownProps?: MenuDropdownType;
  trigger?: MenuItemTriggerType;
  children?: IMenuItemConfig[];
}

export type MenuConfigType = IMenuItemConfig[];

export interface IMenuBreadcrumb {
  title?: string;
  path?: string;
  active?: boolean;
}

export type MenuBreadcrumbsType = IMenuBreadcrumb[];
