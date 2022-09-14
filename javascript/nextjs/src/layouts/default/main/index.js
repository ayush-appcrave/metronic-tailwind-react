import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Drawer } from '@mui/material';
import useResponsive from '../../../_core/hooks/useResponsive';
import { LAYOUT_DEFAULT } from '../../../config';
import Content from '../Content';
import { useLayout } from '../context';

export default function Main({childred}) {
  const {isSidebarCollapse, setSidebarCollapse} = useLayout();

  const isDesktop = useResponsive('up', 'lg');

  const marginTransition = 'margin ' + LAYOUT_DEFAULT.SIDEBAR_TRANSITION_DURATION + ' ' + LAYOUT_DEFAULT.SIDEBAR_TRANSITION_TIMING_FUNCTION;  

  return (
    <Box
      sx={{
				marginLeft: { lg: (isSidebarCollapse ? LAYOUT_DEFAULT.SIDEBAR_COLLAPSE_WIDTH : LAYOUT_DEFAULT.SIDEBAR_WIDTH) + 'px' },
        transition: marginTransition
      }}
    >      
     <Content childred={childred}/>
    </Box>
  );
}
