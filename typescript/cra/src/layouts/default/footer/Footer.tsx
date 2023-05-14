import { Box, useTheme } from '@mui/material';
import { PageContainer } from '@components/page-container';
import { useDefaultLayout, DefaultLayoutStylesConfig } from '../';

const Footer = () => {
  const { sidebarWidth } = useDefaultLayout();
  const theme = useTheme();
  const styles = DefaultLayoutStylesConfig();
  const leftTransition =
    'height ' +
    styles.SIDEBAR_TRANSITION_DURATION +
    ' ' +
    styles.SIDEBAR_TRANSITION_TIMING_FUNCTION;

  return (
    <Box
      component="footer"
      sx={{
        py: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
          transition: leftTransition,
          left: sidebarWidth
        }
      }}
    >
      <PageContainer
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Footer
      </PageContainer>
    </Box>
  );
};

export { Footer };
