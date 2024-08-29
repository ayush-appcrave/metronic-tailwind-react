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
  MenuClickEventType
} from '@/components/menu';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { toAbsoluteUrl } from '@/utils';
import { Link } from 'react-router-dom';

const DropdownNotification = (itemRef: any) => {    
  const handleClose = () => {
    if (itemRef.current) {
      itemRef.current.closeMenu(); // Call the closeMenu method to hide the submenu
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

  return (
    <MenuSub 
      rootClassName="w-full max-w-[460px]"
      className="light:border-gray-300"
    >
      {buildHeader()}      
    </MenuSub>
  );
};

export { DropdownNotification };
