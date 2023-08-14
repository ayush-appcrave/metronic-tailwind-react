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

import { useAuth } from '../../../auth';
import { KeenIcon } from '../../../components';
import { Nav, NavConfigType } from '../../../components/nav';

const HeaderUserMenu = () => {
  const theme = useTheme();
  const { currentUser, logout } = useAuth();

  const menuButton = (
    <Avatar
      src={toAbsoluteUrl('/media/avatars/300-3.jpg')}
      sx={{
        borderRadius: '6px',
        width: 40,
        height: 40
      }}
    />
  );

  const navItemsConfig: NavConfigType = [
    {
      item: menuButton,
      sx: {
        borderRadius: '6px',
      },
      children: {
        menu: true,
        menuProps: {
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'bottom'
          },
          transformOrigin: {
            horizontal: 'right',
            vertical: 'top'
          }
        },
        arrow: false,
        toggle: 'click',
        items: [
          {
            title: 'Title',
            icon: <KeenIcon icon="calendar" />
          },
          {
            title: 'Title',
            icon: <KeenIcon icon="calendar" />
          },
          {
            title: 'Title',
            icon: <KeenIcon icon="calendar" />
          },
          {
            divider: true
          },
          {
            title: 'Logout',
            icon: <KeenIcon icon="calendar" />
          }
        ]
      }
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
    </Box>
  );
};

export { HeaderUserMenu };
