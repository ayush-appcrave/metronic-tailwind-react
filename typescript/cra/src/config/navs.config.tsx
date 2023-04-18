import { type NavConfigType } from '../components/nav';
import { KeenIcon } from '../components/keenicons';
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
      path: '/users-management-api',
      bullet: true
    },
    {
      title: 'Overlay modal',
      path: '/users-management-api-overlay-modal',
      bullet: true
    },
    {
      title: 'Drawers',
      path: '/users-management-api-drawers',
      bullet: true
    },
    {
      title: 'Inline editing',
      path: '/users-management-api-inline-editing',
      bullet: true
    },
    {
      title: 'Sub CRUD',
      path: '/users-management-api-sub-crud',
      bullet: true
    }
  ]
};

const NAV_VERTICAL: NavConfigType = [
  {
    title: 'Dashboards',
    icon: <KeenIcon icon="calendar" />,
    children: {
      accordion: true,
      items: NAV_COMMON.dashboards
    }
  },
  {
    title: 'Pages',
    icon: <KeenIcon icon="calendar" />,
    children: {
      accordion: true,
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

export { PATHS_AUTH, PATHS_GENERAL, NAV_COMMON, NAV_VERTICAL };
