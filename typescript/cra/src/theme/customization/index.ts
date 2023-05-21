import { type Theme } from '@mui/material/styles';

import { Card } from './Card';
import { Checkbox } from './Checkbox';
import { Menu } from './Menu';
import { Popover } from './Popover';
import { Table } from './Table';

const componentsCustomization = (theme: Theme) => {
  return Object.assign(Menu(theme), Popover(theme), Card(theme), Table(theme), Checkbox(theme));
};

export { componentsCustomization };
