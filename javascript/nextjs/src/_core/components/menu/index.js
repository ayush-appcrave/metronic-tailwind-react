import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
import useResponsive from '../../../_core/hooks/useResponsive';
import { LAYOUT_DEFAULT } from '../../../config';
import Logo from './Logo';
import CollapseButton from './CollapseButton';
import { useLayout } from '../context';

Menu.propTypes = {
	navConfig: PropTypes.object,
	mode: PropTypes.string,
  onItemClick: PropTypes.func
};

export default function Menu({navConfig, mode}) {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'lg');

  const isMobile = useResponsive('down', 'lg');

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
        <></>
      )}

      {isMobile && (
        <></>
      )}
    </Box>
  );
}
