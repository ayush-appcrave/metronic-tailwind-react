import { type MouseEvent } from 'react';

import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';

import { useDemo1Layout } from '../';

const HeaderTopbar = () => {
  const { setMobileSidebarOpen } = useDemo1Layout();

  return (
    <div className="flex items-center gap-2 lg:gap-3.5">
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

      <div className="menu">
        <div className="menu-item">
          <div className="menu-toggle btn btn-icon rounded-full">
            <img className="size-9 rounded-full border-2 border-success shrink-0" src={toAbsoluteUrl('/media/app/mini-logo.svg')} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderTopbar };