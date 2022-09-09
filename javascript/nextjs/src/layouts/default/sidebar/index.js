import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
import useResponsive from '../../../_core/hooks/useResponsive';
import { LAYOUT_DEFAULT } from '../../../config';
import Logo from './Logo';

const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export default function Sidebar() {
  const isDesktop = useResponsive('up', 'lg');

  //const { isCollapse, collapseClick, collapseHover, onToggleCollapse, onHoverEnter, onHoverLeave } = useCollapseDrawer();

  const renderContent = (
    <Stack
      spacing={3}
      sx={{
        pt: 3,
        pb: 2,
        px: 2.5,
        flexShrink: 0,
        //...(isCollapse && { alignItems: 'center' }),
      }}
    >
      <Logo />
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
              borderRightStyle: 'dashed',
              bgcolor: 'gray.100'
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Root>
  );
}
