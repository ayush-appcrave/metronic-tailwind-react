import React, { useEffect, useRef } from 'react';
import { getTotalHeight } from '@/utils';
const SidebarFooter = ({
  setFooterHeight
}) => {
  const elementRef = useRef(null);
  useEffect(() => {
    if (elementRef.current) {
      setFooterHeight(getTotalHeight(elementRef.current));
    }
  }, []);
  return <div ref={elementRef} className="sidebar-footer [.sidebar-collapse_.sidebar:not(:hover)_&]:text-danger px-6 py-4 shrink-0">
      Footer
    </div>;
};
export { SidebarFooter };