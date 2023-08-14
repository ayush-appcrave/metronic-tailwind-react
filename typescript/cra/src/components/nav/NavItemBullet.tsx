import { Box } from '@mui/material';
import { memo } from 'react';

import { type NavItemChildPropsType } from './types';

const NavItemBulletComponent = ({
  depth,
  menu,
  active,
  hover,
  here,
  open,
  collapse,
  expand,
  styles
}: NavItemChildPropsType) => {
  return (
    <Box
      sx={{
        marginRight: menu
          ? styles.MENU_ITEM_BULLET_GAP
          : depth === 1
          ? styles.ROOT_ITEM_BULLET_GAP
          : styles.SUB_ITEM_BULLET_GAP,

        height: menu
          ? styles.MENU_ITEM_BULLET_HEIGHT
          : depth === 1
          ? styles.ROOT_ITEM_BULLET_HEIGHT
          : styles.SUB_ITEM_BULLET_HEIGHT,

        width: menu
          ? styles.MENU_ITEM_BULLET_WIDTH
          : depth === 1
          ? styles.ROOT_ITEM_BULLET_WIDTH
          : styles.SUB_ITEM_BULLET_WIDTH,

        borderRadius: menu
          ? styles.MENU_ITEM_BULLET_BORDER_RADIUS
          : depth === 1
          ? styles.ROOT_ITEM_BULLET_BORDER_RADIUS
          : styles.SUB_ITEM_BULLET_BORDER_RADIUS,

        backgroundColor: menu
          ? styles.MENU_ITEM_BULLET_COLOR
          : depth === 1
          ? styles.ROOT_ITEM_BULLET_COLOR
          : styles.SUB_ITEM_BULLET_COLOR,

        ...(hover && {
          backgroundColor:
            menu === true
              ? styles.MENU_ITEM_BULLET_COLOR_HOVER
              : depth === 1
              ? styles.ROOT_ITEM_BULLET_COLOR_HOVER
              : styles.SUB_ITEM_BULLET_COLOR_HOVER
        }),

        ...(open && {
          backgroundColor:
            menu === true
              ? styles.MENU_ITEM_BULLET_COLOR_OPEN
              : depth === 1
              ? styles.ROOT_ITEM_BULLET_COLOR_OPEN
              : styles.SUB_ITEM_BULLET_COLOR_OPEN
        }),

        ...(here && {
          backgroundColor:
            menu === true
              ? styles.MENU_ITEM_BULLET_COLOR_HERE
              : depth === 1
              ? styles.ROOT_ITEM_BULLET_COLOR_HERE
              : styles.SUB_ITEM_BULLET_COLOR_HERE
        }),

        ...(active && {
          backgroundColor:
            menu === true
              ? styles.MENU_ITEM_BULLET_COLOR_ACTIVE
              : depth === 1
              ? styles.ROOT_ITEM_BULLET_COLOR_ACTIVE
              : styles.SUB_ITEM_BULLET_COLOR_ACTIVE
        })
      }}
    ></Box>
  );
};

const NavItemBullet = memo(NavItemBulletComponent);
export { NavItemBullet };
