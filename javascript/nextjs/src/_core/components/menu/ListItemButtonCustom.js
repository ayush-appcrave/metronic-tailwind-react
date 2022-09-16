import { alpha, styled } from '@mui/material/styles';
import { ListItemButton } from '@mui/material';

export const ListItemButtonCustom = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active'
}) (({ active, level, theme }) => ({
  position: 'relative',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1.5),
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  height: '40px',

  // Active state
  ...(active && {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
  })
}));