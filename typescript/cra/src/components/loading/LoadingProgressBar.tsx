import { Box, LinearProgress } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

const LoadingProgressBar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: zIndex.modal + 1,
        top: 0,
        left: 0,
        right: 0
      }}>
      <LinearProgress color="primary" />
    </Box>
  );
};

export { LoadingProgressBar };
