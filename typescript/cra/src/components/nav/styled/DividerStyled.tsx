import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import { type NavItemChildPropsType } from '..';

export const DividerStyled = styled(Divider, {
  shouldForwardProp: (prop) => !['depth', 'styles'].includes(prop as string)
})<NavItemChildPropsType>(({ depth, styles }) => {
  return {
    marginTop: styles.DIVIDER_MARGIN_Y,
    marginBottom: styles.DIVIDER_MARGIN_Y,
    border: styles.DIVIDER_BORDER
  };
});
