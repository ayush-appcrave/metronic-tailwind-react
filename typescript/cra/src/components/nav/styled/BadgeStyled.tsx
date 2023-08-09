import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

import { type NavItemChildType } from '..';

const BadgeStyled = styled(Badge, {
  shouldForwardProp: (prop) =>
    ![
      'depth',
      'styles',
      'active',
      'here',
      'hover',
      'open',
      'collapse',
      'expand',
      'disabled'
    ].includes(prop as string)
})<NavItemChildType>(({ depth, active, here, hover, open, disabled, styles, theme }) => {
  return {
    '.MuiBadge-badge ': {
      fontSize: 11,
      fontWeight: theme.typography.fontWeightMedium,
      right: theme.spacing(depth === 1 ? styles.ROOT_ITEM_PADDING_X : styles.SUB_ITEM_PADDING_X)
    }
  };
});

export { BadgeStyled };
