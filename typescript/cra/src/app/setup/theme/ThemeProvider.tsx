import {
  createTheme,
  PaletteOptions,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { PropsWithChildren } from "react";
import { useSettings } from "../configs";
import { breakpoints } from "./breakpoints";
import { componentsCustomization } from "./customization";
import { palette } from "./palette";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { settings } = useSettings();

  const theme = createTheme({
    breakpoints,
    palette: settings.mode
      ? // @ts-ignore
        { light: palette.light as PaletteOptions }
      : { dark: palette.dark },
    direction: settings.direction,
  });
  theme.components = componentsCustomization(theme);

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export { ThemeProvider };
