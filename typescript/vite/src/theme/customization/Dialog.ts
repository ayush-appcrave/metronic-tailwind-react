import { type Theme } from '@mui/material/styles';

const Dialog = (theme: Theme) => {
  return {
    MuiDialog: {
      styleOverrides: {
        root: {
          '.MuiBackdrop-root': {
            backgroundColor: theme.palette.background.backdrop
          },
          '.MuiPaper-root': {
            borderRadius: 12,
            boxShadow: theme.customShadows.dialog,
            backgroundColor: theme.palette.background.paper
          }
        }
      }
    }
  };
};

export { Dialog };
