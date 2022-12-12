import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

const Intro = () => (
  <div>
    <Typography variant="h1" component="h1">
      Page Title
    </Typography>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  </div>
);

export { Intro };
