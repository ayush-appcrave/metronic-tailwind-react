import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, ToggleButton } from '@mui/material';
import SvgIcon from '../../../_core/components/SvgIcon';
import { useLayout } from '../context';

CollapseButton.propTypes = {
  onToggle: PropTypes.func,
  isSidebarCollapse: PropTypes.bool
};

export default function CollapseButton({onToggle}) {
  const {isSidebarCollapse} = useLayout();

  const buttonSize = '32px';

  return (
    <ToggleButton 
      sx={{ 
        height: buttonSize, 
        width: buttonSize, 
        minWidth: buttonSize,
        color: 'grey.600',
        backgroundColor: 'background.paper', 
        boxShadow: '0px 4px 6px rgba(130, 132, 140, 0.1)',
        borderRadius: '6px',
        border: '0px',
        padding: '0px',
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        '&:hover, &.Mui-selected, &.Mui-selected:hover': {
          backgroundColor: 'background.paper', 
          color: 'primary.main',
          opacity: 1
        }
      }} 
      onClick={onToggle}
      selected={isSidebarCollapse}
      aria-label="Toggle sidebar" 
      component="button"
      value="1"
    >
      <Box
        component="span"
        sx={{ 
          lineHeight: 0,
          ...(isSidebarCollapse && { transform: 'rotate(180deg)' })
        }}
      >
        <SvgIcon icon='arrows/arr079.svg' size='19px'/>    
      </Box>
    </ToggleButton>
  );
}