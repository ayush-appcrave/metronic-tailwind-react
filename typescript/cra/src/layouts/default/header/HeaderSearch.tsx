import { Box, Dialog, DialogProps, IconButton, styled, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

import { KeenIcon, SearchInline } from '../../../components';
import { isMacDevice, isWindowsDevice } from '../../../utils/Devices';

const HeaderSearch = () => {
  const theme = useTheme();

  const CustomDialog = styled(Dialog)<DialogProps>(({ theme }) => {
    return {
      '&.MuiDialog-root': {
        '.MuiDialog-container': {
          alignItems: 'start'
        },
        '.MuiDialog-paper': {
          [theme.breakpoints.up('lg')]: {
            marginTop: '125px',
            maxWidth: '600px'
          }
        }
      }
    };
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log('close modal');
    setOpen(false);
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (open) {
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        setOpen(true);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <IconButton onClick={handleOpen}>
        <KeenIcon
          icon="magnifier"
          sx={{
            fontSize: 18,
            color: theme.palette.grey['600']
          }}
        />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 12,
          fontWeight: '600',
          color: theme.palette.grey['600'],
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.grey['200'],
          p: theme.spacing(0.85)
        }}
      >
        {isMacDevice() ? '⌘K' : 'ctrl K'}
      </Box>
      <CustomDialog fullWidth={true} open={open} onClose={handleClose}>
        <SearchInline dataSource="" handleClose={handleClose} />
      </CustomDialog>
    </Box>
  );
};

export { HeaderSearch };
