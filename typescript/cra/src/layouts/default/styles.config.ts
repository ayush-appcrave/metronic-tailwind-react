import { Theme, useTheme, alpha  } from '@mui/material';

const DefaultLayoutStylesConfig = ():any => {
  const theme = useTheme();

  return {
    SIDEBAR_WIDTH: 300,
    SIDEBAR_COLLAPSE_WIDTH: 85,
    SIDEBAR_WIDTH_MOBILE: 250,
    SIDEBAR_TRANSITION_DURATION: "0.3s",
    SIDEBAR_TRANSITION_TIMING_FUNCTION: "ease",
  }
};

export { DefaultLayoutStylesConfig };