import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
export const DividerStyled = styled(Divider, {
  shouldForwardProp: prop => !['depth', 'styles'].includes(prop)
})(({
  depth,
  styles
}) => {
  return {
    marginTop: styles.DIVIDER_MARGIN_Y,
    marginBottom: styles.DIVIDER_MARGIN_Y,
    borderBottom: styles.DIVIDER_BORDER
  };
});