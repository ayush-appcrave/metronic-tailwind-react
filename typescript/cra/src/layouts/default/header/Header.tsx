import { Box, alpha, useTheme } from '@mui/material';
import { PageContainer } from '@components/page-container';
import useResponsive from '../../../hooks/useResponsive';
import { useDefaultLayout, DefaultLayoutStylesConfig } from '../';
import { HeaderMobileLogo } from './HeaderMobileLogo';
import { HeaderSearch } from './HeaderSearch';
import { HeaderNotificationsMenu } from './HeaderNotificationsMenu';
import { HeaderMessagesMenu } from './HeaderMessagesMenu';
import { HeaderLanguageMenu } from './HeaderLanguageMenu';
import { HeaderUserMenu } from './HeaderUserMenu';
import { HeaderModeSwitcher } from './HeaderModeSwitcher';

const Header = () => {
  const { isHeaderSticky, sidebarWidth } = useDefaultLayout();
  const theme = useTheme();
  const isMobile = useResponsive('down', 'lg');
  const styles = DefaultLayoutStylesConfig();
  const leftTransition =
    'left ' + styles.SIDEBAR_TRANSITION_DURATION + ' ' + styles.SIDEBAR_TRANSITION_TIMING_FUNCTION;
  const heightTransition =
    'height ' + styles.HEADER_TRANSITION_DURATION + ' ' + styles.HEADER_TRANSITION_TIMING_FUNCTION;

  return (
    <Box
      component="header"
      className="mui-fixed"
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'transparent',
        transition: heightTransition,

        [theme.breakpoints.up('lg')]: {
          transition: heightTransition + ', ' + leftTransition,
          left: sidebarWidth,
          height: styles.HEADER_HEIGHT + 'px',
          ...(isHeaderSticky && {
            height: styles.HEADER_STICKY_HEIGHT + 'px'
          })
        },

        [theme.breakpoints.down('lg')]: {
          height: styles.HEADER_HEIGHT_MOBILE + 'px',
          ...(isHeaderSticky && {
            height: styles.HEADER_STICKY_HEIGHT_MOBILE + 'px'
          })
        },

        ...(isHeaderSticky && {
          transition: heightTransition,
          zIndex: styles.HEADER_STICKY_ZINDEX,
          backgroundColor: alpha(theme.palette.background.default, 0.8),
          backdropFilter: styles.HEADER_STICKY_BACKDROP_FILTER
        })
      }}>
      <PageContainer
        width="fluid"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch'
        }}>
        {isMobile && <HeaderMobileLogo />}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'stretch',
            [theme.breakpoints.up('lg')]: {
              justifyContent: 'space-between',
              flexGrow: 1
            },
            [theme.breakpoints.down('lg')]: {
              justifyContent: 'flex-end',
              gap: '8px'
            }
          }}>
          <HeaderSearch />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              [theme.breakpoints.up('lg')]: {
                gap: '20px'
              },
              [theme.breakpoints.down('lg')]: {
                gap: '10px'
              }
            }}>
            <HeaderNotificationsMenu />
            <HeaderMessagesMenu />
            <HeaderLanguageMenu />
            <HeaderUserMenu />
            <HeaderModeSwitcher />
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
};

export { Header };
