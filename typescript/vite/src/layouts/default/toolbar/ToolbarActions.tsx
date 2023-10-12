import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { type PropsWithChildren } from 'react';

const ToolbarActions = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1)
      }}
    >
      {children}
    </Box>
  );
};

export { ToolbarActions };
