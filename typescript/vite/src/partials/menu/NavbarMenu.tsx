import { KeenIcon } from '@/components';
import {
  Menu,
  MenuConfigType,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuToggle
} from '@/components/menu';

const NavbarMenu = ({ items }: { items: MenuConfigType }) => {
  const buildMenu = (items: MenuConfigType) => {
    return items.map((item, index) => {
      if (item.children) {
        return (
          <MenuItem
            key={index}
            toggle="dropdown"
            trigger="click"
            className="text-sm border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary"
            {...(
              item.dropdownProps && { 
                dropdownProps: item.dropdownProps 
              }
            )}
          >
            <MenuLink className="pb-4 px-2 gap-0.5 cursor-pointer">
              <MenuTitle className="font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
                {item.title}
              </MenuTitle>
              {buildMenuToggle()}
            </MenuLink>
            <MenuSub className="p-4 gap-0.5 lg:w-[175px] bg-light shadow-md rounded">
              {buildMenuSub(item.children, 1)}
            </MenuSub>
          </MenuItem>
        );
      } else {
        return (
          <MenuItem
            key={index}
            className="text-sm border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary"
          >
            <MenuLink path={item.path} className="pb-4 px-2">
              <MenuTitle className="font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-item-show:font-semibold menu-link-hover:text-primary">
                {item.title}
              </MenuTitle>
            </MenuLink>
          </MenuItem>
        );
      }
    });
  };

  const buildMenuSub = (items: MenuConfigType, level: number = 0) => {
    return items.map((item, index) => {
      if (item.children) {
        return (
          <MenuItem
            key={index}
            toggle="dropdown"
            trigger="hover"
            className="text-sm"
            {...(
              item.dropdownProps && 
              { 
                dropdownProps: item.dropdownProps 
              }
            )}
          >
            <MenuLink className="py-1.5 px-2 gap-0.5 cursor-pointer">
              <MenuTitle className="mr-1 font-normal text-gray-700 menu-item-active:text-primary menu-item-here:text-gray-900 menu-item-show:text-gray-900 menu-link-hover:!text-primary">
                {item.title}
              </MenuTitle>
              {buildMenuToggle()}
            </MenuLink>
            <MenuSub className="p-4 gap-0.5 w-[175px] bg-white shadow-md rounded">
              {buildMenuSub(item.children, level + 1)}
            </MenuSub>
          </MenuItem>
        );
      } else {
        return (
          <MenuItem className="text-sm" key={index}>
            <MenuLink path={item.path} className="py-1.5 px-2 gap-0.5 rounded-lg menu-item-active:bg-secondary-active">
              <MenuTitle className="font-normal text-gray-700 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:!text-primary">
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
      <MenuToggle className="justify-end mr-[-2px] w-[20px] text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
        <KeenIcon icon="down" className="text-sm [.menu-dropdown_&]:-rotate-90" />
      </MenuToggle>
    );
  };

  return <Menu highlight={true} className="menu gap-3 lg:-mb-px">{buildMenu(items)}</Menu>;
};

export { NavbarMenu };
