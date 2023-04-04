import { Box, Container } from '@mui/material';
import { useSettings } from "../../../providers/SettingsProvider";

const Footer = () => {
  const { settings } = useSettings();
  const { container } = settings;

  return (
    <Box
      component="footer"
    >
      <Container 
        maxWidth={container === "fixed" ? 'lg' : false}
        sx={{
          display: "flex",
          alignItems: "center"
        }}
      >
        Footer
      </Container>
    </Box>
  );
};

export { Footer };
