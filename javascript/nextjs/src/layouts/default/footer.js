
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
import { DEFAULT_LAYOUT } from '../../config';

const Root = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset',
});

Footer.propTypes = {
  isCollapse: PropTypes.bool,
  onOpenSidebar: PropTypes.func,
};

export default function Footer() {
  return (
    <Root>
     Footer
    </Root>
  );
}
