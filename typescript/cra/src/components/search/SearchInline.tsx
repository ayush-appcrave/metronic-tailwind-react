import { KeenIcon } from '@components/keenicons';
import Scrollbar from '@components/scrollbar';
import { Box, Divider, InputBase, useTheme } from '@mui/material';

import { useViewport } from '../../hooks';
import { SearchResults, type SearchResultsType } from './results';

interface PropsType {
  source: string;
  dialog: boolean;
}

const SearchInline = ({ source, dialog = false }: PropsType) => {
  const theme = useTheme();
  const [viewportHeight] = useViewport();

  const dummyData: SearchResultsType = [
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 2',
        badge: {
          label: 'Blog',
          color: 'primary'
        }
      }
    }
  ];

  return (
    <>
      <Box
        component="form"
        sx={{
          px: theme.spacing(3),
					py: theme.spacing(3),
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <KeenIcon
          icon="magnifier"
          sx={{
            fontSize: 18,
            color: theme.palette.grey['600']
          }}
        />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Box
          sx={{
            backgroundColor: theme.palette.grey['100'],
            color: theme.palette.grey['700'],
            fontSize: '13px',
            fontWeight: '600',
            padding: '4px 6px',
            borderRadius: '6px'
          }}
        >
          Esp
        </Box>
      </Box>
      <Divider />
      <Scrollbar
        sx={{
          maxHeight: viewportHeight / 2,
          px: theme.spacing(3),
					py: theme.spacing(3),
          mx: theme.spacing(0)
        }}
      >
        <SearchResults data={dummyData} />
      </Scrollbar>
    </>
  );
};

export { SearchInline };
