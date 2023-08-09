import { KeenIcon } from '../components/keenicons';
import { type NavConfigType } from '../components/nav';
import { type PathsType } from '.';

// Auth paths
const PATHS_AUTH: PathsType = {
  login: '/auth/login',
  register: '/auth/register',
  verify: '/auth/verify',
  resetPassword: '/auth/reset-password',
  newPassword: '/auth/new-password'
};

// General paths
const PATHS_GENERAL: PathsType = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500'
};

const NAV_COMMON: Record<string, NavConfigType> = {
  dashboards: [
    {
      key: 'dashboards-multipurpose',
      title: 'Multipurpose',
      path: '/dashboard',
      bullet: true,
      badge: {
        content: 'New',
        color: 'success'
      },
      onClick: () => {
        console.log('New clicked');
      }
    },
    {
      key: 'dashboards-eCommerce',
      title: 'eCommerce',
      path: '/ecommerce',
      bullet: true,
      onClick: () => {
        console.log('New clicked 2');
      }
    },
    {
      key: 'dashboards-eCommerce',
      title: 'Marketing',
      path: '/marketing',
      bullet: true
    },
    {
      key: 'dashboards-eCommerce',
      title: 'Crypto',
      path: 'https://keenthemes.com',
      externalLink: true,
      newTab: true,
      bullet: true
    },
    {
      key: 'dashboards-Projects',
      title: 'Projects',
      path: 'https://keenthemes.com',
      externalLink: true,
      bullet: true
    }
  ],
  pages: [
    {
      title: 'Page 1',
      path: '#pages/page-1',
      bullet: true
    },
    {
      title: 'Page 2',
      path: '#pages/page-1',
      bullet: true,
      children: {
        variant: {
          breakpoints: {
            up: {
              md: 'dropdown'
            },
            down: {
              md: 'inline'
            }
          }
        },
        direction: 'vertical',
        accordion: {
          breakpoints: {
            up: {
              md: false
            },
            down: {
              md: true
            }
          }
        },
        toggle: {
          breakpoints: {
            up: {
              md: 'hover'
            },
            down: {
              md: 'click'
            }
          }
        },
        items: [
          {
            title: 'Page 1',
            path: '#auth/page-1',
            disabled: true,
            bullet: true
          },
          {
            title: 'Page 2',
            path: '#auth/page-2',
            bullet: true
          },
          {
            title: 'Page 3',
            path: '#auth/page-3',
            bullet: true
          }
        ]
      }
    },
    {
      title: 'Submenu',
      bullet: true
    },
    {
      title: 'Page 3',
      path: '#pages/page-1',
      bullet: true
    }
  ],
  authentication: [
    {
      title: 'Page 1',
      path: '#auth/page-1',
      bullet: true
    },
    {
      title: 'Page 2',
      path: '#auth/page-2',
      bullet: true
    },
    {
      title: 'Page 3',
      path: '#auth/page-3',
      bullet: true
    }
  ],
  account: [
    {
      title: 'Page 1',
      path: '#account/page-1',
      bullet: true
    },
    {
      title: 'Page 2',
      path: '#account/page-2',
      bullet: true
    },
    {
      title: 'Page 3',
      path: '#account/page-3',
      bullet: true
    }
  ],
  apps: [
    {
      title: 'Page 1',
      path: '#apps/page-1',
      bullet: true
    },
    {
      title: 'Page 2',
      path: '#apps/page-2',
      bullet: true
    },
    {
      title: 'Page 3',
      path: '#apps/page-3',
      bullet: true
    }
  ],
  crud: [
    {
      title: 'Default',
      path: 'users-management/default',
      bullet: true
    },
    {
      title: 'Overlay modal',
      path: '/users-management/overlay-modal',
      bullet: true
    },
    {
      title: 'Drawers',
      path: '/users-management/drawers',
      bullet: true
    },
    {
      title: 'Inline editing',
      path: '/users-management/inline-editing',
      bullet: true
    },
    {
      title: 'Sub CRUD',
      path: '/users-management/sub-crud',
      bullet: true
    },
    {
      title: 'Skeleton loading',
      path: '/users-management/skeleton',
      bullet: true
    },
    {
      title: 'Data Grid',
      path: '/users-management/data-grid',
      bullet: true
    }
  ]
};

const NAV_VERTICAL: NavConfigType = [
  {
    title: 'Dashboards',
    icon: <KeenIcon icon="calendar" />,
    children: {
      variant: 'inline',
      direction: 'vertical',
      toggle: 'click',
      accordion: true,
      items: NAV_COMMON.dashboards
    }
  },
  {
    title: 'Pages',
    icon: <KeenIcon icon="calendar" />,
    tabIndex: 0,
    children: {
      variant: {
        breakpoints: {
          up: {
            md: 'dropdown'
          },
          down: {
            md: 'inline'
          }
        }
      },
      accordion: {
        breakpoints: {
          up: {
            md: false
          },
          down: {
            md: true
          }
        }
      },
      toggle: {
        breakpoints: {
          up: {
            md: 'click'
          },
          down: {
            md: 'click'
          }
        }
      },
      items: NAV_COMMON.pages
    }
  },
  {
    title: 'Authentication',
    icon: <KeenIcon icon="calendar" />,
    children: {
      accordion: true,
      items: NAV_COMMON.authentication
    }
  },
  {
    title: 'Account',
    icon: <KeenIcon icon="calendar" />,
    children: {
      accordion: true,
      items: NAV_COMMON.account
    }
  },
  {
    title: 'Apps',
    icon: <KeenIcon icon="calendar" />,
    children: {
      accordion: true,
      items: NAV_COMMON.apps
    }
  },
  {
    title: 'CRUD',
    icon: <KeenIcon icon="calendar" />,
    children: {
      accordion: true,
      items: NAV_COMMON.crud
    }
  },
  {
    divider: true
  },
  {
    title: 'Documentation',
    icon: <KeenIcon icon="calendar" />,
    path: 'previews.keenthemes.com/hero/mui/docs'
  },
  {
    title: 'Changelog',
    icon: <KeenIcon icon="calendar" />,
    path: 'previews.keenthemes.com/hero/mui/docs/#/changelog'
  }
];

export { NAV_COMMON, NAV_VERTICAL, PATHS_AUTH, PATHS_GENERAL };
