import { KeenIcon } from '@/components';
import {
  Menu,
  MenuConfigType,
  IMenuItemConfig,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuToggle,
  MenuArrow,
  MenuIcon,
  MenuBadge
} from '@/components/menu';
import clsx from 'clsx';
import { ReactNode } from 'react';

const MegaMenuSubDefault = (items: MenuConfigType) => {
  const buildItems = (items: MenuConfigType, level: number = 1): ReactNode => {
    return items.map((item, index) => {
      if (item.children) {
        return (
          <div key={`item-${index}`}>
            <MenuItem className="pt-1">
              <span className="text-gray-600 font-medium text-2sm p-2.5">
                { item.title }
              </span>
            </MenuItem>
            {buildItems(item.children, level + 1)}
          </div>
        );
      } else {
        return (
          <MenuItem key={`item-${index}`} path={item.path}>
            <MenuLink>
              {item.icon && <MenuIcon><KeenIcon icon={item.icon}/></MenuIcon>}

              <MenuTitle className={clsx('grow-0')}>
                {item.title}
              </MenuTitle>

              {item.soon && <MenuBadge><span className="badge badge-xs">Soon</span></MenuBadge>}

              {item.badge && <MenuBadge><span className="badge badge-primary badge-outline badge-xs">{item.badge}</span></MenuBadge>}
            </MenuLink>
          </MenuItem>
        );
      }
    });
  };

  return buildItems(items, 2);
};

export { MegaMenuSubDefault };
