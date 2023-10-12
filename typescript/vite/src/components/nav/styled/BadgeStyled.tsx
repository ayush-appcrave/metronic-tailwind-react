import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

import { type NavItemChildPropsType } from '..';

const BadgeStyled = styled(Badge, {
  shouldForwardProp: (prop) => !['depth', 'menu', 'styles'].includes(prop as string)
})<NavItemChildPropsType>(({ depth, menu, styles }) => {
  const rightProp: number = menu
    ? styles.MENU_ITEM_BUTTON_PADDING_X
    : depth === 1
    ? styles.ROOT_ITEM_BUTTON_PADDING_X
    : styles.SUB_ITEM_BUTTON_PADDING_X;

  return {
    '.MuiBadge-badge ': {
      fontSize: styles.BADGE_FONT_SIZE,
      fontWeight: styles.BADGE_FONT_WEIGHT,
      right: (styles.BADGE_GAP as number) + rightProp
    }
  };
});

export { BadgeStyled };
