import { Menu } from '@mui/material';
import { styled } from '@mui/material/styles';

const MenuDropdown = styled(Menu)<any>(({ theme }) => {
  return {
    '.MuiMenu-paper.MuiPopover-paper': {
      width: '200px',
      borderRadius: Number(theme.shape.borderRadius) * 1.75,
      boxShadow: theme.customShadows.menu,
      backgroundColor: theme.palette.background.paper
    },
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
