import { useState, useEffect } from 'react';
import { Box, IconButton, useTheme, styled } from '@mui/material';
import { useSettings } from "../../../providers/SettingsProvider";
import { KeenIcon } from "../../../components";
import { SettingsModeOptionType } from "../../../config";

const HeaderModeSwitcher = () => {
  const theme = useTheme();
  const { settings, updateSettings, getMode } = useSettings();

	const handleModeChange = (mode: SettingsModeOptionType) => {
    updateSettings({
      mode
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          height: "32px",
          borderRadius: '6px',
          display: "flex",
          alignItems: "center",
          paddingLeft: 0.5,
          paddingRight: 0.5,
          gap: 0.5,
          backgroundColor: theme.palette.grey['200']
        }}
      >
        <IconButtonStyled
          onClick={() => handleModeChange("dark")}
          active={getMode() === "dark"}
        >
          <KeenIcon icon="moon"/>
        </IconButtonStyled>

        <IconButtonStyled
          onClick={() => handleModeChange("light")}
          active={getMode() === "light"}
        >
          <KeenIcon icon="night-day"/>
        </IconButtonStyled>
      </Box>
    </Box>
  );
};

export const IconButtonStyled = styled(IconButton, {
  shouldForwardProp: (prop) => ["active"].includes(prop as string) === false
}) <{active: boolean}> (({active, theme}) => {

	return {
    height: "24px",
    width: "24px",
		borderRadius: '6px',
    padding: 0.25,		
    backgroundColor: active ? theme.palette.background.paper : 'transparent',
    ":hover": {
      backgroundColor: 'transparent'
    },
    "i": {
      fontSize: "17px"
    }
	}
});

export { HeaderModeSwitcher };
