import { useState, useEffect } from 'react';
import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Typography, Tooltip, useTheme } from '@mui/material';
import { KeenIcon } from "../../../components";

const HeaderUserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        
      }}
    >
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ 
            borderRadius: "6px",
            p: "0px",
            ml: 2 
          }}
          aria-haspopup="true"
          aria-controls={open ? 'user-account-menu' : undefined}          
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar 
            src="/media/avatars/default.png" 
            sx={{ 
              borderRadius: "6px",
              width: 40, 
              height: 40, 
            }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="user-account-menu"
        disableScrollLock={false}
        anchorEl={anchorEl}        
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ 
          horizontal: 'right', 
          vertical: 'top' 
        }}
        anchorOrigin={{ 
          horizontal: 'right', 
          vertical: 'bottom' 
        }}
        PaperProps={{
          sx: {
            mt: 0.5,
          }
        }}       
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> 
          Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <KeenIcon icon="setting-2"/>
          </ListItemIcon>
          Add another account
        </MenuItem>
      </Menu>
    </Box>
  );
};

export { HeaderUserMenu };