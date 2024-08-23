import { Drawer } from '@mui/material';
import { useResponsive } from '@/hooks';
import { KeenIcon } from '@/components';
import { MENU_MEGA } from '@/config/menu.config';
import { MegaMenuContent } from './';
import {
  Menu,
  MenuConfigType,
  IMenuItemConfig,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuToggle,
  MenuArrow
} from '@/components/menu';
import { useState } from 'react';

const MegaMenu = () => {
  const desktopMode = useResponsive('up', 'lg');
  const [mobileMegaMenuOpen, setMobileMegaMenuOpen] = useState(false);

  const handleDrawerClose = () => {
    setMobileMegaMenuOpen(false);
  };

  const renderContent = () => {
    return (
      <Menu className="menu flex-col lg:flex-row gap-5 lg:gap-7.5">
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
