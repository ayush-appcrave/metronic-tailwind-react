import { Stack } from '@mui/material';
import { useDefaultLayout } from '../';

const Footer = () => {
  const {isSidebarCollapse} = useDefaultLayout();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{        
        flexShrink: 0,
        position: 'relative',
        px: 4,
        py: 4
      }}
    >
      Footer
    </Stack>
  );
}

export { Footer };