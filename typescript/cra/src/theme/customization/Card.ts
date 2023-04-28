import { type Theme } from '@mui/material/styles';

const Card = (theme: Theme) => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.card,
          borderRadius: Number(theme.shape.borderRadius) * 3,
          zIndex: 0 // Fix Safari overflow: hidden with border radius
        }
      }
    }
  };
};

export { Card };
