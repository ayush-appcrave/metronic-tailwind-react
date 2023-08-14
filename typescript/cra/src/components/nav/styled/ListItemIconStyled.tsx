import { ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

import { type NavItemChildPropsType } from '..';

export const ListItemIconStyled = styled(ListItemIcon, {
  shouldForwardProp: (prop) =>
    !['depth', 'menu', 'styles', 'active', 'here', 'hover', 'open', 'collapse', 'expand'].includes(
      prop as string
    )
})<NavItemChildPropsType>(({ depth, menu, active, here, hover, open, styles }) => {
  return {
    minWidth: 0,

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
      menu === true
        ? styles.MENU_ITEM_ICON_COLOR
        : depth === 1
        ? styles.ROOT_ITEM_ICON_COLOR
        : styles.SUB_ITEM_ICON_COLOR,

    ...(hover && {
      color:
        menu === true
          ? styles.MENU_ITEM_ICON_COLOR_HOVER
          : depth === 1
          ? styles.ROOT_ITEM_ICON_COLOR_HOVER
          : styles.SUB_ITEM_ICON_COLOR_HOVER
    }),

    ...(open && {
      color:
        menu === true
          ? styles.MENU_ITEM_ICON_COLOR_OPEN
          : depth === 1
          ? styles.ROOT_ITEM_ICON_COLOR_OPEN
          : styles.SUB_ITEM_ICON_COLOR_OPEN
    }),

    ...(here && {
      color:
        menu === true
          ? styles.MENU_ITEM_ICON_COLOR_HERE
          : depth === 1
          ? styles.ROOT_ITEM_ICON_COLOR_HERE
          : styles.SUB_ITEM_ICON_COLOR_HERE
    }),

    ...(active && {
      color:
        menu === true
          ? styles.MENU_ITEM_ICON_COLOR_ACTIVE
          : depth === 1
          ? styles.ROOT_ITEM_ICON_COLOR_ACTIVE
          : styles.SUB_ITEM_ICON_COLOR_ACTIVE
    }),

    'i ': {
      fontSize:
        menu === true
          ? styles.MENU_ITEM_ICON_FONT_SIZE
          : depth === 1
          ? styles.ROOT_ITEM_ICON_FONT_SIZE
          : styles.SUB_ITEM_ICON_FONT_SIZE
    }
  };
});
