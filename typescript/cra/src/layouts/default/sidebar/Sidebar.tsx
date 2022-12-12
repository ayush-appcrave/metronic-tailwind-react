import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
import useResponsive from '../../../hooks/useResponsive';
import { LAYOUT_DEFAULT } from '../../../config';
import { useDefaultLayout } from '../';
import { Header } from './Header';
import { Nav } from './Nav';
import { Footer } from './Footer';

const Sidebar = () => {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useResponsive('down', 'lg');
  const widthTransition = 'width ' + LAYOUT_DEFAULT.SIDEBAR_TRANSITION_DURATION + ' ' + LAYOUT_DEFAULT.SIDEBAR_TRANSITION_TIMING_FUNCTION;
  const {isSidebarCollapse, setSidebarCollapse} = useDefaultLayout();

  useEffect(() => {
    //console.log('sidebar toggle');
  }, [isSidebarCollapse]);

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up("lg")]: {
          transition: widthTransition,
          width: isSidebarCollapse ? LAYOUT_DEFAULT.SIDEBAR_COLLAPSE_WIDTH : LAYOUT_DEFAULT.SIDEBAR_WIDTH,
        },
        [theme.breakpoints.down("lg")]: {
          width: LAYOUT_DEFAULT.SIDEBAR_WIDTH_MOBILE
        }        
      }}
    >
      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: isSidebarCollapse ? LAYOUT_DEFAULT.SIDEBAR_COLLAPSE_WIDTH : LAYOUT_DEFAULT.SIDEBAR_WIDTH,
              transition: widthTransition,
              borderRight: '1px solid #EDEFF0',
              overflow: 'visible',              
              bgcolor: 'background.paper'
            },
          }}
        >
          <Header/>
          <Nav/>
          <Footer/>          
        </Drawer>
      )}

      {isMobile && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: LAYOUT_DEFAULT.SIDEBAR_WIDTH_MOBILE,
              transition: widthTransition,
              borderRightWidth: '0px',
              overflow: 'visible',              
              bgcolor: 'background.paper'
            },
          }}
        >   
          <Nav/>
          <Footer/>          
        </Drawer>
      )}
    </Box>
  );
}

export { Sidebar };