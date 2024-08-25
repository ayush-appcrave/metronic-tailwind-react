import { type MouseEvent } from 'react';

import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';

import { useDemo1Layout } from '../';
import { Menu, MenuItem, MenuLabel, MenuLink, MenuToggle } from '@/components';
import { DropdownUser } from '@/partials/dropdowns/user';

const HeaderTopbar = () => {
  const { setMobileSidebarOpen } = useDemo1Layout();

  return (
    <div className="flex items-stretch gap-2 lg:gap-3.5">
      <button className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500">
         <KeenIcon icon="magnifier"/>
      </button>

      <button className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500">
         <KeenIcon icon="messages"/>
      </button>

      <button className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500">
         <KeenIcon icon="element-11"/>
      </button>

      <button className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500">
         <KeenIcon icon="notification-on"/>
      </button>

      <Menu className="items-stretch">
        <MenuItem 
          toggle="dropdown"
          trigger="hover"
          dropdownProps={{
            placement: "bottom-end",
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [20, 0], // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuLink className="btn btn-icon rounded-full">
            <img className="size-9 rounded-full border-2 border-success shrink-0" src={toAbsoluteUrl('/media/avatars/300-2.png')} alt=""/>
          </MenuLink>
          {DropdownUser()}
        </MenuItem>
      </Menu>
    </div>
  );
};

export { HeaderTopbar };