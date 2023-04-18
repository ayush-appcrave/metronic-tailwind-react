import { PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import { PageContainer } from '@components/page-container';
import { useSettings } from '../../../providers/SettingsProvider';

const Toolbar = ({ children }: PropsWithChildren) => {
  const { settings } = useSettings();
  const { container } = settings;
  const theme = useTheme();

  return (
    <Box
      sx={{
        mb: theme.spacing(2)
      }}
    >
      <PageContainer>
        {children}
      </PageContainer>
    </Box>
  );
};

export { Toolbar };
