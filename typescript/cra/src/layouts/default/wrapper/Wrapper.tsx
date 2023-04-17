import { PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import { useSettings } from '../../../providers/SettingsProvider';
import { Toolbar } from '../toolbar/Toolbar';
import { Content } from '../content/Content';

const Wrapper = ({ children }: PropsWithChildren) => {
  const { settings } = useSettings();
  const { container } = settings;
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: '1'
      }}
    >
      <Toolbar />
      <Content />
    </Box>
  );
};

export { Wrapper };
