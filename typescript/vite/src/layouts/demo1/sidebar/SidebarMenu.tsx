import { KeenIcon } from '@/components/keenicons';
import {
  Menu,
  MenuHeading,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuToggle
} from '@/components/menu';

import { useViewport } from '../../../hooks';
import { useDemo1Layout } from '../Demo1LayoutProvider';

interface Props {
  headerHeight?: number;
  footerHeight?: number;
}

const SidebarContent = ({ headerHeight = 0, footerHeight = 0 }: Props) => {
  const { sidebarExpand, sidebarCollapse } = useDemo1Layout();
  const [viewportHeight] = useViewport();
  const scrollableHeight: number = viewportHeight - headerHeight - footerHeight;

  console.log('header:' + headerHeight);
  console.log('footer:' + footerHeight);
  console.log('content:' + scrollableHeight);

  return (
    <div className="sidebar-content flex grow shrink-0 pt-5 lg:pt-0 pr-2">
      <div
        className="grow shrink-0 flex pl-5 pr-3 scrollable-hover-y"
        style={{ height: scrollableHeight }}
      >
        <Menu className="flex flex-col grow" collapse={sidebarCollapse} expand={sidebarExpand}>
          <MenuItem path="#">
            <MenuLink className="py-1.5 px-[10px] gap-1 menu-item-active:bg-secondary-active menu-item-active:rounded-lg">
              <MenuIcon className="w-[23px] text-gray-400 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
                <KeenIcon icon="abstract-14" className="text-2xl" />
              </MenuIcon>
            </MenuLink>
          </MenuItem>
          <MenuItem className="pt-3">
            <MenuHeading className="uppercase px-[10px] text-[13px] font-medium text-gray-500">
              User
            </MenuHeading>
          </MenuItem>
          <MenuItem toggle="accordion" trigger="click">
            <MenuLink className="py-1.5 px-[10px] gap-1 menu-item-active:bg-secondary-active menu-item-active:rounded-lg">
              <MenuIcon className="w-[23px] text-gray-400 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
                <KeenIcon icon="abstract-14" className="text-2xl"/>
              </MenuIcon>
              <MenuTitle className="text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-item-here:text-gray-900 menu-item-show:text-gray-900 menu-link-hover:!text-primary">
                Title
              </MenuTitle>
              <MenuToggle className="justify-end mr-[-10px] w-[20px] text-gray-400">
                <KeenIcon icon="plus" className="text-sm menu-item-show:hidden" />
                <KeenIcon icon="minus" className="text-sm hidden menu-item-show:inline-flex" />
              </MenuToggle>
            </MenuLink>
            <MenuSub className="pl-[27px] gap-0.5 relative before:absolute before:left-[18px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
              <MenuItem>
                <MenuLink className="py-1.5 px-[10px] gap-1 menu-item-active:bg-secondary-active menu-item-active:rounded-lg">
                  <MenuIcon className="w-[23px] text-gray-400 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
                    <KeenIcon icon="abstract-14" className="text-2xl"/>
                  </MenuIcon>
                  <MenuTitle className="text-[13px] font-normal text-gray-700 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:!text-primary">
                    Title 2
                  </MenuTitle>
                </MenuLink>
              </MenuItem>
            </MenuSub>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export { SidebarContent };
