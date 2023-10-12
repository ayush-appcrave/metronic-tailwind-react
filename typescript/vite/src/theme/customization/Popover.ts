import { type Theme } from '@mui/material/styles';

const Popover = (theme: Theme) => {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.popover,
          borderRadius: Number(theme.shape.borderRadius) * 2.75
        }
      }
    }
  };
};

export { Popover };
