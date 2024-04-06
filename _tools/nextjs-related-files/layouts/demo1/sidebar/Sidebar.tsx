import { Drawer } from '@mui/material';
import { useState } from 'react';

import { useResponsive } from '@/hooks';

import { useDemo1Layout } from '../';
import { SidebarContent, SidebarFooter, SidebarHeader } from './';

const Sidebar = () => {
  const desktopMode = useResponsive('up', 'lg');
  // const { mobileSidebarOpen, setMobileSidebarOpen } = useDemo1Layout();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  // const handleMobileSidebarClose = () => {
  //   setMobileSidebarOpen(false);
  // };

  const renderContent = () => {
    return (
      <div className="sidebar lg:fixed lg:z-20 lg:top-0 lg:bottom-0 lg:left-0 lg:translate-x-0 lg:flex flex-col items-stretch shrink-0 bg-white lg:border lg:border-r-gray-200">
        {desktopMode && <SidebarHeader setHeaderHeight={setHeaderHeight} />}
        <SidebarContent {...(desktopMode && { headerHeight })} footerHeight={footerHeight} />
        <SidebarFooter setFooterHeight={setFooterHeight} />
      </div>
    );
  };

  if (desktopMode) {
    return renderContent();
  } else {
    return (
      <Drawer
        PaperProps={{
          sx: {
            borderRightWidth: '0px',
            overflow: 'visible',
            backgroundColor: 'var(--tw-drawer-background-color)',
            boxShadow: 'var(--tw-drawer-box-shadow)'
          }
        }}
        ModalProps={{
          keepMounted: true
        }}
      >
        {renderContent()}
      </Drawer>
    );
  }
};

export { Sidebar };
