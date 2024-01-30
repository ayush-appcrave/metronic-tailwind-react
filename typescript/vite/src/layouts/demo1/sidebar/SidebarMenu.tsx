/* eslint-disable react/jsx-key */
import clsx from 'clsx';

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

const SidebarMenu = () => {
  const linkPl = 'pl-[10px]';
  const linkPr = 'pr-[10px]';
  const linkPy = 'py-1.5';

  const iconWidth = 'w-[26px]';
  const iconSize = 'text-lg';

  const accordionGap = 'gap-0.5';
  const accordionLinkPl = 'pl-[10px]';
  const accordionLinkGap = 'gap-[10px]';
  const accordionPl = ['pl-[10px]', 'pl-[18px]', 'pl-[18px]', 'pl-[18px]', 'pl-[18px]'];
  const accordionBorderLeft = [
    'before:left-[19px]',
    'before:left-[27px]',
    'before:left-[27px]',
    'before:left-[27px]'
  ];

  const buildMenu = (items: MenuConfigType) => {
    // eslint-disable-next-line no-unreachable-loop
    return items.map((item, index) => {
      if (item.children) {
        return (
          <MenuItem
            key={'item-' + index}
            {...(item.toggle && { toggle: item.toggle })}
            {...(item.trigger && { trigger: item.trigger })}
          >
            <MenuLink
              className={clsx('flex items-center grow cursor-pointer', linkPl, linkPr, linkPy)}
            >
              <MenuIcon className={clsx('items-start text-gray-400', iconWidth)}>
                {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
              </MenuIcon>
              <MenuTitle className="text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-item-here:text-gray-900 menu-item-show:text-gray-900 menu-link-hover:!text-primary">
                {item.title}
              </MenuTitle>
              {buildMenuToggle()}
            </MenuLink>
            <MenuSub
              className={clsx(
                'relative before:top-0 before:bottom-0 before:border-l before:border-gray-200',
                accordionBorderLeft[0],
                accordionPl[0],
                accordionGap
              )}
            >
              {buildMenuSub(item.children, 1)}
            </MenuSub>
          </MenuItem>
        );
      } else if (item.heading) {
        return (
          <MenuItem key={'item-' + index} className="pt-3">
            <MenuHeading
              className={clsx('uppercase text-2sm font-medium text-gray-500', linkPl, linkPr)}
            >
              {item.heading}
            </MenuHeading>
          </MenuItem>
        );
      } else {
        return (
          <MenuItem key={'item-' + index} path={item.path}>
            <MenuLink
              className={clsx(
                'menu-item-active:bg-secondary-active menu-item-active:rounded-lg',
                linkPy,
                linkPl,
                linkPr
              )}
            >
              <MenuIcon
                className={clsx(
                  'items-start text-gray-400 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary',
                  iconWidth
                )}
              >
                {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
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

  const buildMenuSub = (items: MenuConfigType, level: number = 0, indent: boolean = true) => {
    // eslint-disable-next-line no-unreachable-loop
    return items.map((item, index) => {
      if (item.children) {
        return (
          <MenuItem
            key={'item-' + index}
            className={clsx(item.collapse && 'flex-col-reverse')}
            {...(item.toggle && { toggle: item.toggle })}
            {...(item.trigger && { trigger: item.trigger })}
          >
            <MenuLink
              className={clsx(
                'grow cursor-pointer',
                accordionLinkGap,
                accordionLinkPl,
                linkPr,
                linkPy
              )}
            >
              {buildMenuBullet()}

              {item.collapse ? (
                <MenuTitle className="text-2sm font-normal text-gray-500">
                  <span className="hidden menu-item-show:!flex">{item.collapseTitle}</span>
                  <span className="flex menu-item-show:hidden">{item.expandTitle}</span>
                </MenuTitle>
              ) : (
                <MenuTitle className="text-2sm font-normal text-gray-700 menu-item-active:text-primary menu-item-here:text-gray-900 menu-item-show:text-gray-900 menu-link-hover:!text-primary">
                  {item.title}
                </MenuTitle>
              )}

              {buildMenuToggle()}
            </MenuLink>
            <MenuSub
              className={clsx(
                accordionGap,
                !item.collapse &&
                  `relative before:absolute ${accordionBorderLeft[level]} ${accordionPl[level]} before:top-0 before:bottom-0 before:border-l before:border-gray-200`
              )}
            >
              {buildMenuSub(item.children, level + 1, !item.collapse)}
            </MenuSub>
          </MenuItem>
        );
      } else {
        return (
          <MenuItem key={'item-' + index} path={item.path}>
            <MenuLink
              className={clsx(
                'items-center grow menu-item-active:bg-secondary-active menu-item-active:rounded-lg',
                accordionLinkGap,
                accordionLinkPl,
                linkPr,
                linkPy
              )}
            >
              {buildMenuBullet()}

              <MenuTitle className="text-2sm font-normal text-gray-700 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:!text-primary">
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
      <MenuToggle className="w-[20px] shrink-0 justify-end ml-1 mr-[-10px] text-gray-400">
        <KeenIcon icon="plus" className="text-sm menu-item-show:hidden" />
        <KeenIcon icon="minus" className="text-sm hidden menu-item-show:inline-flex" />
      </MenuToggle>
    );
  };

  const buildMenuBullet = () => {
    return (
      <MenuBullet className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:left-[0.5px] before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary"></MenuBullet>
    );
  };

  return <Menu className="flex flex-col grow">{buildMenu(MENU_SIDEBAR)}</Menu>;
};

export { SidebarMenu };
