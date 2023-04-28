import { type Theme, type CheckboxProps } from '@mui/material';
import { CheckboxIcon, CheckboxCheckedIcon, CheckboxIndeterminateIcon } from './Icons';

const Checkbox = (theme: Theme) => {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />
      },

      styleOverrides: {
        root: ({ ownerState }: { ownerState: CheckboxProps }) => ({
          color: theme.palette.grey['500'],
          padding: theme.spacing(1),
          ...(ownerState.size === 'small' && {
            '& svg': { width: 20, height: 20 }
          }),
          ...(ownerState.size === 'medium' && {
            '& svg': { width: 24, height: 24 }
          })
        })
      }
    }
  };
};

export { Checkbox };
