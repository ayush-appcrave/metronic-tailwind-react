import { type PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { PageContainer } from '@components/page-container';

const Toolbar = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mb: theme.spacing(2)
      }}>
      <PageContainer>{children}</PageContainer>
    </Box>
  );
};

export { Toolbar };
