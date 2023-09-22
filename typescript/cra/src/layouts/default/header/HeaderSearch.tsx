import { Box, Dialog, DialogProps, IconButton, styled, useTheme } from '@mui/material';
import { useState } from 'react';

import { KeenIcon, SearchInline } from '../../../components';

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
    setOpen(false);
  };

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
          fontSize: 13,
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          color: theme.palette.grey['500']
        }}
      >
        Search
      </Box>
      <CustomDialog fullWidth={true} open={open} onClose={handleClose}>
        <SearchInline source="" dialog={true} />
      </CustomDialog>
    </Box>
  );
};

export { HeaderSearch };
