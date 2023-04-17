import { PropsWithChildren, useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
import { useResponsive } from '../../../hooks/useResponsive';
import { useDefaultLayout, DefaultLayoutStylesConfig } from '../';
import { Header } from '../header/Header';
import { Wrapper } from '../wrapper/Wrapper';
import { Footer } from '../footer/Footer';

const Main = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  const { sidebarWidth, isSidebarCollapse, isSidebarExpand, setSidebarCollapse } =
    useDefaultLayout();

  const isDesktop = useResponsive('up', 'lg');

  const styles = DefaultLayoutStylesConfig();

  const marginTransition =
    'margin ' +
    styles.SIDEBAR_TRANSITION_DURATION +
    ' ' +
    styles.SIDEBAR_TRANSITION_TIMING_FUNCTION;

  return (
    <Box
      sx={{
        [theme.breakpoints.up('lg')]: {
          paddingTop: styles.HEADER_HEIGHT + 'px'
        },
        [theme.breakpoints.down('lg')]: {
          paddingTop: styles.HEADER_HEIGHT_MOBILE + 'px'
        },
        marginLeft: { lg: sidebarWidth + 'px' },
        transition: marginTransition,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1'
      }}
    >
      <Header />
      <Wrapper />
      <Footer />
    </Box>
  );
};

export { Main };
