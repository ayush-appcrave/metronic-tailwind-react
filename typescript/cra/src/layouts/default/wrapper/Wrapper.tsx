import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Wrapper = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1'
      }}>
      <Outlet />
    </Box>
  );
};

export { Wrapper };
