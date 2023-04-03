import { Theme, useTheme, alpha  } from '@mui/material';

const DefaultLayoutStylesConfig = ():any => {
  const theme = useTheme();

  return {
    CONTAINER_PX: 2,
    CONTAINER_PX_MOBILE: 2,

    HEADER_HEIGHT: 70,
    HEADER_HEIGHT_MOBILE: 60,
    HEADER_STICKY_OFFSET: 5,
    HEADER_STICKY_BACKDROP_FILTER: 'blur(6px)',

    SIDEBAR_WIDTH: 300,
    SIDEBAR_COLLAPSE_WIDTH: 85,
    SIDEBAR_WIDTH_MOBILE: 250,
    SIDEBAR_TRANSITION_DURATION: "0.3s",
    SIDEBAR_TRANSITION_TIMING_FUNCTION: "ease",
  }
};

export { DefaultLayoutStylesConfig };