import { type ReactNode } from 'react';
import { Typography, useTheme } from '@mui/material';

interface PropsType {
  children: ReactNode;
}

const IntroSubTitle = ({ children }: PropsType) => {
  const theme = useTheme();

  return (
    <Typography
      component="span"
      sx={{
        fontSize: '14px',
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.grey['500'],
        ml: theme.spacing(1)
      }}>
      {children}
    </Typography>
  );
};

export { IntroSubTitle };
