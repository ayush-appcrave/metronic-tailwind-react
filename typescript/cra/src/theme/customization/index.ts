import { Theme } from "@mui/material/styles";
import { Menu } from "./Menu";

const componentsCustomization = (theme: Theme) => {
  return Object.assign(
    Menu(theme)
  );
}

export { componentsCustomization }