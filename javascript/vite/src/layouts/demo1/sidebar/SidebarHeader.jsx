import React, { useEffect, useRef } from 'react';
import { getTotalHeight, toAbsoluteUrl } from '@/utils';
import { SidebarToggle } from './';
const SidebarHeader = ({
  setHeaderHeight
}) => {
  const elementRef = useRef(null);
  useEffect(() => {
    if (elementRef.current) {
      setHeaderHeight(getTotalHeight(elementRef.current));
    }
  }, []);
  return <div ref={elementRef} className="sidebar-header hidden lg:flex items-center relative justify-between px-6 shrink-0">
      <a href="#">
        <img src={toAbsoluteUrl('/images/brand/default-logo.svg')} className="default-logo h-[22px] max-w-none" />
        <img src={toAbsoluteUrl('/images/brand/small-logo.svg')} className="small-logo h-[22px] max-w-none" />
      </a>

      <SidebarToggle />
    </div>;
};
export { SidebarHeader };