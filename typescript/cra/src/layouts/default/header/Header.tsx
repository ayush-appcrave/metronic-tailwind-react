import { useState, useEffect } from 'react';
import { Box, Stack, Drawer, Container, alpha, useTheme } from '@mui/material';
import useResponsive from '../../../hooks/useResponsive';
import { useDefaultLayout } from '../';
import { useSettings } from "../../../providers/SettingsProvider";
import { DefaultLayoutStylesConfig } from '../';
import { HeaderMobileLogo } from './HeaderMobileLogo';

const Header = () => {
  const { settings } = useSettings();
  const { container } = settings;
  const {isHeaderSticky, sidebarWidth, isSidebarCollapse, setMobileSidebarOpen} = useDefaultLayout();
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useResponsive('down', 'lg');
  const styles = DefaultLayoutStylesConfig();
  const leftTransition = 'height ' + styles.SIDEBAR_TRANSITION_DURATION + ' ' + styles.SIDEBAR_TRANSITION_TIMING_FUNCTION;
  const heightTransition = 'left ' + styles.HEADER_TRANSITION_DURATION + ' ' + styles.HEADER_TRANSITION_TIMING_FUNCTION;

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "stretch",
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'transparent',
        transition: heightTransition,       
        
        [theme.breakpoints.up("lg")]: {
          transition: heightTransition + ', ' + leftTransition,
          left: sidebarWidth,
          height: styles.HEADER_HEIGHT + 'px',
          ...(isHeaderSticky && {
            height: styles.HEADER_STICKY_HEIGHT + 'px',
          })
        },
        
        [theme.breakpoints.down("lg")]: {
          height: styles.HEADER_HEIGHT_MOBILE + 'px',
          ...(isHeaderSticky && {
            height: styles.HEADER_STICKY_HEIGHT_MOBILE + 'px',
          })
        },

        ...(isHeaderSticky && {
          transition: heightTransition,          
          backgroundColor: alpha(theme.palette.background.default, 0.8),
          backdropFilter: styles.HEADER_STICKY_BACKDROP_FILTER
        }),
      }}
    >
      <Container 
        maxWidth={container === "fixed" ? 'lg' : false}
        sx={{
          display: "flex",
          alignItems: "center"
        }}
      >        
        {isMobile && (<HeaderMobileLogo/>)}
      </Container>
    </Box>
  );  
};

export { Header };
