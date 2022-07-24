import { enUS, frFR, zhCN, viVN, arSD } from '@mui/material/locale';

// Settings keys
export const SETTINGS_KEYS = {
	themeMode: 'themeMode',
	themeDirection: 'themeDirection',
  themeLanguage: 'themeLanguage',
	themeLayout: 'themeLayout',
	themeContainerWidth: 'themeContainerWidth',
	themeColor: 'themeColor',
}

// Settings defaults
export const SETTINGS_DEFAULTS = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeLanguage: 'en',
  themeLayout: 'default',
  themeColor: 'default',
  themeContainerWidth: 'fluid',
};

// Cookies expiration
export const COOKIES_EXPIRATION = 5;

// Layouts
export const LAYOUT_DEFAULT = {
  
};

export const LAYOUT_AUTH = {
  
};

// Languages
export const LANGUAGES = [
  {
    langugeLabel: 'English',
    langugeValue: 'en',
    languageSystemValue: enUS,
    langugeDirection: 'ltr',
    langugeIcon: '/assets/icons/flags/ic_flag_en.svg',
  },
  /*  
  {
    langugeLabel: 'French',
    langugeValue: 'fr',
    languageSystemValue: frFR,
    langugeDirection: 'ltr',
    langugeIcon: '/assets/icons/flags/ic_flag_fr.svg',
  },
  {
    langugeLabel: 'Vietnamese',
    langugeValue: 'vn',
    languageSystemValue: viVN,
    langugeDirection: 'ltr',
    langugeIcon: '/assets/icons/flags/ic_flag_vn.svg',
  },
  {
    langugeLabel: 'Chinese',
    langugeValue: 'cn',
    languageSystemValue: zhCN,
    langugeDirection: 'ltr',
    langugeIcon: '/assets/icons/flags/ic_flag_cn.svg',
  },
  {
    langugeLabel: 'Arabic (Sudan)',
    langugeValue: 'ar',
    languageSystemValue: arSD,
    langugeDirection: 'rtl',
    langugeIcon: '/assets/icons/flags/ic_flag_sa.svg',
  },
  */
];

// Default languages
export const DEFAULT_LANGUAGE = LANGUAGES[0]; // English

// Route paths
export const PATHS_AUTH = {
	login: '/auth/login',
	register: '/auth/register',
	verify: '/auth/verify',
	resetPassword: '/auth/reset-password',
	newPassword: '/auth/new-password',
};

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