import { PropsWithChildren } from "react";
import { Box, useTheme } from "@mui/material";
import { useSettings } from "../../../providers/SettingsProvider";
import { PageContainer } from "@components/page-container";

type PropsType = {
  children: React.ReactNode;
};

const Toolbar = ({ children }: PropsWithChildren) => {
  const theme = useTheme();  
  
  return (
    <Box
      sx={{
        mb: theme.spacing(2)
      }}
    >
      <PageContainer>
        {children}
      </PageContainer>      
    </Box>
  );
};

export { Toolbar };
