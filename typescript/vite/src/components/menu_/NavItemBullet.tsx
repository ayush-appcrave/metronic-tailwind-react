import { Box } from '@mui/material';

import { type NavItemChildPropsType } from './types';

const NavItemBullet = ({
  depth,
  menu,
  active,
  hover,
  here,
  open,
  collapse,
  expand,
  color,
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

        backgroundColor:
          color ||
          (menu
            ? styles.MENU_ITEM_BULLET_COLOR
            : depth === 1
              ? styles.ROOT_ITEM_BULLET_COLOR
              : styles.SUB_ITEM_BULLET_COLOR),

        ...(open && {
          backgroundColor:
            color ||
            (menu
              ? styles.MENU_ITEM_BULLET_COLOR_OPEN
              : depth === 1
                ? styles.ROOT_ITEM_BULLET_COLOR_OPEN
                : styles.SUB_ITEM_BULLET_COLOR_OPEN)
        }),

        ...(here && {
          backgroundColor:
            color ||
            (menu
              ? styles.MENU_ITEM_BULLET_COLOR_HERE
              : depth === 1
                ? styles.ROOT_ITEM_BULLET_COLOR_HERE
                : styles.SUB_ITEM_BULLET_COLOR_HERE)
        }),

        ...(hover && {
          backgroundColor:
            color ||
            (menu
              ? styles.MENU_ITEM_BULLET_COLOR_HOVER
              : depth === 1
                ? styles.ROOT_ITEM_BULLET_COLOR_HOVER
                : styles.SUB_ITEM_BULLET_COLOR_HOVER)
        }),

        ...(active && {
          backgroundColor:
            color ||
            (menu
              ? styles.MENU_ITEM_BULLET_COLOR_ACTIVE
              : depth === 1
                ? styles.ROOT_ITEM_BULLET_COLOR_ACTIVE
                : styles.SUB_ITEM_BULLET_COLOR_ACTIVE)
        })
      }}
    ></Box>
  );
};

export { NavItemBullet };
