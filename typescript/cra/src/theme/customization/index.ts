import { Theme } from "@mui/material";
import { CssBaseline } from './CssBaseline';

const componentsCustomization = (theme: Theme) => {
  return Object.assign(
    CssBaseline(theme)
  );
}

export { componentsCustomization }