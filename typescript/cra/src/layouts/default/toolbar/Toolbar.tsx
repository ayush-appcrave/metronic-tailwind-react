import { PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSettings } from '../../../providers/SettingsProvider';
import { Intro, IntroBreadcrumbsType } from '../intro';

const Toolbar = ({ children }: PropsWithChildren) => {
  const { settings } = useSettings();
  const { container } = settings;
  const theme = useTheme();

  const breadcrumbs: IntroBreadcrumbsType = [
    {
      title: 'Page 1',
      href: 'tedt'
    },
    {
      title: 'Page 1',
      href: 'tedt'
    },
    {
      title: 'Page 3',
      active: true
    }
  ];

  return (
    <Box
      sx={{
        mb: theme.spacing(2)
      }}
    >
      <Container maxWidth={container === 'fixed' ? 'lg' : false}>
        <Intro title="Title" subTitle="Sub title" breadcrumbs={breadcrumbs} />
      </Container>
    </Box>
  );
};

export { Toolbar };
