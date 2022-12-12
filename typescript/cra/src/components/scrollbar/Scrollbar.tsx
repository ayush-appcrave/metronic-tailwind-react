import { memo } from 'react';
import { Box } from '@mui/material';
import { ScrollbarStyledRoot, ScrollbarStyled } from './Scrollbar.styles';
import { ScrollbarProps } from './types';
import { isMobileDevice } from '../../utils';

const Scrollbar = ({ children, sx, ...other }: ScrollbarProps) => {
  if (isMobileDevice()) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <ScrollbarStyledRoot>
      <ScrollbarStyled timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </ScrollbarStyled>
    </ScrollbarStyledRoot>
  );
}

export default memo(Scrollbar);
