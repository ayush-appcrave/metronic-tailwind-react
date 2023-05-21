import { Box } from '@mui/material';
import { type ReactElement } from 'react';

const HeaderNotificationsMenu = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Notifications
    </Box>
  );
};

export { HeaderNotificationsMenu };
