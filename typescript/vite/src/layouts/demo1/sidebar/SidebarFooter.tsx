import React, { useEffect, useRef } from 'react';

import { getTotalHeight } from '@/utils';

interface Props {
  setFooterHeight: React.Dispatch<React.SetStateAction<number>>;
}

const SidebarFooter = ({ setFooterHeight }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      setFooterHeight(getTotalHeight(elementRef.current));
    }
  }, []);

  return (
    <div ref={elementRef} className="sidebar-footer px-6 py-4 shrink-0">
      Footer
    </div>
  );
};

export { SidebarFooter };
