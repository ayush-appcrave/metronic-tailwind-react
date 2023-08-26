import { Box } from '@mui/material';

import { type NavItemArrowPropsType } from './types';

const NavItemArrow = ({
  menu,
  itemMenu,
  direction = 'vertical',
  toggle = 'click',
  accordion = false,
  active = false,
  here = false,
  hover = false,
  open = false,
  collapse = false,
  expand = false,
  icon = null,
  depth = 0,
  color,
  styles
}: NavItemArrowPropsType) => {
  let rotateInitial: string = '';
  let rotateToggle: string = '';

  if (itemMenu) {
    if (direction === 'vertical') {
      rotateInitial = 'rotate(0)';
      rotateToggle = 'rotate(-90deg)';
    } else if (direction === 'horizontal') {
      if (depth === 1) {
        rotateInitial = 'rotate(0)';
        rotateToggle = 'rotate(-180deg)';
      } else {
        rotateInitial = 'rotate(0)';
        rotateToggle = 'rotate(-180deg)';
      }
    }
  } else {
    if (direction === 'vertical') {
      rotateInitial = 'rotate(0)';
      rotateToggle = 'rotate(-180deg)';
    } else if (direction === 'horizontal') {
      rotateInitial = 'rotate(0)';
      rotateToggle = 'rotate(180deg)';
    }
  }

  const transform: string = open ? rotateToggle : rotateInitial;

  return (
    <Box
      sx={{
        transform,
        transition: 'transform 0.3s ease',
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        height: menu
          ? styles.MENU_ITEM_ARROW_SIZE
          : depth === 1
          ? styles.ROOT_ITEM_ARROW_SIZE
          : styles.SUB_ITEM_ARROW_SIZE,

        width: menu
          ? styles.MENU_ITEM_ARROW_SIZE
          : depth === 1
          ? styles.ROOT_ITEM_ARROW_SIZE
          : styles.SUB_ITEM_ARROW_SIZE,

        color:
          color ||
          (menu
            ? styles.MENU_ITEM_ARROW_COLOR
            : depth === 1
            ? styles.ROOT_ITEM_ARROW_COLOR
            : styles.SUB_ITEM_ARROW_COLOR),

        ...(open && {
          color:
            color ||
            (menu
              ? styles.MENU_ITEM_ARROW_COLOR_OPEN
              : depth === 1
              ? styles.ROOT_ITEM_ARROW_COLOR_OPEN
              : styles.SUB_ITEM_ARROW_COLOR_OPEN)
        }),

        ...(here && {
          color:
            color ||
            (menu
              ? styles.MENU_ITEM_ARROW_COLOR_HERE
              : depth === 1
              ? styles.ROOT_ITEM_ARROW_COLOR_HERE
              : styles.SUB_ITEM_ARROW_COLOR_HERE)
        }),

        ...(hover && {
          color:
            color ||
            (menu
              ? styles.MENU_ITEM_ARROW_COLOR_HOVER
              : depth === 1
              ? styles.ROOT_ITEM_ARROW_COLOR_HOVER
              : styles.SUB_ITEM_ARROW_COLOR_HOVER)
        }),

        ...(active && {
          color:
            color ||
            (menu
              ? styles.MENU_ITEM_ARROW_COLOR_ACTIVE
              : depth === 1
              ? styles.ROOT_ITEM_ARROW_COLOR_ACTIVE
              : styles.SUB_ITEM_ARROW_COLOR_ACTIVE)
        }),

        'i ': {
          fontSize:
            menu === true
              ? styles.MENU_ITEM_ARROW_FONT_SIZE
              : depth === 1
              ? styles.ROOT_ITEM_ARROW_FONT_SIZE
              : styles.SUB_ITEM_ARROW_FONT_SIZE
        }
      }}
    >
      {icon}
    </Box>
  );
};

export { NavItemArrow };
