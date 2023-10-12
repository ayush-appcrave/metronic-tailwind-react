import { type Theme } from '@mui/material/styles';

const Menu = (theme: Theme) => {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 6,
          boxShadow: theme.customShadows.menu,
          backgroundColor: theme.palette.background.paper
        },
        list: {
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          fontWeight: theme.typography.fontWeightMedium,
          borderRadius: 6,
          minHeight: 'auto',
          color: theme.palette.grey['700'],
          paddingTop: 9,
          paddingBottom: 9,
          paddingLeft: 12,
          paddingRight: 12,
          marginTop: 3,
          marginBottom: 3,
          marginLeft: 8,
          marginRight: 8,
          '&.Mui-selected, &.Mui-selected.Mui-focusVisible': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover
            }
          }
        }
      }
    },
    MuiMenuItemIcon: {
      stylesOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          width: 18,
          height: 18,
          i: {
            color: theme.palette.grey['500'],
            fontSize: 15
          }
        }
      }
    }
  };
};

export { Menu };
