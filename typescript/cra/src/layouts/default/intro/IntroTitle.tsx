import { PropsWithChildren } from "react";
import { Typography, useTheme } from "@mui/material";

type PropsType = {
  children: React.ReactNode;
};

const IntroTitle = ({children}: PropsType) => {
  const theme = useTheme();

  return (
    <Typography 
      component="h1"
      sx={{
        fontSize: "23px",
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.grey["900"],
        mb: theme.spacing(0.5)
      }}
    >
      {children}
    </Typography>
  )  
};

export { IntroTitle };
