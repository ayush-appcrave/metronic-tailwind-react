// Mui
import { enUS, frFR, zhCN, viVN, arSD } from '@mui/material/locale';

// Layouts
export const CONFIG_LAYOUTS = {
  default: {
		header: {

		}
  }
};

// Cookies keys
export const CONFIG_COOKIES_KEYS = {
	themeMode: 'themeMode',
	themeDirection: 'themeDirection',
	themeLayout: 'themeLayout',
	themeContainerWidth: 'themeContainerWidth',
	themeColorPresets: 'themeColorPresets',
}

// Cookies expiration
export const CONFIG_COOKIES_EXPIRATION = 0;

export const CONFIG_THEME_DEFAULTS = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeLayout: 'default',
  themeColorPresets: 'default',
  themeContainerWidth: 'fluid',
};

// Languages
export const CONFIG_LANGUAGES = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'French',
    value: 'fr',
    systemValue: frFR,
    icon: '/assets/icons/flags/ic_flag_fr.svg',
  },
  {
    label: 'Vietnamese',
    value: 'vn',
    systemValue: viVN,
    icon: '/assets/icons/flags/ic_flag_vn.svg',
  },
  {
    label: 'Chinese',
    value: 'cn',
    systemValue: zhCN,
    icon: '/assets/icons/flags/ic_flag_cn.svg',
  },
  {
    label: 'Arabic (Sudan)',
    value: 'ar',
    systemValue: arSD,
    icon: '/assets/icons/flags/ic_flag_sa.svg',
  },
];

// Default languages
export const CONFIG_DEFAULT_LANGUAGE = CONFIG_LANGUAGES[0]; // English

// Route paths
export const CONFIG_PATH_AUTH = {
	login: '/auth/login',
	register: '/auth/register',
	verify: '/auth/verify',
	resetPassword: '/auth/reset-password',
	newPassword: '/auth/new-password',
};

export const CONFIG_PATH_GENERAL = {
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