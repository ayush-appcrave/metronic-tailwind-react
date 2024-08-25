import { Drawer } from '@mui/material';
import { useState } from 'react';

import { useResponsive } from '@/hooks';

import { useDemo1Layout } from '../';
import { SidebarContent, SidebarFooter, SidebarHeader } from './';
import clsx from 'clsx';

const Sidebar = () => {
  const desktopMode = useResponsive('up', 'lg');
  const { mobileSidebarOpen, setMobileSidebarOpen } = useDemo1Layout();
  const [ headerHeight, setHeaderHeight ] = useState(0);
  const { layout } = useDemo1Layout();

  const handleMobileSidebarClose = () => {
    setMobileSidebarOpen(false);
  };

  const renderContent = () => {
    return (
      <div className={clsx(
          'sidebar lg:fixed lg:z-20 lg:top-0 lg:bottom-0 lg:left-0 lg:translate-x-0 lg:flex flex-col items-stretch shrink-0 bg-light lg:border lg:border-r-gray-200',
          layout.options.sidebar.theme === 'dark' ? 'dark [&.dark]:bg-coal-600' : 'dark:bg-coal-600'
        )}>
        {desktopMode && <SidebarHeader setHeaderHeight={setHeaderHeight} />}
        <SidebarContent {...(desktopMode && { headerHeight })}/>
      </div>
    );
  };

  if (desktopMode) {
    return renderContent();
  } else {
    return (
      <Drawer
        open={mobileSidebarOpen}
        onClose={handleMobileSidebarClose}
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
