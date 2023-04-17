import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { IntroTitle, IntroSubTitle, IntroBreadcrumbs, IntroType } from './';

const Intro = ({ title, subTitle, breadcrumbs }: IntroType) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column'
      }}
    >
      {title && (
        <IntroTitle>
          {title}

          {subTitle && <IntroSubTitle>{subTitle}</IntroSubTitle>}
        </IntroTitle>
      )}

      {breadcrumbs && <IntroBreadcrumbs breadcrumbs={breadcrumbs} />}
    </Box>
  );
};

export { Intro };
