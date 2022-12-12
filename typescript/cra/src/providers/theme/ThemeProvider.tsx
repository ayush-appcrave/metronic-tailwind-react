import { PropsWithChildren, useEffect, useState } from "react";
import { createTheme, CssBaseline, PaletteOptions, Theme, ThemeProvider as MUIThemeProvider} from "@mui/material";
import { useLang } from "../i18n";
import { useSettings } from "../settings/SettingsProvider";
import { breakpoints } from "../../theme/breakpoints";
import { palette } from "../../theme/palette";
import { componentsCustomization } from "../../theme/customization";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { settings } = useSettings();
  const { mode } = settings;
  const { currentLanguage } = useLang();
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    setTheme(calculateTheme());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, currentLanguage]);

  const calculateTheme = () => {
    const newTheme = createTheme({
      breakpoints,
      palette: mode
        ? // @ts-ignore
          { light: palette.light as PaletteOptions }
        : { dark: palette.dark as PaletteOptions },
      direction: currentLanguage.direction,
    });
    
    newTheme.components = componentsCustomization(newTheme);

    return newTheme;
  };

  return theme ? (
    <MUIThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </MUIThemeProvider>
  ) : null;
};

export { ThemeProvider };
