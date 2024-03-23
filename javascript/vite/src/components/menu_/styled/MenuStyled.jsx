import { Menu } from '@mui/material';
import { styled } from '@mui/material/styles';
const MenuStyled = styled(Menu, {
  shouldForwardProp: prop => !['styles', 'theme'].includes(prop)
})(({
  styles,
  theme
}) => {
  return {
    '.MuiMenu-list': {
      padding: 0
    },
    '.MuiMenu-paper.MuiPopover-paper': {
      minHeight: 'auto',
      width: styles.MENU_WIDTH,
      borderRadius: styles.MENU_BORDER_RADIUS,
      boxShadow: styles.MENU_BOX_SHADOW,
      paddingTop: styles.MENU_PADDING_Y,
      paddingBottom: styles.MENU_PADDING_Y,
      paddingLeft: styles.MENU_PADDING_X,
      paddingRight: styles.MENU_PADDING_X,
      backgroundColor: styles.MENU_BACKGROUND_COLOR
    }
  };
});
export { MenuStyled };