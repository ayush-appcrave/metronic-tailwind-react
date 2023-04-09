import { PropsWithChildren } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSettings } from "../../../providers/SettingsProvider";

const Content = ({ children }: PropsWithChildren) => {
  const { settings } = useSettings();
  const { container } = settings;
  const theme = useTheme();

  return (
    <Box
      sx={{
        [theme.breakpoints.up("lg")]: {
          
        },
        [theme.breakpoints.down("lg")]: {
          
        },
      }}
    >
      <Container 
        maxWidth={container === "fixed" ? 'lg' : false}
      >
        <Outlet/>
      </Container>      
    </Box>
  );
};

export { Content };
