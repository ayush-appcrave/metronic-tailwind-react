import { alpha, styled } from '@mui/material/styles';
import { ListItemIcon } from '@mui/material';

export const ListItemIconCustom = styled(ListItemIcon)({
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': { 
    width: '100%', 
    height: '100%' 
  }
});

