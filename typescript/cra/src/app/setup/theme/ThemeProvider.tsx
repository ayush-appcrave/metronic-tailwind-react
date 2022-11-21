import { PropsWithChildren, useEffect, useState } from "react";
import {
  createTheme,
  PaletteOptions,
  Theme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { useLang } from "app/setup/i18n";
import { useSettings } from "../configs";
import { breakpoints } from "./breakpoints";
import { componentsCustomization } from "./customization";
import { palette } from "./palette";

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
        : { dark: palette.dark },
      direction: currentLanguage.direction,
    });
    newTheme.components = componentsCustomization(newTheme);
    return newTheme;
  };

  return theme ? (
    <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
  ) : null;
};

export { ThemeProvider };
