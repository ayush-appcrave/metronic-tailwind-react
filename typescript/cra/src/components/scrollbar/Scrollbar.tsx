import { memo } from 'react';
import { Box } from '@mui/material';
import { ScrollbarStyled, ScrollbarStylesConfig, ScrollbarProps } from './';
import { isMobileDevice } from '../../utils';

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
    <ScrollbarStyled timeout={500} clickOnTrack={false} styles={styles} sx={sx} {...other}>
      {children}
    </ScrollbarStyled>
  );
};

export default memo(Scrollbar);
