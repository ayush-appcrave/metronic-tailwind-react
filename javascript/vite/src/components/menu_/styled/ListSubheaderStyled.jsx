import { ListSubheader } from '@mui/material';
import { styled } from '@mui/material/styles';
export const ListSubheaderStyled = styled(ListSubheader, {
  shouldForwardProp: prop => !['depth', 'styles'].includes(prop)
})(({
  depth,
  styles,
  theme
}) => {
  return {
    ...theme.typography.overline,
    fontSize: styles.SUBHEADER_FONT_SIZE,
    paddingTop: styles.SUBHEADER_PADDING_TOP,
    paddingBottom: styles.SUBHEADER_PADDING_BOTTOM,
    color: styles.SUBHEADER_COLOR
  };
});