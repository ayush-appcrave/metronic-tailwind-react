import { Box, Chip, Link, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { KeenIcon } from '@/components/keenicons';

import { type SearchResultsGeneralType } from './';

const SearchResultsGeneral = ({
  path,
  title,
  subTitle,
  category,
  handleClose
}: SearchResultsGeneralType) => {
  const theme = useTheme();

  return (
    <Link
      to={path}
      component={RouterLink}
      {...(handleClose && { onClick: handleClose })}
      sx={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        gap: 0.5,
        borderRadius: theme.shape.borderRadius,
        py: theme.spacing(0.75),
        px: theme.spacing(1),
        textDecoration: 'none',
        '&:hover': {
          backgroundColor: theme.palette.grey['100']
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexShrink: 0,
          width: '30px',
          pt: theme.spacing(1.1)
        }}
      >
        <KeenIcon
          icon="file"
          sx={{
            fontSize: '20px',
            color: theme.palette.grey['500']
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
          flexGrow: 1
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            flexDirection: 'column'
          }}
        >
          <Typography variant="subtitle1" color={theme.palette.grey['800']}>
            {title}
          </Typography>
          <Typography variant="caption" color={theme.palette.grey['600']}>
            {subTitle}
          </Typography>
        </Box>

        {category && (
          <Box
            sx={{
              pt: theme.spacing(0.75)
            }}
          >
            <Chip label={category.label} color={category.color} variant="outlined" />
          </Box>
        )}
      </Box>
    </Link>
  );
};

export { SearchResultsGeneral };
