import { KeenIcon } from "../";
import { Box, Button } from "@mui/material";

type Props = {
  onClick: () => void;
};

const SettingsToggleButton = ({ onClick }: Props) => {

  return (
    <Button
      sx={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: "100"
      }}
      onClick={onClick}
      variant="contained"
      value="1"
    >
      <KeenIcon iconName="setting-4" />      
      <Box sx={{paddingLeft: 1}}>
        Customize
      </Box>
    </Button>
  );
};

export { SettingsToggleButton };
