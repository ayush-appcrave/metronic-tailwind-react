import { PropsWithChildren, useEffect, useState, useMemo } from "react";
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, PaletteOptions, Theme, createTheme, ThemeOptions, ThemeProvider as CustomThemeProvider } from '@mui/material/styles';
import { useLang } from "../i18n";
import { useSettings } from "./SettingsProvider";
import { breakpoints } from "../theme/breakpoints";
import { getPalette } from "../theme/palette";
import { componentsCustomization } from "../theme/customization";
import { typography, GlobalStyles } from "../theme";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { settings, getMode } = useSettings();
  const { currentLanguage } = useLang();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints,
      typography,
      palette: getPalette(getMode()),
    }),
    [currentLanguage.direction, getMode()]
  );

  const theme = createTheme(themeOptions);

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
