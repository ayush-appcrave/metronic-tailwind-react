import { useState, useEffect } from 'react';
import { Box, IconButton, useTheme, styled } from '@mui/material';
import { useSettings } from "../../../providers/SettingsProvider";
import { KeenIcon } from "../../../components";
import { SettingsModeOptionType } from "../../../config";

const HeaderModeSwitcher = () => {
  const theme = useTheme();
  const { settings, updateSettings, getMode } = useSettings();
  const { mode } = settings;

	const handleModeChange = (mode: SettingsModeOptionType) => {
    updateSettings({
      mode
    });
  };

  return (
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
        active={mode === "dark"}
      >
        <KeenIcon icon="moon"/>
      </IconButtonStyled>

      <IconButtonStyled
        onClick={() => handleModeChange("light")}
        active={mode === "light"}
      >
        <KeenIcon icon="night-day"/>
      </IconButtonStyled>
    </Box>
  );
};

export const IconButtonStyled = styled(IconButton) <{active: boolean}> (({active, theme}) => {

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
