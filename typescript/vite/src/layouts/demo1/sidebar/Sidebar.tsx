import { useState } from 'react';

import { SidebarContent, SidebarFooter, SidebarHeader } from './';

const Sidebar = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <div className="sidebar fixed z-20 top-0 bottom-0 lg:left-0 lg:translate-x-0 lg:flex flex-col items-stretch shrink-0 bg-white border border-r-gray-200">
      <SidebarHeader setHeaderHeight={setHeaderHeight} />
      <SidebarContent headerHeight={headerHeight} footerHeight={footerHeight} />
      <SidebarFooter setFooterHeight={setFooterHeight} />
    </div>
  );
};

export { Sidebar };
