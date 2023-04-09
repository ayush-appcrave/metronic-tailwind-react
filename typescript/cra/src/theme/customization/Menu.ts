import { Theme } from '@mui/material/styles';

const Menu = (theme: Theme) => {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {          
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
          '&.Mui-selected.Mui-focusVisible': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    }
  };
}

export { Menu };