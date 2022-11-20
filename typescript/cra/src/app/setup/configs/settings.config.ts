import { AppSettings } from "./types";

const defaultSettings: AppSettings = {
  mode: "light",
  direction: "ltr",
  layout: "default",
  containerWidth: "fluid",
  color: "default",
};
const COOKIES_EXPIRATION = 5;

export { defaultSettings, COOKIES_EXPIRATION };
