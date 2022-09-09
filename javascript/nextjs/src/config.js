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

// Layouts
export const LAYOUT_DEFAULT = {
  SIDEBAR_WIDTH: 300
};

export const LAYOUT_AUTH = {
  
};

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