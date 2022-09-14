import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useLayout } from '../context';

Logo.propTypes = {
  sx: PropTypes.object,
  isSidebarCollapse: PropTypes.bool
};

export default function Logo() {
  const {isSidebarCollapse} = useLayout();

  return (
    <NextLink href="/">
      <a style={{lineHeight: '0px'}}>      
        <img src="/media/logos/default.svg" alt="logo" style={{ display: isSidebarCollapse ? 'none' : 'inline-block', height: '30px', maxWidth: 'none', cursor: 'pointer'}}/>      
        <img src="/media/logos/default-mini.svg" alt="logo" style={{ display: isSidebarCollapse ? 'inline-block' : 'none', height: '30px', maxWidth: 'none', cursor: 'pointer'}}/>
      </a>      
    </NextLink>
  );
}