import { PopperProps } from '@mui/material';
import { HTMLAttributes, MouseEvent, ReactNode, RefAttributes, RefObject } from 'react';

export type MenuEventHandlerType = (e: MouseEvent<HTMLElement>) => void;

export type MenuClickEventType = (e: MouseEvent<HTMLElement>, props: unknown) => void;

export type MenuShowType = boolean;

export type MenuTriggerType = 'click' | 'hover';

export type MenuItemTriggerType = Record<string, MenuToggleType> | MenuTriggerType;

export type MenuToggleType = 'accordion' | 'dropdown';

export type MenuItemToggleType = Record<string, MenuToggleType> | MenuToggleType;

export type MenuDropdownType = Partial<Omit<PopperProps, 'children'>>;

export type MenuTabIndexType = number;

export interface IMenuProps {
  className?: string;
  children?: ReactNode;
  highlight?: boolean;
  multipleAccordion?: boolean;
}

export interface IMenuItemRef {
  show: () => void;
  hide: () => void;
  isOpen: () => boolean;
}

export interface IMenuItemProps {
  path?: string;
  soon?: boolean;
  toggle?: MenuItemToggleType;
  trigger?: MenuItemTriggerType;
  disabled?: boolean;
  dropdownProps?: MenuDropdownType;
  dropdownZIndex?: number;
  className?: string;
  closeParentMenu?: CallableFunction;
  onClick?: MenuClickEventType;
  onShow?: CallableFunction;
  onHide?: CallableFunction;
  handleParentHide?: CallableFunction;
  handleClick?: MenuEventHandlerType;
  tabIndex?: MenuTabIndexType;
  itemRef?: unknown;
  containerProps?: HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement | null>;
  containerRef?: RefObject<HTMLDivElement>;
  children?: ReactNode;
}

export interface IMenuLinkProps {
  path?: string;
  externalLink?: boolean;
  newTab?: boolean;
  hasItemSub?: boolean;
  className?: string;
  tabIndex?: MenuTabIndexType;
  menuItemRef?: unknown;
  handleToggle?: MenuEventHandlerType;
  handleClick?: MenuEventHandlerType;
  onClick?: MenuClickEventType;
  children?: ReactNode;
}

export interface IMenuLabelProps {
  className?: string;
  tabIndex?: MenuTabIndexType;
  children?: ReactNode;
}

export interface IMenuToggleProps {
  className?: string;
  tabIndex?: MenuTabIndexType;
  hasItemSub?: boolean;
  menuItemRef?: unknown;
  handleToggle?: MenuEventHandlerType;
  handleClick?: MenuEventHandlerType;
  onClick?: MenuClickEventType;
  children?: ReactNode;
}

export interface IMenuSubProps {
  show?: MenuShowType;
  enter?: boolean;
  toggle?: MenuToggleType;
  ref?: unknown;
  menuItemRef?: unknown;
  tabIndex?: number;
  className?: string;
  rootClassName?: string;
  baseClassName?: string;
  onClick?: MenuClickEventType;
  handleParentHide?: CallableFunction;
  handleClick?: MenuEventHandlerType;
  handleEnd?: () => void;
  handleStart?: () => void;
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

export interface IMenuSeparatorProps {
  className?: string;
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
  badge?: string;
  separator?: boolean;
  tooltip?: string;
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
