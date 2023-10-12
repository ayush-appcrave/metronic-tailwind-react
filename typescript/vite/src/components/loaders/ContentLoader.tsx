import { Box, CircularProgress, type SxProps, type Theme } from '@mui/material';
import { ReactNode } from 'react';

export interface ContentLoaderProps {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

const ContentLoader = ({ sx }: ContentLoaderProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        ...sx
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export { ContentLoader };
