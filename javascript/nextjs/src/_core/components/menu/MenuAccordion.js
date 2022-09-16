import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { LAYOUT_DEFAULT } from '../../../config';
import Logo from './Logo';
import CollapseButton from './CollapseButton';
import { useLayout } from '../context';

MenuItem.propTypes = {
	itemConfig: PropTypes.object,
	level: PropTypes.number,
  onClick: PropTypes.func,

};

export default function MenuItem({Config}) {
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
            data={item}
            level={1}
            hasChildren={!!item.children}
            isCollapse={isCollapse}
          />
        ))}
      </List>      
    </Box>
  );
}
