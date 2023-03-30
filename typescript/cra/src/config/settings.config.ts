import { SettingsType } from "./types";

const defaultSettings: SettingsType = {
  mode: "system",
  direction: "ltr",
  keenicons: "duotone",
  fontFamily: "Inter",
  layout: "default",
  container: "fluid",
  color: "default",
};
const COOKIES_EXPIRATION = 5;

export { defaultSettings, COOKIES_EXPIRATION };
