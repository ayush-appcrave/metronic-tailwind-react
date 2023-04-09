import { useState, useEffect } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { KeenIcon } from "../../../components";
import { useResponsive } from '../../../hooks/useResponsive';
import { useDefaultLayout } from '..';
import { useSettings } from "../../../providers/SettingsProvider";
import { DefaultLayoutStylesConfig } from '..';

const HeaderMobileLogo = () => {
  const { setMobileSidebarOpen } = useDefaultLayout();
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useResponsive('down', 'lg');

  const handleSidebarOpenOnMobile = (event: React.MouseEvent<HTMLElement>) => { 
    setMobileSidebarOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <IconButton
        onClick={handleSidebarOpenOnMobile}
        sx={{
          mr: 0.25,
          ml: -1
        }}
      >
        <KeenIcon 
          icon="burger-menu-6"
          sx={{
            fontSize: "20px"
          }}
        />
      </IconButton>

      <a href="/" style={{lineHeight: '0px'}}>      
        <img 
          src="/media/logos/default.svg" 
          alt="logo" 
          style={{ 
            height: '30px', 
            maxWidth: 'none', 
            cursor: 'pointer'
          }}
        />
      </a>
    </Box>
  );  
};

export { HeaderMobileLogo };
