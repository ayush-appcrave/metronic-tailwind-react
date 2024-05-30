import { ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

import { type NavItemChildPropsType } from '..';

export const ListItemTextStyled = styled(ListItemText, {
  shouldForwardProp: (prop) =>
    ![
      'depth',
      'menu',
      'color',
      'styles',
      'active',
      'here',
      'hover',
      'open',
      'collapse',
      'expand'
    ].includes(prop as string)
})<NavItemChildPropsType>(({ depth, menu, active, here, hover, open, color, styles, theme }) => {
  return {
    '> .MuiListItemText-primary': {
      fontSize:
        menu === true
          ? styles.MENU_ITEM_TITLE_FONT_SIZE
          : depth === 1
            ? styles.ROOT_ITEM_TITLE_FONT_SIZE
            : styles.SUB_ITEM_TITLE_FONT_SIZE,

      fontWeight:
        menu === true
          ? styles.MENU_ITEM_TITLE_FONT_WEIGHT
          : depth === 1
            ? styles.ROOT_ITEM_TITLE_FONT_WEIGHT
            : styles.SUB_ITEM_TITLE_FONT_WEIGHT,

      color:
        color ||
        (menu
          ? styles.MENU_ITEM_TITLE_COLOR
          : depth === 1
            ? styles.ROOT_ITEM_TITLE_COLOR
            : styles.SUB_ITEM_TITLE_COLOR),

      ...(open && {
        color:
          color ||
          (menu
            ? styles.MENU_ITEM_TITLE_COLOR_OPEN
            : depth === 1
              ? styles.ROOT_ITEM_TITLE_COLOR_OPEN
              : styles.SUB_ITEM_TITLE_COLOR_OPEN)
      }),

      ...(here && {
        color:
          color ||
          (menu
            ? styles.MENU_ITEM_TITLE_COLOR_HERE
            : depth === 1
              ? styles.ROOT_ITEM_TITLE_COLOR_HERE
              : styles.SUB_ITEM_TITLE_COLOR_HERE)
      }),

      ...(hover && {
        color:
          color ||
          (menu
            ? styles.MENU_ITEM_TITLE_COLOR_HOVER
            : depth === 1
              ? styles.ROOT_ITEM_TITLE_COLOR_HOVER
              : styles.SUB_ITEM_TITLE_COLOR_HOVER)
      }),

      ...(active && {
        color:
          color ||
          (menu
            ? styles.MENU_ITEM_TITLE_COLOR_ACTIVE
            : depth === 1
              ? styles.ROOT_ITEM_TITLE_COLOR_ACTIVE
              : styles.SUB_ITEM_TITLE_COLOR_ACTIVE)
      })
    }
  };
});
