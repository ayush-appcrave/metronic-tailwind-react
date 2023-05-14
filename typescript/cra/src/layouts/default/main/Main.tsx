import { type PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useDefaultLayout, DefaultLayoutStylesConfig } from '../';
import { Header } from '../header/Header';
import { Wrapper } from '../wrapper/Wrapper';
import { Footer } from '../footer/Footer';

const Main = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  const { sidebarWidth } = useDefaultLayout();

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
