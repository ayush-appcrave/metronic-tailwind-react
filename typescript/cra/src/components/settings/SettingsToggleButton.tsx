import { KeenIcon } from '../';
import { Box, Button } from '@mui/material';

interface Props {
  onClick: () => void;
}

const SettingsToggleButton = ({ onClick }: Props) => {
  return (
    <Box
      className="mui-fixed"
      sx={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: '100'
      }}
    >
      <Button onClick={onClick} variant="contained" value="1">
        <KeenIcon icon="setting-4" />

        <Box sx={{ paddingLeft: 1 }}>Customize</Box>
      </Button>
    </Box>
  );
};

export { SettingsToggleButton };
