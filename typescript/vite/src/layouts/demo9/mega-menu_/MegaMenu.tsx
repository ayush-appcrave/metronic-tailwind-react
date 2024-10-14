/* eslint-disable react-hooks/exhaustive-deps */
import { Drawer } from '@/components';
import { useResponsive } from '@/hooks';
import { Menu, MenuItem, MenuLink, MenuTitle } from '@/components/menu';
import { Fragment, useEffect, useState } from 'react';
import { usePathname } from '@/providers';
import { useDemo9Layout } from '@/layouts/demo9';

const MegaMenu = () => {
  const desktopMode = useResponsive('up', 'lg');
  const { pathname, prevPathname } = usePathname();
  const { mobileMegaMenuOpen, setMobileMegaMenuOpen } = useDemo9Layout();

  const buildMenu = () => {
    const rootMenuLinkClass =
      'lg:py-3.5 border-b border-b-transparent menu-item-active:border-b-gray-800 text-gray-800 menu-item-hover:text-gray-900 menu-item-active:text-gray-900 menu-item-here:border-b-gray-800 menu-item-here:text-gray-900';
    const rootMenuTitleClass = 'font-medium text-gray-800 text-sm';

    return (
      <Fragment>
        <MenuItem>
          <MenuLink path="/" className={rootMenuLinkClass}>
            <MenuTitle className={rootMenuTitleClass}>Boards</MenuTitle>
          </MenuLink>
        </MenuItem>
        <MenuItem
          key="public-profiles"
          toggle={desktopMode ? 'dropdown' : 'accordion'}
          trigger={desktopMode ? 'hover' : 'click'}
          dropdownProps={{
            placement: 'bottom-start'
          }}
        >
          <MenuLink className={rootMenuLinkClass}>
            <MenuTitle className={rootMenuTitleClass}>Profiles</MenuTitle>
          </MenuLink>
        </MenuItem>
      </Fragment>
    );
  };

  const renderContent = () => {
    return (
      <Menu
        highlight={true}
        className="items-stretch flex-col lg:flex-row gap-5 lg:gap-7.5 grow lg:grow-0"
      >
        {buildMenu()}
      </Menu>
    );
  };

  const handleDrawerClose = () => {
    setMobileMegaMenuOpen(false);
  };

  useEffect(() => {
    // Hide drawer on route chnage after menu link click
    if (desktopMode === false && prevPathname !== pathname) {
      handleDrawerClose();
    }
  }, [desktopMode, pathname, prevPathname]);

  if (desktopMode) {
    return renderContent();
  } else {
    return (
      <Drawer
        open={mobileMegaMenuOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true
        }}
        PaperProps={{
          sx: {
            width: '250px',
            maxWidth: '90%' // Set the maximum width to 90%
          }
        }}
      >
        {renderContent()}
      </Drawer>
    );
  }
};

export { MegaMenu };
