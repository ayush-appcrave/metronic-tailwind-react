import { Box, useTheme } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

const ScreenLoader = () => {
  const theme = useTheme();

  return (
    <Box
      className="mui-fixed"
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: zIndex.modal + 1,
        backgroundColor: theme.palette.background.default
      }}>
      <Box
        component="img"
        src="/media/logos/default.svg"
        alt="logo"
        sx={{
          height: '30px',
          maxWidth: 'none',
          mb: 1
        }}
      />
      <Box
        sx={{
          color: theme.palette.grey['500'],
          fontWeight: theme.typography.fontWeightMedium,
          fontSize: '13px'
        }}>
        Loading...
      </Box>
    </Box>
  );
};

export { ScreenLoader };
