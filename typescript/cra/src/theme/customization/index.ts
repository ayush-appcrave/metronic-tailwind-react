import { type Theme } from '@mui/material/styles';
import { Menu } from './Menu';
import { Popover } from './Popover';

const componentsCustomization = (theme: Theme) => {
  return Object.assign(Menu(theme), Popover(theme));
};

export { componentsCustomization };
