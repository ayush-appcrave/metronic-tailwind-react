import { styled } from '@mui/material/styles';
import { ListItemText } from '@mui/material';
import { type NavItemChildType } from '..';

export const ListItemTextStyled = styled(ListItemText, {
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
    '> .MuiListItemText-primary': {
      fontSize: depth === 1 ? styles.ROOT_ITEM_TITLE_FONT_SIZE : styles.SUB_ITEM_TITLE_FONT_SIZE,
      fontWeight:
        depth === 1 ? styles.ROOT_ITEM_TITLE_FONT_WEIGHT : styles.SUB_ITEM_TITLE_FONT_WEIGHT,
      color: depth === 1 ? styles.ROOT_ITEM_TITLE_COLOR : styles.SUB_ITEM_TITLE_COLOR,
      ...(active && {
        color: theme.palette.primary.main
      }),
      ...(hover && {
        color: theme.palette.grey['700']
      }),
      ...(here && {
        color: theme.palette.grey['700']
      })
    }
  };
});
