import { Drawer } from '@mui/material';
import { useResponsive } from '@/hooks';
import { MENU_MEGA } from '@/config/menu.config';
import { MegaMenuContent } from './';
import { Menu } from '@/components/menu';
import { useEffect, useState } from 'react';

const MegaMenu = () => {
  const desktopMode = useResponsive('up', 'lg');
  const [disabled, setDisabled] = useState(true); // Initially set disabled to true
  const [mobileMegaMenuOpen, setMobileMegaMenuOpen] = useState(false);

  const handleDrawerClose = () => {
    setMobileMegaMenuOpen(false);
  };

  // Change disabled state to false after a certain time (e.g., 5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false);
    }, 1000); // 1000 milliseconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);  

  const renderContent = () => {
    return (
      <Menu disabled={disabled} highlight={true} className="flex-col lg:flex-row gap-5 lg:gap-7.5">
        {MegaMenuContent(MENU_MEGA)}
      </Menu>
    );
  };

  if (desktopMode) {
    return renderContent();
  } else {
    return (
      <Drawer
        open={mobileMegaMenuOpen}
        onClose={handleDrawerClose}
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

export { MegaMenu };
