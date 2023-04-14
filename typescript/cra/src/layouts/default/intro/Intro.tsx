import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { IntroTitle, IntroSubTitle, IntroBreadcrumbs, IntroType } from "./";

const Intro = ({title = "", subTitle = "", breadcrumbs = []}: IntroType) => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
				flexDirection: "column"
      }}
    >
      {(title.length > 0 || subTitle.length > 0) && (
        <IntroTitle>
          {title.length > 0 && title}
          
          {subTitle.length > 0 && (
            <IntroSubTitle>
              {subTitle}
            </IntroSubTitle>
          )}
        </IntroTitle>
      )}

      {breadcrumbs.length > 0 && (
        <IntroBreadcrumbs breadcrumbs={breadcrumbs}/>
      )}  
    </Box>
  )  
};

export { Intro };
