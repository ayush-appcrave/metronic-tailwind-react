import { alpha, styled } from '@mui/material/styles';
import { Menu } from '@mui/material';
import { NavItemChildType } from '..';

const MenuDropdown = styled(Menu)<any>(({ theme }) => {
  return {
    '.MuiMenuItem-root': {
      fontSize: '14px',
      fontWeight: theme.typography.fontWeightMedium,
      borderRadius: Number(theme.shape.borderRadius) * 1.5,
      padding: theme.spacing(1.25),
      minHeight: 'auto',
      color: theme.palette.grey['700'],

      '.MuiListItemIcon-root': {
        display: 'flex',
        alignItems: 'center',
        minWidth: '25px',
        i: {
          color: theme.palette.grey['500'],
          fontSize: '17px'
        }
      }
    }
  };
});

export { MenuDropdown };
