import { Box, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import useResponsive from '../../../hooks/useResponsive';
import { useLoaders } from '../../../providers/LoadersProvider';
import { DefaultLayoutStylesConfig, useDefaultLayout } from '../';
import { SidebarFooter } from './SidebarFooter';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNav } from './SidebarNav';

const Sidebar = () => {
  const { contentLoader } = useLoaders();
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'lg');
  const styles = DefaultLayoutStylesConfig();
  const widthTransition =
    'width ' + styles.SIDEBAR_TRANSITION_DURATION + ' ' + styles.SIDEBAR_TRANSITION_TIMING_FUNCTION;
  const {
    sidebarWidth,
    isSidebarExpand,
    isSidebarCollapse,
    setSidebarExpand,
    mobileSidebarOpen,
    setMobileSidebarOpen
  } = useDefaultLayout();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const handleSidebarMouseOver = () => {
    setSidebarExpand(true);
  };

  const handleSidebarMouseOut = () => {
    setSidebarExpand(false);
  };

  const handleMobileSidebarClose = () => {
    setMobileSidebarOpen(false);
  };

  useEffect(() => {
    console.log('content loading...');
  }, [contentLoader]);

  if (isDesktop) {
    return (
      <Box
        onMouseOver={handleSidebarMouseOver}
        onMouseOut={handleSidebarMouseOut}
        sx={{
          position: 'relative',
          backgroundColor: styles.SIDEBAR_BACKGROUND_COLOR,
          [theme.breakpoints.up('lg')]: {
            transition: widthTransition,
            width: sidebarWidth
          },
          [theme.breakpoints.down('lg')]: {
            width: styles.SIDEBAR_WIDTH_MOBILE
          }
        }}
      >
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width:
                !isSidebarExpand && isSidebarCollapse
                  ? styles.SIDEBAR_COLLAPSE_WIDTH
                  : styles.SIDEBAR_WIDTH,
              transition: widthTransition,
              borderRight: styles.SIDEBAR_BORDER,
              overflow: 'visible',
              backgroundColor: styles.SIDEBAR_BACKGROUND_COLOR
            }
          }}
        >
          <SidebarHeader setHeaderHeight={setHeaderHeight} />
          <SidebarNav headerHeight={headerHeight} footerHeight={footerHeight} />
          <SidebarFooter setFooterHeight={setFooterHeight} />
        </Drawer>
      </Box>
    );
  } else {
    return (
      <Drawer
        open={mobileSidebarOpen}
        onClose={handleMobileSidebarClose}
        PaperProps={{
          sx: {
            width: styles.SIDEBAR_WIDTH_MOBILE,
            transition: widthTransition,
            borderRightWidth: '0px',
            overflow: 'visible',
            backgroundColor: styles.SIDEBAR_BACKGROUND_COLOR
          }
        }}
      >
        <SidebarNav footerHeight={footerHeight} />
        <SidebarFooter setFooterHeight={setFooterHeight} />
      </Drawer>
    );
  }
};

export { Sidebar };
