import { Theme, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

const ScrollbarStylesConfig = ():any => {
  const theme = useTheme();

  return {
    BG_COLOR: alpha(theme.palette.grey[400], 0.5),
	BORDER_RADIUS: '6px',
	TRACK_VERTICAL_WIDTH: '10px',
	TRACK_HORIZONTAL_WIDTH: '8px'
  }
};

export { ScrollbarStylesConfig };