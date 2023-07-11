import { Popover } from '@mui/material';
import { styled } from '@mui/material/styles';

const PopoverStyled = styled(Popover)<any>(({ theme }) => {
  return {
    '.MuiPopover-root': {
      fontSize: '14px',
      fontWeight: theme.typography.fontWeightMedium,
      borderRadius: Number(theme.shape.borderRadius) * 1.5,
      padding: theme.spacing(1.25),
      minHeight: 'auto',
      color: theme.palette.grey['700']
    }
  };
});

export { PopoverStyled };
