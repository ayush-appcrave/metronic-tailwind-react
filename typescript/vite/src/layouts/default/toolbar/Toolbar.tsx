import { PageContainer } from '@/components/page-container';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { type PropsWithChildren } from 'react';

const Toolbar = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mb: theme.spacing(2)
      }}
    >
      <PageContainer
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {children}
      </PageContainer>
    </Box>
  );
};

export { Toolbar };
