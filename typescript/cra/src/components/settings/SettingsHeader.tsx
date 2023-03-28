import { Stack, IconButton, Box } from '@mui/material';
import { KeenIcon } from "../";

type Props = {
  onCloseClick: () => void;
};

const SettingsHeader = ({ onCloseClick }: Props) => {

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
      <Box 
        sx={{
          paddingLeft: 1
        }}
      >
        Customization
      </Box>

      <IconButton 
        aria-label="close"
        onClick={onCloseClick}
      >
        <KeenIcon iconName="cross"/>
      </IconButton>
    </Stack>
  );
}

export { SettingsHeader };