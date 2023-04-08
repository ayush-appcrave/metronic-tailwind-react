import { Theme } from '@mui/material/styles';

const Menu = (theme: Theme) => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[3]
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
  };
}

export { Menu };