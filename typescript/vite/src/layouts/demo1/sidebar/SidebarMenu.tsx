/* eslint-disable react/jsx-key */
import clsx from 'clsx';
import { ReactNode } from 'react';

import { KeenIcon } from '@/components/keenicons';
import {
  Menu,
  MenuBullet,
  MenuConfigType,
  MenuHeading,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuToggle
} from '@/components/menu';

import { MENU_SIDEBAR } from '../../../config/menu.config';
import { useDemo1Layout } from '../Demo1LayoutProvider';

const SidebarMenu = () => {
  const { sidebarExpand, sidebarCollapse } = useDemo1Layout();

  const buildMenu = (items: MenuConfigType) => {
    // eslint-disable-next-line no-unreachable-loop
    return items.map((item) => {
      if (item.children) {
        return (
          <MenuItem
            {...(item.toggle && { toggle: item.toggle })}
            {...(item.trigger && { trigger: item.trigger })}
          >
            <MenuLink className="py-1.5 px-[10px] flex gap-1 items-center grow cursor-pointer">
              <MenuIcon className="w-[23px] text-gray-400">
                {item.icon && <KeenIcon icon={item.icon} className="text-lg" />}
              </MenuIcon>
              <MenuTitle className="text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-item-here:text-gray-900 menu-item-show:text-gray-900 menu-link-hover:!text-primary">
                {item.title}
              </MenuTitle>
              {buildMenuToggle()}
            </MenuLink>
            <MenuSub className="pl-[27px] gap-0.5 relative before:absolute before:left-[18px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
              {buildMenuSub(item.children)}
            </MenuSub>
          </MenuItem>
        );
      } else if (item.heading) {
        return (
          <MenuItem className="pt-3">
            <MenuHeading className="uppercase px-[10px] text-[13px] font-medium text-gray-500">
              {item.heading}
            </MenuHeading>
          </MenuItem>
        );
      } else {
        return (
          <MenuItem path={item.path}>
            <MenuLink className="py-1.5 px-[10px] gap-1 menu-item-active:bg-secondary-active menu-item-active:rounded-lg">
              <MenuIcon className="w-[23px] text-gray-400 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
                {item.icon && <KeenIcon icon={item.icon} className="text-lg" />}
              </MenuIcon>
              <MenuTitle className="text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:!text-primary">
                {item.title}
              </MenuTitle>
            </MenuLink>
          </MenuItem>
        );
      }
    });
  };

  const buildMenuSub = (items: MenuConfigType, indent: boolean = true) => {
    // eslint-disable-next-line no-unreachable-loop
    return items.map((item) => {
      if (item.children) {
        return (
          <MenuItem
            className={clsx(item.collapse && 'flex-col-reverse')}
            {...(item.toggle && { toggle: item.toggle })}
            {...(item.trigger && { trigger: item.trigger })}
          >
            <MenuLink className="px-[10px] py-1.5 grow cursor-pointer">
              {item.bullet && buildMenuBullet()}

              {item.collapse ? (
                <MenuTitle className="text-[13px] font-normal text-gray-500 mr-1">
                  <span className="hidden menu-item-show:!flex">{item.collapseTitle}</span>
                  <span className="flex menu-item-show:hidden">{item.expandTitle}</span>
                </MenuTitle>
              ) : (
                <MenuTitle className="text-[13px] font-normal mr-1 text-gray-700 menu-item-active:text-primary menu-item-here:text-gray-900 menu-item-show:text-gray-900 menu-link-hover:!text-primary">
                  {item.title}
                </MenuTitle>
              )}

              {buildMenuToggle()}
            </MenuLink>
            <MenuSub
              className={clsx(
                'gap-1.5',
                !item.collapse &&
                  'relative before:absolute before:left-[10px] before:top-0 before:bottom-0 before:border-l before:border-gray-200'
              )}
            >
              {buildMenuSub(item.children, !item.collapse)}
            </MenuSub>
          </MenuItem>
        );
      } else {
        return (
          <MenuItem path={item.path}>
            <MenuLink className="px-[10px] py-1.5 items-center grow menu-item-active:bg-secondary-active menu-item-active:rounded-lg">
              {item.bullet && buildMenuBullet()}

              <MenuTitle className="text-[13px] font-normal text-gray-700 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:!text-primary">
                {item.title}
              </MenuTitle>
            </MenuLink>
          </MenuItem>
        );
      }
    });
  };

  const buildMenuToggle = () => {
    return (
      <MenuToggle className="justify-end mr-[-10px] w-[20px] text-gray-400">
        <KeenIcon icon="plus" className="text-sm menu-item-show:hidden" />
        <KeenIcon icon="minus" className="text-sm hidden menu-item-show:inline-flex" />
      </MenuToggle>
    );
  };

  const buildMenuBullet = () => {
    return (
      <MenuBullet className="menu-bullet flex w-[10px] relative before:absolute before:top-0 before:left-[0.5px] before:h-[6px] before:w-[6px] before:rounded-full before:-translate-x-2/4 before:-translate-y-2/4 menu-item-active:before:bg-primary"></MenuBullet>
    );
  };

  return (
    <Menu className="flex flex-col grow" collapse={sidebarCollapse} expand={sidebarExpand}>
      {buildMenu(MENU_SIDEBAR)}
    </Menu>
  );
};

export { SidebarMenu };
