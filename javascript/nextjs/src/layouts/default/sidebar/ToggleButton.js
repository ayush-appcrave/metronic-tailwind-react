import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import SvgIcon from '../../../_core/components/SvgIcon';

ToggleButton.propTypes = {
  onToggle: PropTypes.func,
  isSidebarCollapse: PropTypes.bool
};

export default function ToggleButton({onToggle, isSidebarCollapse = false}) {
    
  return (
    <IconButton 
      sx={{ 
        height: '32px', 
        width: '32px', 
        backgroundColor: 'background.paper', 
        boxShadow: '0px 4px 6px rgba(130, 132, 140, 0.1)',
        borderRadius: '6px',
        padding: '0px',
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }} 
      onClick={onToggle}
      aria-label="Toggle sidebar" 
      component="button"
    >
      <Box
        component="span"
        sx={{ 
          lineHeight: 0,
          ...(isSidebarCollapse && { transform: 'rotate(180deg)' })
        }}
      >
        <SvgIcon icon='arrows/arr079.svg' size='19px' />    
      </Box>
    </IconButton>
  );
}