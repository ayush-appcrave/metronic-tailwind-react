import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Link,
  ListItemIcon,
  MenuItem,
  Stack,
  useTheme
} from '@mui/material';
import { type MouseEvent, useState } from 'react';
import { toAbsoluteUrl } from 'utils';

import { useAuthContext } from '../../../auth/useAuthContext';
import { KeenIcon, MenuDropdown } from '../../../components';

const HeaderUserMenu = () => {
  const theme = useTheme();
  const { currentUser, logout } = useAuthContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          borderRadius: '6px',
          p: '0px'
        }}
        aria-haspopup="true"
        aria-controls={open ? 'user-account-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar
          src={toAbsoluteUrl('/media/avatars/300-3.jpg')}
          sx={{
            borderRadius: '6px',
            width: 40,
            height: 40
          }}
        />
      </IconButton>
      <MenuDropdown
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
            [theme.breakpoints.up('lg')]: {
              width: '200px'
            },
            [theme.breakpoints.down('lg')]: {
              width: '200px'
            }
          }
        }}
      >
        <Box
          sx={{
            pt: 0.75,
            pb: 0.25,
            px: 2.5,
            lineHeight: 1.15
          }}
        >
          <Box
            sx={{
              fontSize: '14px',
              fontWeight: theme.typography.fontWeightMedium,
              color: theme.palette.grey['800'],
              LineHeight: 1
            }}
          >
            {/* {currentUser?.first_name} {currentUser?.last_name} */}
          </Box>

          <Link
            href={`mailto:{currentUser!.email}`}
            sx={{
              fontSize: '12px',
              fontWeight: theme.typography.fontWeightMedium,
              textDecoration: 'none'
            }}
          >
            {currentUser?.email}
          </Link>
        </Box>

        <Divider sx={{ my: 1, borderStyle: 'dashed' }} />

        <Stack sx={{ px: 1 }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <KeenIcon icon="user" />
            </ListItemIcon>
            My Profile
          </MenuItem>

          <MenuItem onClick={handleClose} selected={false}>
            <ListItemIcon>
              <KeenIcon icon="setting-2" />
            </ListItemIcon>
            Account Settings
          </MenuItem>

          <MenuItem onClick={handleClose} selected={false}>
            <ListItemIcon>
              <KeenIcon icon="sms" />
            </ListItemIcon>
            My Inbox
          </MenuItem>

          <MenuItem onClick={handleClose} selected={false}>
            <ListItemIcon>
              <KeenIcon icon="calendar" />
            </ListItemIcon>
            Calendar
          </MenuItem>
        </Stack>

        <Divider sx={{ my: 1, borderStyle: 'dashed' }} />

        <MenuItem
          onClick={() => {
            logout();
          }}
          sx={{ mx: 1 }}
        >
          <ListItemIcon>
            <KeenIcon icon="entrance-left" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </MenuDropdown>
    </Box>
  );
};

export { HeaderUserMenu };
