import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
import useResponsive from '../../../_core/hooks/useResponsive';
import { LAYOUT_DEFAULT } from '../../../config';
import { useLayout } from '../context';

export default function Content({childred}) {
  const {isSidebarCollapse} = useLayout();
  const theme = useTheme();

  useEffect(() => {
  }, [isSidebarCollapse]);

  return (
    <Box
      sx={{
        [theme.breakpoints.up("lg")]: {
          px: 3,
        },
        [theme.breakpoints.down("lg")]: {
          px: 2
        }
      }} 
    >
     {childred}
    </Box>
  );
}
