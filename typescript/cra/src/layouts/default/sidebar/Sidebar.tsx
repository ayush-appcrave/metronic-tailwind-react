import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
import useResponsive from '../../../hooks/useResponsive';
import { useDefaultLayout } from '../';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNav } from './SidebarNav';
import { SidebarFooter } from './SidebarFooter';
import { DefaultLayoutStylesConfig } from '../';

const Sidebar = () => {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useResponsive('down', 'lg');
  const styles = DefaultLayoutStylesConfig();
  const widthTransition = 'width ' + styles.SIDEBAR_TRANSITION_DURATION + ' ' + styles.SIDEBAR_TRANSITION_TIMING_FUNCTION;
  const {sidebarWidth, isSidebarExpand, isSidebarCollapse, setSidebarCollapse, setSidebarExpand} = useDefaultLayout();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    console.log('mouse hover:' + isSidebarExpand);
  }, [isSidebarExpand]);

  const handleSidebarMouseOver = () => { 
    setSidebarExpand(true);
  };

  const handleSidebarMouseOut = () => {
    setSidebarExpand(false);
  };

  return (
    <Box
      onMouseOver={handleSidebarMouseOver}
      onMouseOut={handleSidebarMouseOut}
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up("lg")]: {
          transition: widthTransition,
          width: sidebarWidth
        },
        [theme.breakpoints.down("lg")]: {
          width: styles.SIDEBAR_WIDTH_MOBILE
        }        
      }}
    >
      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: !isSidebarExpand && isSidebarCollapse ? styles.SIDEBAR_COLLAPSE_WIDTH : styles.SIDEBAR_WIDTH,
              transition: widthTransition,
              borderRight: '1px solid #EDEFF0',
              overflow: 'visible',              
              bgcolor: 'background.paper'
            },
          }}
        >
          <SidebarHeader 
            setHeaderHeight={setHeaderHeight}
          />
          <SidebarNav 
            headerHeight={headerHeight} 
            footerHeight={footerHeight}
          />    
          <SidebarFooter 
            setFooterHeight={setFooterHeight}
          />   
        </Drawer>
      )}

      {isMobile && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: styles.SIDEBAR_WIDTH_MOBILE,
              transition: widthTransition,
              borderRightWidth: '0px',
              overflow: 'visible',              
              bgcolor: 'background.paper'
            },
          }}
        >   
          <SidebarNav footerHeight={footerHeight}/>       
          <SidebarFooter setFooterHeight={setFooterHeight}/>   
        </Drawer>
      )}
    </Box>
  );
}

export { Sidebar };