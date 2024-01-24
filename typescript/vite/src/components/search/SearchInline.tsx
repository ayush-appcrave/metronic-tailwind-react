import { Box, Divider, InputBase, useTheme } from '@mui/material';

import { KeenIcon } from '@/components/keenicons';

import { useViewport } from '../../hooks';
import { SearchResults, type SearchResultsType } from './results';

interface PropsType {
  dataSource: string;
  handleClose?: () => void;
}

const SearchInline = ({ dataSource, handleClose }: PropsType) => {
  const theme = useTheme();
  const [viewportHeight] = useViewport();

  const dummyData: SearchResultsType = [
    {
      general: {
        path: 'ecommerce',
        title: 'Example title 1',
        subTitle:
          'Description goes here Description goes here Description goes here Description goes',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here'
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here'
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 1',
        subTitle: 'Description goes here',
        category: {
          label: 'Blog',
          color: 'primary'
        }
      }
    },
    {
      general: {
        path: '#',
        title: 'Example title 2',
        subTitle: 'Description goes here',
        category: {
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
          autoFocus
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
          Esc
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          py: theme.spacing(2.5)
        }}
      >
        <Box
          sx={{
            px: theme.spacing(3)
          }}
        >
          <SearchResults data={dummyData} {...(handleClose && { handleClose })} />
        </Box>
      </Box>
    </>
  );
};

export { SearchInline };
