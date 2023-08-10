import { styled } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';

export const ScrollbarStyled = styled(SimpleBar, {
  shouldForwardProp: (prop) => !['styles', 'sx'].includes(prop as string)
})<{ styles: any }>(({ theme, styles }) => {
  return {
    height: '100%',
    '& .simplebar-scrollbar': {
      '&:before': {
        transitionDelay: '0.5s',
        backgroundColor: styles.BG_COLOR,
        borderRadius: styles.BORDER_RADIUS
      },
      '&.simplebar-visible:before': {
        opacity: 1
      }
    },
    '& .simplebar-track.simplebar-vertical': {
      width: styles.TRACK_VERTICAL_WIDTH
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
      height: styles.TRACK_HORIZONTAL_WIDTH
    },
    '& .simplebar-mask': {
      zIndex: 'inherit'
    }
  };
});
