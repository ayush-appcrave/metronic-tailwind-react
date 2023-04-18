import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import { type NavItemChildType } from '..';

export const DividerStyled = styled(Divider, {
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
})<NavItemChildType>(({ depth, active, here, open, hover, disabled, styles, theme }) => {
  return {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  };
});
