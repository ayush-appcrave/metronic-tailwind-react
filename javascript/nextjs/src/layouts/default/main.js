
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
import { DEFAULT_LAYOUT } from '../../config';

const Root = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset',
});

Main.propTypes = {
  isCollapse: PropTypes.bool,
  onOpenSidebar: PropTypes.func,
};

export default function Main({ onOpenSidebar, isCollapse = false }) {
  return (
    <Root isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
     Footer
    </Root>
  );
}
