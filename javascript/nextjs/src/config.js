import { SvgIcon } from '@mui/material';
import { enUS, frFR, zhCN, viVN, arSD } from '@mui/material/locale';

// Settings keys
export const SETTINGS_KEYS = {
	mode: 'mode',
	direction: 'direction',
  language: 'language',
	layout: 'layout',
	containerWidth: 'containerWidth',
	color: 'color',
}

// Settings defaults
export const SETTINGS_DEFAULTS = {
  mode: 'light',
  direction: 'ltr',
  language: 'en',
  layout: 'default',
  color: 'default',
  containerWidth: 'fluid',
};

// Cookies expiration
export const COOKIES_EXPIRATION = 5;

// Languages
export const LANGUAGES = [
  {
    languageLabel: 'English',
    languageValue: 'en',
    languageSystemValue: enUS,
    languageDirection: 'ltr',
    languageIcon: '/assets/icons/flags/ic_flag_en.svg',
  },
  /*  
  {
    languageLabel: 'French',
    languageValue: 'fr',
    languageSystemValue: frFR,
    languageDirection: 'ltr',
    languageIcon: '/assets/icons/flags/ic_flag_fr.svg',
  },
  {
    languageLabel: 'Vietnamese',
    languageValue: 'vn',
    languageSystemValue: viVN,
    languageDirection: 'ltr',
    languageIcon: '/assets/icons/flags/ic_flag_vn.svg',
  },
  {
    languageLabel: 'Chinese',
    languageValue: 'cn',
    languageSystemValue: zhCN,
    languageDirection: 'ltr',
    languageIcon: '/assets/icons/flags/ic_flag_cn.svg',
  },
  {
    languageLabel: 'Arabic (Sudan)',
    languageValue: 'ar',
    languageSystemValue: arSD,
    languageDirection: 'rtl',
    languageIcon: '/assets/icons/flags/ic_flag_sa.svg',
  },
  */
];

// Auth layout
export const LAYOUT_AUTH = {
  
};

// Default layout
export const LAYOUT_DEFAULT = {
  SIDEBAR_WIDTH: 300,
  SIDEBAR_COLLAPSE_WIDTH: 80,
  SIDEBAR_WIDTH_MOBILE: 250,
  SIDEBAR_TRANSITION_DURATION: '0.3s',
  SIDEBAR_TRANSITION_TIMING_FUNCTION: 'ease'
}

// Default languages
export const DEFAULT_LANGUAGE = LANGUAGES[0]; // English

// Auth paths
export const PATHS_AUTH = {
	login: '/auth/login',
	register: '/auth/register',
	verify: '/auth/verify',
	resetPassword: '/auth/reset-password',
	newPassword: '/auth/new-password',
};

// General paths
export const PATHS_GENERAL = {
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

// Menu common
export const MENU_COMMON = {
  dashboards: [
    {
      title: 'Multipurpose',
      path: '#',
      bullet: true,
      onClick: () => { console.log('New clicked') }
    },
    {
      title: 'eCommerce',
      path: '#ecommerce',
      bullet: true,
      onClick: () => { console.log('New clicked 2') }
    },
    {
      title: 'Marketing',
      path: '#marketing',
      bullet: true
    },
    {
      title: 'Crypto',
      path: '#crypto',
      bullet: true
    },
    {
      title: 'Projects',
      path: '#projects',
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
  ]
};

// Menu vertical
export const MENU_VERTICAL = [
  {
    title: 'Dashboards',
    icon: 'general/gen025.svg',
    children: {
      mode: 'accordion',
      items: MENU_COMMON.dashboards
    }
  },
  {
    title: 'Pages',
    icon: 'general/gen025.svg',
    children: {
      mode: 'accordion',
      items: MENU_COMMON.pages
    }
  },
  {
    title: 'Authentication',
    icon: 'general/gen025.svg',
    children: {
      mode: 'accordion',
      items: MENU_COMMON.authentication
    }
  },
  {
    title: 'Account',
    icon: 'general/gen025.svg',
    children: {
      mode: 'accordion',
      items: MENU_COMMON.account
    }
  },
  {
    title: 'Apps',
    icon: 'general/gen025.svg',
    children: {
      mode: 'dropdown',
      items: MENU_COMMON.apps
    }
  },
  {
    devider: true
  },
  {
    title: 'Documentation',
    icon: 'general/gen025.svg',
    url: 'previews.keenthemes.com/hero/mui/docs'
  },
  {
    title: 'Changelog',
    icon: 'general/gen025.svg',
    url: 'previews.keenthemes.com/hero/mui/docs/#/changelog'
  }
];