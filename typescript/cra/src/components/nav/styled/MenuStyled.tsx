import { Menu } from '@mui/material';
import { styled } from '@mui/material/styles';

const MenuStyled = styled(Menu)<any>(({ theme }) => {
  return {
    '.MuiMenu-root': {
      fontSize: '14px',
      fontWeight: theme.typography.fontWeightMedium,
      borderRadius: Number(theme.shape.borderRadius) * 1.5,
      padding: theme.spacing(1.25),
      minHeight: 'auto',
      color: theme.palette.grey['700']
    }
  };
});

export { MenuStyled };
