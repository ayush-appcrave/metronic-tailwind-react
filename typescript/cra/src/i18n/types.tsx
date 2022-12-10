import { Direction } from "@mui/material";
import { Localization } from "@mui/material/locale";
import { MessageFormatElement } from "react-intl";

export type AvailableLanguageCodes = "en" | "fr" | "ar" | "zh";
export type Language = {
  label: string;
  code: AvailableLanguageCodes;
  systemValue: Localization;
  direction: Direction;
  icon: string;
  messages: Record<string, string> | Record<string, MessageFormatElement[]>;
};

export type TranslationProviderProps = {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  getDirection: () => Direction;
};
