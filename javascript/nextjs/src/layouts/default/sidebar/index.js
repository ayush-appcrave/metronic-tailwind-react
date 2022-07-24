import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
import cssStyles from '../../../utils/cssStyles';
import { DEFAULT_LAYOUT } from '../../../config';

const Root = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset',
});

Sidebar.propTypes = {
  isCollapse: PropTypes.bool,
  onOpenSidebar: PropTypes.func,
};

export default function Sidebar({ onOpenSidebar, isCollapse = false }) {
  return (
    <Root isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
     Sidebar
    </Root>
  );
}
