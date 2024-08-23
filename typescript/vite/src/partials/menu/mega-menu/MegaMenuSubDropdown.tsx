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
  MenuBadge,
  MenuSeparator
} from '@/components/menu';
import clsx from 'clsx';
import { ReactNode } from 'react';

const MegaMenuSubDropdown = (items: MenuConfigType) => {
  const buildItems = (items: MenuConfigType, level: number = 1): ReactNode => {
    return items.map((item, index) => {
      if (item.separator) {
        return (<MenuSeparator key={`help-${level}-${index}`}/>);
      } else if (item.children) {
        return (
          <MenuItem 
            key={`help-${level}-${index}`}
            toggle="dropdown"
            trigger="hover"
            dropdownProps={{
              placement: "right-start"
            }}
          >
            <MenuLink className={clsx('grow-0')}>
              {item.icon && <MenuIcon><KeenIcon icon={item.icon}/></MenuIcon>}
              <MenuTitle className={clsx('')}>
                {item.title}
              </MenuTitle>            
              <MenuArrow>
                <KeenIcon icon="right" className="text-3xs"/>
              </MenuArrow>
            </MenuLink>

            <MenuSub className="menu-default w-[175px] lg:w-[220px]">
              {buildItems(item.children, level+1)}
            </MenuSub>
          </MenuItem>
        )
      } else {

      }
      return (
        <MenuItem key={`help-${level}-${index}`} path={item.path}>
          <MenuLink className={clsx('grow-0')}>
            {item.icon && <MenuIcon><KeenIcon icon={item.icon}/></MenuIcon>}
            <MenuTitle className={clsx('grow-0')}>
              {item.title}
            </MenuTitle>            
            
            {item.soon && <MenuBadge><span className="badge badge-xs">Soon</span></MenuBadge>}

            {item.badge && <MenuBadge><span className="badge badge-primary badge-outline badge-xs">{item.badge}</span></MenuBadge>}
          </MenuLink>
        </MenuItem>
      );
    });
  };

  return buildItems(items, 2);
};

export { MegaMenuSubDropdown };
