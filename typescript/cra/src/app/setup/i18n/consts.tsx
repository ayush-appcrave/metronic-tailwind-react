import { enUS, frFR, zhCN, arSD } from "@mui/material/locale";
import enMessages from "./messages/en.json";
import frMessages from "./messages/fr.json";
import arMessages from "./messages/ar.json";
import zhMessages from "./messages/zh.json";
import { Language } from "./types";

const allMessages = {
  en: enMessages,
  fr: frMessages,
  ar: arMessages,
  zh: zhMessages,
};

const I18N_CONFIG_KEY = "i18nConfig";
const LANGUAGES: ReadonlyArray<Language> = [
  {
    label: "English",
    code: "en",
    systemValue: enUS,
    direction: "ltr",
    icon: "/assets/icons/flags/ic_flag_en.svg",
    messages: allMessages["en"],
  },
  {
    label: "French",
    code: "fr",
    systemValue: frFR,
    direction: "ltr",
    icon: "/assets/icons/flags/ic_flag_fr.svg",
    messages: allMessages["fr"],
  },
  {
    label: "Chinese",
    code: "zh",
    systemValue: zhCN,
    direction: "ltr",
    icon: "/assets/icons/flags/ic_flag_cn.svg",
    messages: allMessages["zh"],
  },
  {
    label: "Arabic (Sudan)",
    code: "ar",
    systemValue: arSD,
    direction: "rtl",
    icon: "/assets/icons/flags/ic_flag_sa.svg",
    messages: allMessages["ar"],
  },
];
const DEFAULT_LANGUAGE: Language = LANGUAGES[0];

export { I18N_CONFIG_KEY, DEFAULT_LANGUAGE, LANGUAGES, allMessages };
