import { PropsWithChildren } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const Content = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        [theme.breakpoints.up("lg")]: {
          px: 3,
        },
        [theme.breakpoints.down("lg")]: {
          px: 2,
        },
      }}
    >
      {children}
    </Box>
  );
};

export { Content };
