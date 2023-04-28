import { type Theme } from '@mui/material/styles';
import { Menu } from './Menu';
import { Popover } from './Popover';
import { Card } from './Card';
import { Table } from './Table';
import { Checkbox } from './Checkbox';

const componentsCustomization = (theme: Theme) => {
  return Object.assign(Menu(theme), Popover(theme), Card(theme), Table(theme), Checkbox(theme));
};

export { componentsCustomization };
