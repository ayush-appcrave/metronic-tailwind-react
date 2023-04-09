import { Direction } from "@mui/material";
import { Localization } from "@mui/material/locale";
import { MessageFormatElement } from "react-intl";

export type LanguageCodeType = "en" | "fr" | "ar" | "zh";

export type LanguageType = {
  label: string;
  code: LanguageCodeType;
  systemValue: Localization;
  direction: Direction;
  flag: string;
  messages: Record<string, string> | Record<string, MessageFormatElement[]>;
};

export type TranslationProviderProps = {
  currentLanguage: LanguageType;
  changeLanguage: (lang: LanguageType) => void
};
