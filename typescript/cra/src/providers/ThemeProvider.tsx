import { PropsWithChildren, useEffect, useState, useMemo } from "react";
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, PaletteOptions, Theme, createTheme, ThemeOptions, ThemeProvider as CustomThemeProvider } from '@mui/material/styles';
import { useLang } from "../i18n";
import { useSettings } from "./SettingsProvider";
import { componentsCustomization } from "../theme/customization";
import { getPalette, typography, breakpoints, GlobalStyles } from "../theme";
import { getSystemShadows, getCustomShadows } from "../theme/shadows";


const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { settings, getMode } = useSettings();
  const { direction } = settings;
  const { currentLanguage } = useLang();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints,
      typography,
      palette: getPalette(getMode()),
      shadows: getSystemShadows(getMode()),
      customShadows: getCustomShadows(getMode()),
    }),
    [direction, getMode()]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsCustomization(theme);

  return (
    <StyledEngineProvider injectFirst>
      <CustomThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <GlobalStyles theme={theme}/>
      </CustomThemeProvider>
    </StyledEngineProvider>    
  );
};

export { ThemeProvider };
