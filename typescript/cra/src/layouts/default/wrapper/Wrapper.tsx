import { PropsWithChildren } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSettings } from "../../../providers/SettingsProvider";
import { useLoading } from "../../../providers/LoadingProvider";
import { LoadingPage } from "../../../components/loading";
import { Toolbar } from "../toolbar";
import { Content } from "../content/Content";

const Wrapper = ({ children }: PropsWithChildren) => {
  const { settings } = useSettings();
  const { container } = settings;
  const theme = useTheme();
  const { pageLoading, setPageLoading } = useLoading();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "1"
      }}
    >
      {pageLoading && <LoadingPage/>}
      <Outlet/>      
    </Box>
  );
};

export { Wrapper };
