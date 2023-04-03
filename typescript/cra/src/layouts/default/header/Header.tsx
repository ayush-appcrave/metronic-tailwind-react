import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer, Container, alpha } from '@mui/material';
import useResponsive from '../../../hooks/useResponsive';
import { useDefaultLayout } from '../';
import { useSettings } from "../../../providers/SettingsProvider";
import { DefaultLayoutStylesConfig } from '../';

const Header = () => {
  const { settings } = useSettings();
  const { container } = settings;
  const {isHeaderSticky, sidebarWidth, isSidebarCollapse} = useDefaultLayout();
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useResponsive('down', 'lg');
  const styles = DefaultLayoutStylesConfig();

  console.log('container:' + container);

  useEffect(() => {
    console.log('header sticky:' + isHeaderSticky);
  }, [isHeaderSticky]);

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'transparent',
        ...(isHeaderSticky && {
          backgroundColor: alpha(theme.palette.background.default, 0.8),
          backdropFilter: styles.HEADER_STICKY_BACKDROP_FILTER
        }),
        [theme.breakpoints.up("lg")]: {
          left: sidebarWidth,
          height: styles.HEADER_HEIGHT + 'px'
        },
        [theme.breakpoints.down("lg")]: {
          height: styles.HEADER_HEIGHT_MOBILE + 'px'
        }
      }}
    >
      <Container 
        maxWidth={container === "fixed" ? 'lg' : false}
      >
        Header
      </Container>
    </Box>
  );  
};

export { Header };
