/* eslint-disable react/jsx-key */
import clsx from 'clsx';

import { KeenIcon } from '@/components/keenicons';
import {
  IMenuHeadingProps,
  IMenuItemConfig,
  Menu,
  MenuArrow,
  MenuBadge,
  MenuBullet,
  MenuConfigType,
  MenuHeading,
  MenuIcon,
  MenuItem,
  MenuLabel,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuToggle
} from '@/components/menu';
import { useMenu } from '@/providers/MenuProvider';

const SidebarMenu = () => {
  const linkPl = 'pl-[10px]';
  const linkPr = 'pr-[10px]';
  const linkPy = 'py-[6px]';
  const itemsGap = 'gap-0.5';
  const subLinkPy = 'py-[8px]';
  const rightOffset = 'mr-[-10px]';
  const iconWidth = 'w-[20px]';
  const iconSize = 'text-lg';
  const accordionLinkPl = 'pl-[10px]';
  const accordionLinkGap = ['gap-[10px]', 'gap-[14px]', 'gap-[5px]', 'gap-[5px]', 'gap-[5px]'];
  const accordionPl = ['pl-[10px]', 'pl-[22px]', 'pl-[22px]', 'pl-[22px]', 'pl-[22px]'];
  const accordionBorderLeft = [
    'before:left-[20px]',
    'before:left-[32px]',
    'before:left-[32px]',
    'before:left-[32px]'
  ];

  const buildMenu = (items: MenuConfigType) => {
    return items.map((item, index) => {
      if (item.heading) {
        return buildMenuHeading(item, index);
      } else if (item.soon) {
        return buildMenuItemRootDisabled(item, index);
      } else {
        return buildMenuItemRoot(item, index);
      }
    });
  };

  const buildMenuItemRoot = (item: IMenuItemConfig, index: number) => {
    if (item.children) {
      return (
        <MenuItem
          key={'item-' + index}
          {...(item.toggle && { toggle: item.toggle })}
          {...(item.trigger && { trigger: item.trigger })}
        >
          <MenuLink
            className={clsx('flex items-center grow cursor-pointer border border-transparent', accordionLinkGap[0], linkPl, linkPr, linkPy)}
          >
            <MenuIcon className={clsx('items-start text-gray-500 dark:text-gray-400', iconWidth)}>
              {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
            </MenuIcon>
            <MenuTitle className="text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
              {item.title}
            </MenuTitle>
            {buildMenuArrow()}
          </MenuLink>
          <MenuSub
            className={clsx(
              'relative before:absolute before:top-0 before:bottom-0 before:border-l before:border-gray-200',
              '[&_.MuiCollapse-wrapperInner]:flex [&_.MuiCollapse-wrapperInner]:flex-col [&_.MuiCollapse-wrapperInner]:' + itemsGap,
              itemsGap,
              accordionBorderLeft[0],
              accordionPl[0]
            )}
          >
            {buildMenuItemChildren(item.children, index, 1)}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={'item-' + index} path={item.path}>
          <MenuLink
            className={clsx(
              'border border-transparent menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg',
              accordionLinkGap[0],
              linkPy,
              linkPl,
              linkPr
            )}
          >
            <MenuIcon
              className={clsx(
                'items-start text-gray-500 dark:text-gray-400 menu-item-active:text-primary menu-link-hover:!text-primary',
                iconWidth
              )}
            >
              {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
            </MenuIcon>
            <MenuTitle className="text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
              {item.title}
            </MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  }

  const buildMenuItemRootDisabled = (item: IMenuItemConfig, index: number) => {
    return (
      <MenuItem key={'item-' + index} path={item.path}>
        <MenuLabel
          className={clsx(
            'border border-transparent',
            accordionLinkGap[0],
            linkPy,
            linkPl,
            linkPr
          )}
        >
          <MenuIcon
            className={clsx(
              'items-start text-gray-500 dark:text-gray-400',
              iconWidth
            )}
          >
            {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
          </MenuIcon>
          <MenuTitle className="text-sm font-semibold text-gray-700">
            {item.title}
          </MenuTitle>

          {item.soon && buildMenuSoon()}
        </MenuLabel>
      </MenuItem>
    );
  }

  const buildMenuItemChildren = (items: MenuConfigType, index: number, level: number = 0, indent: boolean = true) => {
    // eslint-disable-next-line no-unreachable-loop
    return items.map((item, index) => {
      if (item.soon) {
        return buildMenuItemChildDisabled(item, index, level, indent)
      } else {
        return buildMenuItemChild(item, index, level, indent)
      }
    });
  }

  const buildMenuItemChild = (item: IMenuItemConfig, index: number, level: number = 0, indent: boolean = true) => {
    if (item.children) {
      return (
        <MenuItem
          key={'item-' + index}
          {...(item.toggle && { toggle: item.toggle })}
          {...(item.trigger && { trigger: item.trigger })}
          className={clsx(item.collapse && 'flex-col-reverse')}
        >
          <MenuLink
            className={clsx('border border-transparent grow cursor-pointer', accordionLinkGap[level], accordionLinkPl, linkPr, subLinkPy)}
          >
            {buildMenuBullet()}

            {
              item.collapse ? (
                <MenuTitle className="text-2sm font-medium text-gray-500 dark:text-gray-400">
                  <span className="hidden menu-item-show:!flex">{item.collapseTitle}</span>
                  <span className="flex menu-item-show:hidden">{item.expandTitle}</span>
                </MenuTitle>
              ) : (
                <MenuTitle className="text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                  {item.title}
                </MenuTitle>
              )
            }

            {buildMenuArrow()}
          </MenuLink>
          <MenuSub
            className={clsx(
              !item.collapse && 'before:top-0 before:bottom-0 before:border-l before:border-gray-200',
              itemsGap,
              !item.collapse && accordionBorderLeft[level],
              !item.collapse && accordionPl[level],
              !item.collapse && 'relative before:absolute'
            )}
          >
            {buildMenuItemChildren(item.children, index, item.collapse ? level : (level+1), !item.collapse)}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={'item-' + index} path={item.path}>
          <MenuLink
            className={clsx(
              'border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg',
              accordionLinkGap[level],
              accordionLinkPl,
              linkPr,
              subLinkPy
            )}
          >
            {buildMenuBullet()}
            <MenuTitle className="text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              {item.title}
            </MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  }

  const buildMenuItemChildDisabled = (item: IMenuItemConfig, index: number, level: number = 0, indent: boolean = true) => {
    return (
      <MenuItem key={'item-' + index} path={item.path}>
        <MenuLabel
          className={clsx(
            'border border-transparent items-center grow',
            accordionLinkGap[level],
            accordionLinkPl,
            linkPr,
            subLinkPy
          )}
        >
          <MenuIcon
            className={clsx(
              'items-start text-gray-500 dark:text-gray-400',
              iconWidth
            )}
          >
            {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
          </MenuIcon>
          <MenuTitle className="text-2sm font-medium text-gray-700">
            {item.title}
          </MenuTitle>

          {item.soon && buildMenuSoon()}
        </MenuLabel>
      </MenuItem>
    );
  }

  const buildMenuHeading = (item: IMenuItemConfig, index: number) => {
    return (
      <MenuItem key={'item-' + index} className="pt-2.25 pb-px">
        <MenuHeading
          className={clsx('uppercase text-2sm font-semibold text-gray-500', linkPl, linkPr)}
        >
          {item.heading}
        </MenuHeading>
      </MenuItem>
    )
  }

  const buildMenuArrow = () => {
    return (
      <MenuArrow className={clsx('text-gray-400 w-[20px] shrink-0 justify-end ml-1', rightOffset)}>
        <KeenIcon icon="plus" className="text-2xs menu-item-show:hidden" />
        <KeenIcon icon="minus" className="text-2xs hidden menu-item-show:inline-flex" />
      </MenuArrow>
    );
  };

  const buildMenuBullet = () => {
    return (
      <MenuBullet className="flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
      </MenuBullet>
    );
  };

  const buildMenuSoon = () => {
    return (
      <MenuBadge className={rightOffset}>
        <span className="badge badge-xs">Soon</span>
      </MenuBadge>
    );
  };

  const { getMenuConfig } = useMenu();
  const menuConfig = getMenuConfig('primary');

  return <Menu className="flex flex-col grow gap-0.5">{menuConfig && buildMenu(menuConfig)}</Menu>;
};

export { SidebarMenu };
