import { alpha, styled } from '@mui/material/styles';
import { ListItemText } from '@mui/material';

export const ListItemTextCustom = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isCollapse'
}) (({ isCollapse, theme }) => ({
  ...(isCollapse && {
    width: 0,
    opacity: 0,
  }),
}));