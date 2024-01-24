import { Box } from '@mui/material';

import { type NavBreadcrumbsPropsType } from '../../../components/nav';
import { IntroBreadcrumbs, IntroSubTitle, IntroTitle } from './';

export interface IntroProps {
  title?: string;
  subTitle?: string;
  breadcrumbs?: NavBreadcrumbsPropsType;
}

const Intro = ({ title = '', subTitle = '', breadcrumbs = [] }: IntroProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column'
      }}
    >
      {(title.length > 0 || subTitle.length > 0) && (
        <IntroTitle>
          {title.length > 0 && title}

          {subTitle.length > 0 && <IntroSubTitle>{subTitle}</IntroSubTitle>}
        </IntroTitle>
      )}

      {breadcrumbs.length > 0 && <IntroBreadcrumbs breadcrumbs={breadcrumbs} />}
    </Box>
  );
};

export { Intro };
