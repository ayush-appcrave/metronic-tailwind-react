import { type PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const Content = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        [theme.breakpoints.up('lg')]: {},
        [theme.breakpoints.down('lg')]: {}
      }}>
      {children}
    </Box>
  );
};

export { Content };
