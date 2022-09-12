import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Drawer } from '@mui/material';
import useResponsive from '../../../_core/hooks/useResponsive';
import { LAYOUT_DEFAULT } from '../../../config';
import { useLayout } from '../context';

export default function Main({childred}) {
  const isDesktop = useResponsive('up', 'lg');

  const {isSidebarCollapse, setSidebarCollapse} = useLayout();

  console.log('2');

  useEffect(() => {
    console.log('1111');
  }, [isSidebarCollapse]);

  return (
    <Box
      sx={{
        px: { lg: 2 },
				marginLeft: { lg: (isSidebarCollapse ? LAYOUT_DEFAULT.SIDEBAR_COLLAPSE_WIDTH : LAYOUT_DEFAULT.SIDEBAR_WIDTH) + 'px' }
      }}
    >
     {childred}
    </Box>
  );
}
