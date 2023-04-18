import { type ReactElement } from 'react';
import { Box } from '@mui/material';

const HeaderNotificationsMenu = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
      Notifications
    </Box>
  );
};

export { HeaderNotificationsMenu };
