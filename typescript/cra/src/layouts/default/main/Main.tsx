import { PropsWithChildren, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Drawer } from '@mui/material';
import { useResponsive } from '../../../hooks/useResponsive';
import { Content } from "../content/Content";
import { useDefaultLayout, DefaultLayoutStylesConfig } from '../';

const Main = ({ children }: PropsWithChildren) => {
  const {isSidebarCollapse, isSidebarExpand, setSidebarCollapse} = useDefaultLayout();

  const isDesktop = useResponsive('up', 'lg');

  const styles = DefaultLayoutStylesConfig();

  const marginTransition = 'margin ' + styles.SIDEBAR_TRANSITION_DURATION + ' ' + styles.SIDEBAR_TRANSITION_TIMING_FUNCTION;  

  return (
    <Box
      sx={{
				marginLeft: { lg: (isSidebarCollapse ? styles.SIDEBAR_COLLAPSE_WIDTH : styles.SIDEBAR_WIDTH) + 'px' },
        transition: marginTransition
      }}
    >      
     <Content/>
    </Box>
  );
}

export { Main };