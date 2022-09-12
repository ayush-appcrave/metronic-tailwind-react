import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
import useResponsive from '../../../_core/hooks/useResponsive';
import { LAYOUT_DEFAULT } from '../../../config';
import Logo from './Logo';
import ToggleButton from './ToggleButton';
import { useLayout } from '../context';

const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export default function Sidebar() {
  const isDesktop = useResponsive('up', 'lg');

  const {isSidebarCollapse, setSidebarCollapse} = useLayout();

  console.log('1');

  useEffect(() => {
    console.log('wowowow');
  }, [isSidebarCollapse]);

  const handleSidebarToggle = () => {
    if (isSidebarCollapse === true) {
      setSidebarCollapse(false);
      console.log('toggle off');
    } else {
      setSidebarCollapse(true);
      console.log('toggle on');
    }
  };

  const renderContent = (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        pt: 3,
        pb: 2,
        px: 2.5,
        flexShrink: 0,
        position: 'relative'
      }}
    >
      <Logo isSidebarCollapse={isSidebarCollapse}/>

      <ToggleButton onToggle={handleSidebarToggle} isSidebarCollapse={isSidebarCollapse}/>
    </Stack>
  );

  return (
    <Root
      sx={{
        width: {
          lg: isSidebarCollapse ? LAYOUT_DEFAULT.SIDEBAR_COLLAPSE_WIDTH : LAYOUT_DEFAULT.SIDEBAR_WIDTH,
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
              borderRightWidth: '0px',
              overflow: 'visible',
              bgcolor: 'background.paper'
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Root>
  );
}
