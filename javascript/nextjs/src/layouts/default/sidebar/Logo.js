import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo() {
  return (
    <NextLink href="/">
      <a>
        <Box component="img" src="/media/logos/default.svg" alt="" sx={{ display: 'inline-block', height: 30, cursor: 'pointer'}}>      
        </Box>
        <Box component="img" src="/media/logos/default-mini.svg" alt="" sx={{ display: 'none', height: 30, cursor: 'pointer'}}>      
        </Box>
      </a>      
    </NextLink>
  );
}