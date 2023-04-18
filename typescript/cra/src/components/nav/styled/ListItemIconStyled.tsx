import { styled } from '@mui/material/styles';
import { ListItemIcon } from '@mui/material';
import { type NavItemChildType } from '..';

export const ListItemIconStyled = styled(ListItemIcon, {
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
    height: 18,
    width: 18,
    minWidth: 0,
    marginRight: theme.spacing(1),
    color: theme.palette.grey['500'],
    ...(active && {
      color: theme.palette.primary.main
    }),
    ...(hover && {
      color: theme.palette.grey['700']
    }),
    ...(here && {
      color: theme.palette.grey['700']
    }),
    'i ': {
      fontSize: '18px'
    }
  };
});
