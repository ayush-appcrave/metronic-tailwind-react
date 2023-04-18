import { Theme, useTheme, alpha } from '@mui/material';

const ScrollbarStylesConfig = (): any => {
  const theme = useTheme();

  return {
    BG_COLOR: alpha(theme.palette.grey[400], 0.5),
    BORDER_RADIUS: '6px',
    TRACK_VERTICAL_WIDTH: '10px',
    TRACK_HORIZONTAL_WIDTH: '8px'
  };
};

export { ScrollbarStylesConfig };
