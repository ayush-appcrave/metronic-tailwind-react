import { Box } from '@mui/material';
import { memo } from 'react';

import { isMobileDevice } from '../../utils';
import { type ScrollbarProps, ScrollbarStyled, ScrollbarStylesConfig } from './';

const Scrollbar = ({ children, sx, styles, ...other }: ScrollbarProps) => {
  if (isMobileDevice()) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  styles = { ...ScrollbarStylesConfig(), ...styles };

  return (
    <ScrollbarStyled timeout={500} clickOnTrack={false} sx={sx} styles={styles} {...other}>
      {children}
    </ScrollbarStyled>
  );
};

export default memo(Scrollbar);
