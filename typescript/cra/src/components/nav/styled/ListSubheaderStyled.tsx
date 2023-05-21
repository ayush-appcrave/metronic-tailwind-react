import { ListSubheader } from '@mui/material';
import { styled } from '@mui/material/styles';

import { type NavItemChildType } from '..';

export const ListSubheaderStyled = styled(ListSubheader, {
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
    ...theme.typography.overline,
    fontSize: 11,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    color: theme.palette.text.secondary
  };
});
