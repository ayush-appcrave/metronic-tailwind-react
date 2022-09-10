import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
import useResponsive from '../../../_core/hooks/useResponsive';
import { LAYOUT_DEFAULT } from '../../../config';
import Logo from './Logo';
import ToggleButton from './ToggleButton';

const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export default function Sidebar() {
  const isDesktop = useResponsive('up', 'lg');

  //const { isCollapse, collapseClick, collapseHover, onToggleCollapse, onHoverEnter, onHoverLeave } = useCollapseDrawer();

  const renderContent = (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        pt: 3,
        pb: 2,
        px: 2.5,
        flexShrink: 0,
        position: 'relative'
      }}
    >
      <Logo />

      <ToggleButton />
    </Stack>
  );

  return (
    <Root>
     {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: LAYOUT_DEFAULT.SIDEBAR_WIDTH,
              borderRightWidth: '0px',
              overflow: 'visible',
              bgcolor: 'background.paper'
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Root>
  );
}
