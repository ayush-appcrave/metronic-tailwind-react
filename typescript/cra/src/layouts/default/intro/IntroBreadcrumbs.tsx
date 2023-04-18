import { Breadcrumbs, Link, Box, useTheme } from '@mui/material';
import { type NavBreadcrumbsType } from '@components/nav';

interface PropsType {
  breadcrumbs: NavBreadcrumbsType;
}

const IntroBreadcrumbs = ({ breadcrumbs }: PropsType) => {
  const theme = useTheme();

  return (
    <Breadcrumbs
      sx={{
        fontSize: '13px',
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.grey['500'],
        display: 'flex',
        alignItems: 'center',

        '.MuiBreadcrumbs-li': {
          px: theme.spacing(0),
          a: {
            color: theme.palette.grey['700'],
            '&:hover': {
              color: theme.palette.grey['900']
            }
          }
        },
        '.MuiBreadcrumbs-separator': {
          mx: theme.spacing(1.25)
        }
      }}
      separator={
        <Box
          component="span"
          sx={{
            height: '4px',
            width: '4px',
            borderRadius: '4px',
            backgroundColor: theme.palette.grey['400']
          }}
        />
      }
      aria-label="breadcrumbs">
      {breadcrumbs.map((item, index) => {
        if (item.href) {
          return (
            <Link
              key={`breadcrumb-${JSON.stringify(item)}`}
              underline="none"
              href={item.href}
              className={item?.active ? 'Mui-active' : ''}>
              {item.title}
            </Link>
          );
        } else {
          return (
            <Box
              component="span"
              key={`breadcrumb-${JSON.stringify(item)}`}
              className={item?.active ? 'Mui-active' : ''}>
              {item.title}
            </Box>
          );
        }
      })}
    </Breadcrumbs>
  );
};

export { IntroBreadcrumbs };
