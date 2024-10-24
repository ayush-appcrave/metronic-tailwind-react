import { toAbsoluteUrl } from '@/utils';
import arMessages from './messages/ar.json';
import enMessages from './messages/en.json';
import frMessages from './messages/fr.json';
import zhMessages from './messages/zh.json';
import { type TLanguage } from './types';

const I18N_MESSAGES = {
  en: enMessages,
  fr: frMessages,
  ar: arMessages,
  zh: zhMessages
};

const I18N_CONFIG_KEY = 'i18nConfig';

const I18N_LANGUAGES: readonly TLanguage[] = [
  {
    label: 'English',
    code: 'en',
    direction: 'ltr',
    flag: toAbsoluteUrl('/media/flags/united-states.svg'),
    messages: I18N_MESSAGES.en
  },
  {
    label: 'French',
    code: 'fr',
    direction: 'ltr',
    flag: toAbsoluteUrl('/media/flags/france.svg'),
    messages: I18N_MESSAGES.fr
  },
  {
    label: 'Chinese',
    code: 'zh',
    direction: 'ltr',
    flag: toAbsoluteUrl('/media/flags/china.svg'),
    messages: I18N_MESSAGES.zh
  },
  {
    label: 'Arabic (Saudi)',
    code: 'ar',
    direction: 'rtl',
    flag: toAbsoluteUrl('/media/flags/saudi-arabia.svg'),
    messages: I18N_MESSAGES.ar
  }
];

const I18N_DEFAULT_LANGUAGE: TLanguage = I18N_LANGUAGES[0];

export { I18N_CONFIG_KEY, I18N_DEFAULT_LANGUAGE, I18N_LANGUAGES, I18N_MESSAGES };
