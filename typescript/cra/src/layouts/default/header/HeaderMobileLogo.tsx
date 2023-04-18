import { type MouseEvent } from 'react';
import { Box, IconButton } from '@mui/material';
import { KeenIcon } from '../../../components';
import { useDefaultLayout } from '../DefaultLayoutProvider';

const HeaderMobileLogo = () => {
  const { setMobileSidebarOpen } = useDefaultLayout();

  const handleSidebarOpenOnMobile = (event: MouseEvent<HTMLElement>) => {
    setMobileSidebarOpen(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
      <IconButton
        onClick={handleSidebarOpenOnMobile}
        sx={{
          mr: 0.25,
          ml: -1
        }}>
        <KeenIcon
          icon="burger-menu-6"
          sx={{
            fontSize: '20px'
          }}
        />
      </IconButton>

      <a href="/" style={{ lineHeight: '0px' }}>
        <Box
          component="img"
          src="/media/logos/default.svg"
          alt="logo"
          sx={{
            height: '30px',
            maxWidth: 'none',
            cursor: 'pointer'
          }}
        />
      </a>
    </Box>
  );
};

export { HeaderMobileLogo };
