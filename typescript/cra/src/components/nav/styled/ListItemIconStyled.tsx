import { ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

import { type NavItemChildPropsType } from '..';

export const ListItemIconStyled = styled(ListItemIcon, {
  shouldForwardProp: (prop) =>
    !['depth', 'menu', 'color', 'styles', 'active', 'here', 'hover', 'open', 'collapse', 'expand'].includes(
      prop as string
    )
})<NavItemChildPropsType>(({ depth, menu, active, here, hover, open, color, styles }) => {
  return {
    minWidth: 0,
    display: 'flex',
    alignItems: 'center',

    height:
      menu === true
        ? styles.MENU_ITEM_ICON_SIZE
        : depth === 1
        ? styles.ROOT_ITEM_ICON_SIZE
        : styles.SUB_ITEM_ICON_SIZE,

    width:
      menu === true
        ? styles.MENU_ITEM_ICON_SIZE
        : depth === 1
        ? styles.ROOT_ITEM_ICON_SIZE
        : styles.SUB_ITEM_ICON_SIZE,

    marginRight:
      menu === true
        ? styles.MENU_ITEM_ICON_GAP
        : depth === 1
        ? styles.ROOT_ITEM_ICON_GAP
        : styles.SUB_ITEM_ICON_GAP,

    color:
      color ||
      (menu
        ? styles.MENU_ITEM_ICON_COLOR
        : depth === 1
        ? styles.ROOT_ITEM_ICON_COLOR
        : styles.SUB_ITEM_ICON_COLOR),

    ...(open && {
      color:
        color ||
        (menu
          ? styles.MENU_ITEM_ICON_COLOR_OPEN
          : depth === 1
          ? styles.ROOT_ITEM_ICON_COLOR_OPEN
          : styles.SUB_ITEM_ICON_COLOR_OPEN)
    }),

    ...(here && {
      color:
        color ||
        (menu
          ? styles.MENU_ITEM_ICON_COLOR_HERE
          : depth === 1
          ? styles.ROOT_ITEM_ICON_COLOR_HERE
          : styles.SUB_ITEM_ICON_COLOR_HERE)
    }),

    ...(hover && {
      color:
        color ||
        (menu
          ? styles.MENU_ITEM_ICON_COLOR_HOVER
          : depth === 1
          ? styles.ROOT_ITEM_ICON_COLOR_HOVER
          : styles.SUB_ITEM_ICON_COLOR_HOVER)
    }),

    ...(active && {
      color:
        color ||
        (menu
          ? styles.MENU_ITEM_ICON_COLOR_ACTIVE
          : depth === 1
          ? styles.ROOT_ITEM_ICON_COLOR_ACTIVE
          : styles.SUB_ITEM_ICON_COLOR_ACTIVE)
    }),

    'i ': {
      lineHeight: '1',
      fontSize:
        menu === true
          ? styles.MENU_ITEM_ICON_FONT_SIZE
          : depth === 1
          ? styles.ROOT_ITEM_ICON_FONT_SIZE
          : styles.SUB_ITEM_ICON_FONT_SIZE
    }
  };
});
