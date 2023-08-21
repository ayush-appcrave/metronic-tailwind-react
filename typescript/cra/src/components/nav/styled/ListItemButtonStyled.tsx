import { ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { type NavItemChildPropsType } from '..';

export const ListItemButtonStyled = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    !['depth', 'menu', 'active', 'here', 'hover', 'open', 'collapse', 'expand', 'styles'].includes(
      prop as string
    )
})<NavItemChildPropsType>(({ depth, menu, active, here, hover, open, styles }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    borderRadius:
      menu === true
        ? styles.MENU_ITEM_BUTTON_BORDER_RADIUS
        : depth === 1
        ? styles.ROOT_ITEM_BUTTON_BORDER_RADIUS
        : styles.SUB_ITEM_BUTTON_BORDER_RADIUS,

    height:
      menu === true
        ? styles.MENU_ITEM_BUTTON_HEIGHT
        : depth === 1
        ? styles.ROOT_ITEM_BUTTON_HEIGHT
        : styles.SUB_ITEM_BUTTON_HEIGHT,

    paddingTop:
      menu === true
        ? styles.MENU_ITEM_BUTTON_PADDING_Y
        : depth === 1
        ? styles.ROOT_ITEM_BUTTON_PADDING_Y
        : styles.SUB_ITEM_BUTTON_PADDING_Y,

    paddingBottom:
      menu === true
        ? styles.MENU_ITEM_BUTTON_PADDING_Y
        : depth === 1
        ? styles.ROOT_ITEM_BUTTON_PADDING_Y
        : styles.SUB_ITEM_BUTTON_PADDING_Y,

    paddingLeft:
      menu === true
        ? styles.MENU_ITEM_BUTTON_PADDING_X
        : depth === 1
        ? styles.ROOT_ITEM_BUTTON_PADDING_X
        : styles.SUB_ITEM_BUTTON_PADDING_X * styles.SUB_INDENTION * depth,

    paddingRight:
      menu === true
        ? styles.MENU_ITEM_BUTTON_PADDING_X
        : depth === 1
        ? styles.ROOT_ITEM_BUTTON_PADDING_X
        : styles.SUB_ITEM_BUTTON_PADDING_X,

    marginTop:
      menu === true
        ? styles.MENU_ITEM_BUTTON_MARGIN_Y
        : depth === 1
        ? styles.ROOT_ITEM_BUTTON_MARGIN_Y
        : styles.SUB_ITEM_BUTTON_MARGIN_Y,

    marginBottom:
      menu === true
        ? styles.MENU_ITEM_BUTTON_MARGIN_Y
        : depth === 1
        ? styles.ROOT_ITEM_BUTTON_MARGIN_Y
        : styles.SUB_ITEM_BUTTON_MARGIN_Y,

    marginLeft:
      menu === true
        ? styles.MENU_ITEM_BUTTON_MARGIN_X
        : depth === 1
        ? styles.ROOT_ITEM_BUTTON_MARGIN_X
        : styles.SUB_ITEM_BUTTON_MARGIN_X,

    marginRight:
      menu === true
        ? styles.MENU_ITEM_BUTTON_MARGIN_X
        : depth === 1
        ? styles.ROOT_ITEM_BUTTON_MARGIN_X
        : styles.SUB_ITEM_BUTTON_MARGIN_X,

    '&:hover ': {
      backgroundColor:
        menu === true
          ? styles.MENU_ITEM_BUTTON_BACKGROUND_COLOR_HOVER
          : depth === 1
          ? styles.ROOT_ITEM_BUTTON_BACKGROUND_COLOR_HOVER
          : styles.SUB_ITEM_BUTTON_BACKGROUND_COLOR_HOVER
    },

    ...(open && {
      backgroundColor:
        (menu === true
          ? styles.MENU_ITEM_BUTTON_BACKGROUND_COLOR_OPEN
          : depth === 1
          ? styles.ROOT_ITEM_BUTTON_BACKGROUND_COLOR_OPEN
          : styles.SUB_ITEM_BUTTON_BACKGROUND_COLOR_OPEN) + ' !important'
    }),

    ...(here && {
      backgroundColor:
        (menu === true
          ? styles.MENU_ITEM_BUTTON_BACKGROUND_COLOR_HERE
          : depth === 1
          ? styles.ROOT_ITEM_BUTTON_BACKGROUND_COLOR_HERE
          : styles.SUB_ITEM_BUTTON_BACKGROUND_COLOR_HERE) + ' !important'
    }),

    ...(active && {
      backgroundColor:
        (menu === true
          ? styles.MENU_ITEM_BUTTON_BACKGROUND_COLOR_ACTIVE
          : depth === 1
          ? styles.ROOT_ITEM_BUTTON_BACKGROUND_COLOR_ACTIVE
          : styles.SUB_ITEM_BUTTON_BACKGROUND_COLOR_ACTIVE) + ' !important'
    })
  };
});
