import { type Theme } from '@mui/material/styles';

const Table = (theme: Theme) => {
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: theme.palette.grey['100'] + ' !important'
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.grey['200'],
            '&:hover': {
              backgroundColor: theme.palette.grey['100']
            }
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none'
        },
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral
        },
        stickyHeader: {
          backgroundColor: theme.palette.background.paper
        },
        paddingCheckbox: {
          paddingLeft: theme.spacing(2),
          minWidth: '60px'
        }
      }
    }
  };
};

export { Table };
