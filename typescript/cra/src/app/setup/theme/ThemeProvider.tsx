import {
  createTheme,
  PaletteOptions,
  Theme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import { useSettings } from "../configs";
import { breakpoints } from "./breakpoints";
import { componentsCustomization } from "./customization";
import { palette } from "./palette";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { settings } = useSettings();
  const { mode, direction } = settings;
  const [theme, setTheme] = useState<Theme>();
  useEffect(() => {
    setTheme(calculateTheme());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, direction]);

  const calculateTheme = () => {
    const newTheme = createTheme({
      breakpoints,
      palette: mode
        ? // @ts-ignore
          { light: palette.light as PaletteOptions }
        : { dark: palette.dark },
      direction: direction,
    });
    newTheme.components = componentsCustomization(newTheme);
    return newTheme;
  };

  return theme ? (
    <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
  ) : null;
};

export { ThemeProvider };
