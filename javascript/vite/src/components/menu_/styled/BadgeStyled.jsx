import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
const BadgeStyled = styled(Badge, {
  shouldForwardProp: prop => !['depth', 'menu', 'styles'].includes(prop)
})(({
  depth,
  menu,
  styles
}) => {
  const rightProp = menu ? styles.MENU_ITEM_BUTTON_PADDING_X : depth === 1 ? styles.ROOT_ITEM_BUTTON_PADDING_X : styles.SUB_ITEM_BUTTON_PADDING_X;
  return {
    '.MuiBadge-badge ': {
      fontSize: styles.BADGE_FONT_SIZE,
      fontWeight: styles.BADGE_FONT_WEIGHT,
      right: styles.BADGE_GAP + rightProp
    }
  };
});
export { BadgeStyled };