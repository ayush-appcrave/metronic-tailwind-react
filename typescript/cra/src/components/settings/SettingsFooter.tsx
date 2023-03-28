import { Stack, Avatar, Button, Box } from '@mui/material';
import { useAuth } from '../../auth';
import { toAbsoluteUrl } from '../../utils/Assets';

const SettingsFooter = () => {

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

export { SettingsFooter };