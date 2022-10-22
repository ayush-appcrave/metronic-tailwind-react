import { enUS, frFR, zhCN, viVN, arSD } from "@mui/material/locale";
import { Language } from "./types";

const LANGUAGES: ReadonlyArray<Language> = [
  {
    languageLabel: "English",
    languageValue: "en",
    languageSystemValue: enUS,
    languageDirection: "ltr",
    languageIcon: "/assets/icons/flags/ic_flag_en.svg",
  },
  {
    languageLabel: "French",
    languageValue: "fr",
    languageSystemValue: frFR,
    languageDirection: "ltr",
    languageIcon: "/assets/icons/flags/ic_flag_fr.svg",
  },
  {
    languageLabel: "Vietnamese",
    languageValue: "vn",
    languageSystemValue: viVN,
    languageDirection: "ltr",
    languageIcon: "/assets/icons/flags/ic_flag_vn.svg",
  },
  {
    languageLabel: "Chinese",
    languageValue: "cn",
    languageSystemValue: zhCN,
    languageDirection: "ltr",
    languageIcon: "/assets/icons/flags/ic_flag_cn.svg",
  },
  {
    languageLabel: "Arabic (Sudan)",
    languageValue: "ar",
    languageSystemValue: arSD,
    languageDirection: "rtl",
    languageIcon: "/assets/icons/flags/ic_flag_sa.svg",
  },
];

const defaultLangulage: Language = LANGUAGES[0];

export { defaultLangulage, LANGUAGES };
