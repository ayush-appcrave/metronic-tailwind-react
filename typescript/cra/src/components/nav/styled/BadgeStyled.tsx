import { alpha, styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
import { NavItemChildType } from '..';

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
      fontWeight: theme.typography.fontWeightMedium
    }
  };
});

export { BadgeStyled };
