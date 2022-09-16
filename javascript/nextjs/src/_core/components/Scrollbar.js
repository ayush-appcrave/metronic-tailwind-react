import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import isMobileDevice from '../utils/isMobileDevice';

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.any,
  minHeight: PropTypes.any,
  maxHeight: PropTypes.any,
  size: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string
};

export default function Scrollbar({children, height = '100%', minHeight, maxHeight, variant = 'default', size = '6px', color = 'grey.200'}) {
  if (isMobileDevice()) {
    return (
      <Box 
        sx={{ 
          overflow: 'auto',
          ...(height && { height: height }),
          ...(minHeight && { minHeight: minHeight }),
          ...(maxHeight && { maxHeight: maxHeight }) 
        }}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box      
      sx={{
        position: 'relative',
        scrollbarWidth: 'thin',
        scrollbarColor: color,
        ...(height && { 
          height: height
        }),
        ...(minHeight && { 
          minHeight: minHeight
        }),
        '&::-webkit-scrollbar': {
          width: size,
          height: size
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: color,
          borderRadius: '6px'
        },
        '&::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent'
        },        
        ...(variant === 'default' && { 
          overflowY: 'hidden',
          borderRight: size,
          borderBottom: size,
          marginRight: size,
          '&:hover': {
            overflowY: 'scroll',
            borderRight: '0',
            borderBottom: '0'
          },
          '@-moz-document url-prefix()': {
            overflowY: 'scroll',
            position: 'relative',
            borderRight: '0',
            borderBottom: '0'
          }
        }),
        ...(variant === 'scroll-y' && { 
          overflowY: 'hidden',
          borderRight: size + ' solid transparent;',
          marginRight: '-' + size,
          '&:hover': {
            overflowY: 'scroll',
            borderRight: '0'
          },
          '@-moz-document url-prefix()': {
            overflowY: 'scroll',
            position: 'relative',
            borderRight: '0'
          }
        }),
        ...(variant === 'scroll-x' && { 
          overflowX: 'hidden',
          borderBottom: size,
          marginRight: size,
          '&:hover': {
            overflowX: 'scroll',
            borderBottom: '0'
          },
          '@-moz-document url-prefix()': {
            overflowY: 'scroll',
            position: 'relative',
            borderBottom: '0'
          }
        })
      }}
    >
      {children}
    </Box>
  );
}
