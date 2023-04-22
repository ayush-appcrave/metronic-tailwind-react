import { type PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useLoading } from '../../../providers/LoadingProvider';
import { LoadingPage } from '../../../components/loading';

const Wrapper = ({ children }: PropsWithChildren) => {
  const { pageLoading } = useLoading();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1'
      }}>
      {pageLoading ? <LoadingPage /> : <Outlet />}
    </Box>
  );
};

export { Wrapper };
