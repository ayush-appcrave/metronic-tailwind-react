import { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingPage = () => {
  useEffect(() => {
    console.log('compoent: page loading');
  }, []);

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
