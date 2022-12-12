import { memo } from 'react';
import { Box } from '@mui/material';
import { ScrollbarStyledRoot, ScrollbarStyled } from './Scrollbar.styles';
import { ScrollbarProps } from './types';

function Scrollbar({ children, sx, ...other }: ScrollbarProps) {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
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
