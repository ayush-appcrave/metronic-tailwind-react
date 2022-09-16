import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import useResponsive from '../../../_core/hooks/useResponsive';
import { LAYOUT_DEFAULT } from '../../../config';
import Logo from './Logo';
import CollapseButton from './CollapseButton';
import { useLayout } from '../context';

Menu.propTypes = {
	navConfig: PropTypes.object,
	variant: PropTypes.string,
  onItemClick: PropTypes.func
};

export default function Menu({navConfig, variant}) {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'lg');

  const isMobile = useResponsive('down', 'lg');

  return (
    <Box>
      <List
        component="nav"
        aria-labelledby="menu"
        sx={{ 
          width: '100%', 
        }}        
      >
        {navConfig.map((item) => (
          <MenuItem
            key={item.title + item.path}
            itemConfig={item}
            level={1}
            hasChildren={!!item.children}
            isCollapse={isCollapse}
          />
        ))}
      </List>      
    </Box>
  );
}
