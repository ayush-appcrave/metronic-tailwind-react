import { PropsWithChildren, useEffect, useState, useMemo } from "react";
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, PaletteOptions, Theme, createTheme, ThemeOptions, ThemeProvider as CustomThemeProvider } from '@mui/material/styles';
import { useLang } from "../i18n";
import { useSettings } from "./SettingsProvider";
import { componentsCustomization } from "../theme/customization";
import { getPalette, typography, getShadows, breakpoints, GlobalStyles } from "../theme";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { settings, getMode } = useSettings();
  const { direction } = settings;
  const { currentLanguage } = useLang();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints,
      typography,
      shadows: getShadows(getMode()),
      palette: getPalette(getMode()),
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
