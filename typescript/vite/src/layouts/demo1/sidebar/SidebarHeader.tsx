import React, { useEffect, useRef } from 'react';

import { getTotalHeight, toAbsoluteUrl } from '@/utils';

import { useDemo1Layout } from '../Demo1LayoutProvider';
import { SidebarToggle } from './SidebarToggle';

interface Props {
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

const SidebarHeader = ({ setHeaderHeight }: Props) => {
  const { sidebarCollapse, setSidebarCollapse } = useDemo1Layout();
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      setHeaderHeight(getTotalHeight(elementRef.current));
    }
  }, []);

  const handleSidebarCollapse = () => {
    if (sidebarCollapse) {
      setSidebarCollapse(false);
    } else {
      setSidebarCollapse(true);
    }
  };

  return (
    <div
      ref={elementRef}
      className="sidebar-header hidden lg:flex items-center relative justify-between px-6 shrink-0"
    >
      <a href="#">
        <img
          src={toAbsoluteUrl('/images/brand/default-logo.svg')}
          className="default-logo h-[22px] max-w-none"
        />
        <img
          src={toAbsoluteUrl('/images/brand/small-logo.svg')}
          className="small-logo h-[22px] max-w-none"
        />
      </a>

      <SidebarToggle onToggle={handleSidebarCollapse} />
    </div>
  );
};

export { SidebarHeader };
