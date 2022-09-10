import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import SvgIcon from '../../../_core/components/SvgIcon';

export default function ToggleButton() {
  return (
    <IconButton 
      sx={{ 
        height: '32px', 
        width: '32px', 
        cursor: 'pointer', 
        backgroundColor: 'background.paper', 
        boxShadow: '0px 4px 6px rgba(130, 132, 140, 0.1)',
        borderRadius: '6px',
        padding: '0px',
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }} 
      aria-label="Toggle sidebar" 
      component="button"
    >

      <SvgIcon icon='arrows/arr079.svg' size="19px" />
    
    </IconButton>
  );
}