import { List, type SxProps } from '@mui/material';
import { memo } from 'react';

import { NavItem, type NavItemOptionsType, type NavType } from './';

const NavComponent = ({
  variant = 'inline',
  direction = 'vertical',
  accordion,
  collapse,
  expand,
  height,
  maxHeight,
  items,
  sx,
  styles
}: NavType & { sx?: SxProps }) => {
  return (
    <List
      sx={{
        width: '100%',
        ...sx
      }}
      component="nav"
      aria-labelledby="nav-list"
    >
      {(items as readonly NavItemOptionsType[]).map((item, index) => (
        <NavItem
          key={`${index}-${item.title}`}
          depth={1}
          collapse={collapse}
          expand={expand}
          options={item}
          styles={styles}
        />
      ))}
    </List>
  );
};

const Nav = memo(NavComponent);
export { Nav };
