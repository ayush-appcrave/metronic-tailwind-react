import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { toAbsoluteUrl } from '@/utils';
import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components';
import {
  Menu,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuSeparator,
  MenuToggle,
  MenuArrow,
  MenuIcon,
  MenuClickEventType,
  MenuLabel
} from '@/components/menu';
import { Tab, TabPanel, Tabs, TabsList  } from '@/components/tabs';
import { DropdownCrud2 } from '@/partials/dropdowns/general';
import { DropdownNotificationAll } from './DropdownNotificationAll';
import { DropdownNotificationInbox } from './DropdownNotificationInbox';
import { DropdownNotificationTeam } from './DropdownNotificationTeam';
import { DropdownNotificationFollowing } from './DropdownNotificationFollowing';

interface IDropdownNotificationProps {
  menuTtemRef: any;
};

const DropdownNotification = ({menuTtemRef}: IDropdownNotificationProps) => {    
  const handleClose = () => {
    if (menuTtemRef.current) {
      menuTtemRef.current.closeMenu(); // Call the closeMenu method to hide the submenu
    }
  };
  
  const buildHeader = () => {
    return (
      <div className="flex items-center justify-between gap-2.5 text-sm text-gray-900 font-semibold px-5 py-2.5 border-b border-b-gray-200">
        Notifications

        <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={handleClose}>
          <KeenIcon icon="cross"/>
        </button>
      </div>
    )
  }

  const buildTabs = () => {
    return (
      <Tabs defaultValue={1} className="">
        <TabsList className="justify-between px-5 mb-2">
          <div className="flex items-center gap-5">
            <Tab value={1}>All</Tab>
            <Tab value={2} className="relative">
              Inbox
              <span className="badge badge-dot badge-success size-[5px] absolute top-2 right-0 transform translate-y-1/2 translate-x-full"></span>
            </Tab>
            <Tab value={3}>Team</Tab>
            <Tab value={4}>Following</Tab>
          </div>
          <Menu className="items-stretch">
            <MenuItem 
              toggle="dropdown"
              trigger="click"
              dropdownProps={{
                placement: "bottom-end",
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 0] // [skid, distance]
                    }
                  }
                ]
              }}
            >
            <MenuLabel className="btn btn-sm btn-icon btn-light btn-clear">
              <KeenIcon icon="setting-2"/>
            </MenuLabel>
            {DropdownCrud2()}
        </MenuItem>
      </Menu>
        </TabsList>
        <TabPanel value={1}>
          <DropdownNotificationAll/>
        </TabPanel>
        <TabPanel value={2}>
          <DropdownNotificationInbox/>
        </TabPanel>
        <TabPanel value={3}>
          <DropdownNotificationTeam/>
        </TabPanel>
        <TabPanel value={4}>
          <DropdownNotificationFollowing/>
        </TabPanel>
      </Tabs>
    )
  }

  return (
    <MenuSub rootClassName="w-full max-w-[460px]" className="light:border-gray-300">
      {buildHeader()}   
      {buildTabs()}   
    </MenuSub>
  );
};

export { DropdownNotification };
