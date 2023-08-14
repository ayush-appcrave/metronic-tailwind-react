import { List } from '@mui/material';
import { memo } from 'react';

import { NavDefaultStylesConfig, NavItem, NavItemPropsType, NavPropsType } from './';

const NavComponent = ({
  direction,
  accordion,
  collapse,
  expand,
  hover,
  items,
  styles,
  sx
}: NavPropsType) => {
  return (
    <List
      sx={{
        width: '100%',
        ...sx
      }}
      component="nav"
      aria-labelledby="nav-list"
    >
      {(items as readonly NavItemPropsType[]).map((item, index) => (
        <NavItem
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          key={`${index}-${item.title}`}
          menu={false}
          collapse={collapse}
          expand={expand}
          styles={styles ?? NavDefaultStylesConfig()}
          {...item}
        />
      ))}
    </List>
  );
};

const Nav = memo(NavComponent);
export { Nav };
