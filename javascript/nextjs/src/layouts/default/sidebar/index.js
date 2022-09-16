import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
import useResponsive from '../../../_core/hooks/useResponsive';
import Scrollbar from '../../../_core/components/Scrollbar';
import { LAYOUT_DEFAULT } from '../../../config';
import Logo from './Logo';
import CollapseButton from './CollapseButton';
import { useLayout } from '../context';

export default function Sidebar() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'lg');

  const isMobile = useResponsive('down', 'lg');

  const widthTransition = 'width ' + LAYOUT_DEFAULT.SIDEBAR_TRANSITION_DURATION + ' ' + LAYOUT_DEFAULT.SIDEBAR_TRANSITION_TIMING_FUNCTION;

  const {isSidebarCollapse, setSidebarCollapse} = useLayout();

  useEffect(() => {
    
  }, [isSidebarCollapse]);

  const handleSidebarCollapse = () => {
    if (isSidebarCollapse === true) {
      setSidebarCollapse(false);
    } else {
      setSidebarCollapse(true);
    }
  };

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
              borderRightWidth: '0px',
              overflow: 'visible',              
              bgcolor: 'background.paper'
            },
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{        
              flexShrink: 0,
              position: 'relative',
              px: 4,
              py: 4
            }}
          >
            <Logo/>

            <CollapseButton onToggle={handleSidebarCollapse}/>
          </Stack>

          <Box
            sx={{        
              px: 1.5
            }}
          >
            <Scrollbar variant="scroll-y" height="900px">
              <p>Te st T e s t T e st T e s t T e s t Te s t T e</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test100</p>
            </Scrollbar>
          </Box>
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
        </Drawer>
      )}
    </Box>
  );
}
