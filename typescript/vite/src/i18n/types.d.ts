import { type MessageFormatElement } from 'react-intl';

export type TLanguageCode = 'en' | 'fr' | 'ar' | 'zh';

export type TLanguageDirection = 'ltr' | 'rtl';

export interface TLanguage {
  label: string;
  code: TLanguageCode;
  direction: TLanguageDirection;
  flag: string;
  messages: Record<string, string> | Record<string, MessageFormatElement[]>;
}

export interface TranslationProviderProps {
  currentLanguage: TLanguage;
  changeLanguage: (lang: TLanguage) => void;
}
