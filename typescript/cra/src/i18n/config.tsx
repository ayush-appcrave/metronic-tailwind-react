import { enUS, frFR, zhCN, arSA } from '@mui/material/locale';
import enMessages from './messages/en.json';
import frMessages from './messages/fr.json';
import arMessages from './messages/ar.json';
import zhMessages from './messages/zh.json';
import { type LanguageType } from './types';

const I18N_MESSAGES = {
  en: enMessages,
  fr: frMessages,
  ar: arMessages,
  zh: zhMessages
};

const I18N_CONFIG_KEY = 'i18nConfig';

const I18N_LANGUAGES: readonly LanguageType[] = [
  {
    label: 'English',
    code: 'en',
    systemValue: enUS,
    direction: 'ltr',
    flag: '/media/flags/united-states.svg',
    messages: I18N_MESSAGES.en
  },
  {
    label: 'French',
    code: 'fr',
    systemValue: frFR,
    direction: 'ltr',
    flag: '/media/flags/france.svg',
    messages: I18N_MESSAGES.fr
  },
  {
    label: 'Chinese',
    code: 'zh',
    systemValue: zhCN,
    direction: 'ltr',
    flag: '/media/flags/china.svg',
    messages: I18N_MESSAGES.zh
  },
  {
    label: 'Arabic (Saudi)',
    code: 'ar',
    systemValue: arSA,
    direction: 'rtl',
    flag: '/media/flags/saudi-arabia.svg',
    messages: I18N_MESSAGES.ar
  }
];

const I18N_DEFAULT_LANGUAGE: LanguageType = I18N_LANGUAGES[0];

export { I18N_CONFIG_KEY, I18N_DEFAULT_LANGUAGE, I18N_LANGUAGES, I18N_MESSAGES };
