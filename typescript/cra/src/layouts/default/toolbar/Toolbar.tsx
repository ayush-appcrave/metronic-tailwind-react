import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import { Intro } from "../intro";
import { useSettings } from "../../../providers/SettingsProvider";
import { useToolbar } from "./ToolbarProvider";

const Toolbar = () => {
  const theme = useTheme();  
  const { settings } = useSettings();
  const { container } = settings;  
  const { introTitle, introSubTitle, introBreadcrumbs } = useToolbar();

  return (
    <Box
      sx={{
        mb: theme.spacing(2)
      }}
    >
      <Container 
        maxWidth={container === "fixed" ? 'lg' : false}
      >
        <Intro
          title={introTitle}
          subTitle={introSubTitle}
          breadcrumbs={introBreadcrumbs}
        />
      </Container>      
    </Box>
  );
};

export { Toolbar };
