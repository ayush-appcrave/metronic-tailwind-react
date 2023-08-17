import { Avatar, Box, useTheme } from '@mui/material';
import { toAbsoluteUrl } from 'utils';

import { useAuth } from '../../../auth';
import { KeenIcon } from '../../../components';
import { Nav, NavItem, NavItemButton, NavItemSub } from '../../../components/nav';

const HeaderUserMenu = () => {
  const theme = useTheme();
  const { currentUser, logout } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Nav>
        <NavItem>
          <NavItemButton>
            <Avatar
              src={toAbsoluteUrl('/media/avatars/300-3.jpg')}
              sx={{
                borderRadius: '6px',
                width: 40,
                height: 40
              }}
            />
          </NavItemButton>
          <NavItemSub
            menu={true}
            menuProps={{
              anchorOrigin: {
                horizontal: 'right',
                vertical: 'bottom'
              },
              transformOrigin: {
                horizontal: 'right',
                vertical: 'top'
              }
            }}
          >
            <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
            <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
            <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
            <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
            <NavItem title="Title" icon={<KeenIcon icon="calendar" />}>
              <NavItemSub
                menu="true"
                menuProps={{
                  anchorOrigin: {
                    horizontal: 'left',
                    vertical: 'top'
                  },
                  transformOrigin: {
                    horizontal: 'right',
                    vertical: 'top'
                  }
                }}
              >
                <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
              </NavItemSub>
            </NavItem>
            <NavItem divider={true} />
            <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
          </NavItemSub>
        </NavItem>
      </Nav>
    </Box>
  );
};

export { HeaderUserMenu };
