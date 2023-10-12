import { Avatar, Box, Button, useTheme } from '@mui/material';
import { useRef } from 'react';
import { toAbsoluteUrl } from 'utils';

import { useAuthContext } from '../../../auth';
import { KeenIcon } from '../../../components';
import { Nav, NavItem, NavItemButton, NavItemSub } from '../../../components/nav';

const HeaderUserMenu = () => {
  const { logout } = useAuthContext();
  const itemRef = useRef<any>(null);
  const theme = useTheme();

  const closeMenu = () => {
    // here need to close menu with NavItem closeMenu function
    console.log('ref:' + itemRef.current);

    itemRef?.current.closeMenu();
  };

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
            toggle={{
              breakpoints: {
                up: {
                  md: 'hover'
                },
                down: {
                  md: 'click'
                }
              }
            }}
            menu={true}
            menuWidth="200px"
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
            <NavItem
              color={theme.palette.error.main}
              path="#"
              title="Title Wow"
              icon={<KeenIcon icon="calendar" />}
            />
            <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
            <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
            <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
            <NavItem title="Title" icon={<KeenIcon icon="calendar" />}>
              <NavItemSub
                toggle={{
                  breakpoints: {
                    up: {
                      md: 'hover'
                    },
                    down: {
                      md: 'click'
                    }
                  }
                }}
                menu={true}
                menuWidth="200px"
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
                <NavItem title="Title" icon={<KeenIcon icon="calendar" />}>
                  <NavItemSub
                    toggle={{
                      breakpoints: {
                        up: {
                          md: 'hover'
                        },
                        down: {
                          md: 'click'
                        }
                      }
                    }}
                    menu={true}
                    menuWidth="200px"
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
                    scrollbar={true}
                    scrollbarSx={{
                      height: 250
                    }}
                  >
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                    <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
                  </NavItemSub>
                </NavItem>
                <NavItem itemRef={itemRef} title="LaLaLa" icon={<KeenIcon icon="calendar" />}>
                  <NavItemSub
                    toggle={{
                      breakpoints: {
                        up: {
                          md: 'hover'
                        },
                        down: {
                          md: 'click'
                        }
                      }
                    }}
                    menu={true}
                    menuWidth="200px"
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
                    <Button variant="contained" onClick={closeMenu}>
                      Close Menu
                    </Button>
                  </NavItemSub>
                </NavItem>
                <NavItem path="#" title="Title" icon={<KeenIcon icon="calendar" />} />
              </NavItemSub>
            </NavItem>
            <NavItem divider={true} />
            <NavItem title="Logout" onLinkClick={logout} icon={<KeenIcon icon="calendar" />} />
          </NavItemSub>
        </NavItem>
      </Nav>
    </Box>
  );
};

export { HeaderUserMenu };
