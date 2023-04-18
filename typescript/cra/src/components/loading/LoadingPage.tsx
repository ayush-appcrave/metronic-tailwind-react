import { Box, CircularProgress, useTheme } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

const LoadingPage = () => {
  const theme = useTheme();

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
        alignSelf: 'center'
      }}>
      <CircularProgress color="primary" />
    </Box>
  );
};

export { LoadingPage };
