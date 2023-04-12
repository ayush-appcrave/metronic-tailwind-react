import { PropsWithChildren } from "react";
import { Typography, useTheme } from "@mui/material";

type PropsType = {
  children: React.ReactNode;
};

const IntroSubTitle = ({children}: PropsType) => {
  const theme = useTheme();

  return (
    <Typography 
      component="span"
      sx={{
        fontSize: "14px",
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.grey["500"],
        ml: theme.spacing(1)
      }}
    >
      {children}
    </Typography>
  )  
};

export { IntroSubTitle };
