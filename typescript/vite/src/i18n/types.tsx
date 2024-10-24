/* eslint-disable no-unused-vars */
import { type Direction } from '@mui/material';
import { type Localization } from '@mui/material/locale';
import { type MessageFormatElement } from 'react-intl';

export type TLanguageCode = 'en' | 'fr' | 'ar' | 'zh';

export interface TLanguage {
  label: string;
  code: TLanguageCode;
  direction: Direction;
  flag: string;
  messages: Record<string, string> | Record<string, MessageFormatElement[]>;
}

export interface TranslationProviderProps {
  currentLanguage: TLanguage;
  changeLanguage: (lang: TLanguage) => void;
}
