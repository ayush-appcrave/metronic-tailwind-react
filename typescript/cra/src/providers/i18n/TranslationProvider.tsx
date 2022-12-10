import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import { IntlProvider } from "react-intl";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/de";
import "@formatjs/intl-relativetimeformat/locale-data/es";
import "@formatjs/intl-relativetimeformat/locale-data/fr";
import "@formatjs/intl-relativetimeformat/locale-data/ja";
import "@formatjs/intl-relativetimeformat/locale-data/zh";
import { getData, setData } from "../../utils";
import { DEFAULT_LANGUAGE, I18N_CONFIG_KEY } from "../../i18n/consts";
import { Language, TranslationProviderProps } from "../../i18n/types";

const calculateInitialLanguage = () => {
  const currentLanguage = getData(I18N_CONFIG_KEY) as Language | undefined;
  return currentLanguage || DEFAULT_LANGUAGE;
};

const initialProps: TranslationProviderProps = {
  currentLanguage: calculateInitialLanguage(),
  changeLanguage: (_: Language) => {},
  getDirection: () => "rtl",
};

const TranslationsContext =
  createContext<TranslationProviderProps>(initialProps);
const useLang = () => useContext(TranslationsContext);

const I18NProvider = ({ children }: PropsWithChildren) => {
  const { currentLanguage } = useLang();
  return (
    <IntlProvider
      messages={currentLanguage.messages}
      locale={currentLanguage.code}
      defaultLocale={calculateInitialLanguage().code}
    >
      {children}
    </IntlProvider>
  );
};

const TranslationProvider = ({ children }: PropsWithChildren) => {
  const [currentLanguage, setCurrentLanguage] = useState(
    initialProps.currentLanguage
  );
  const getDirection = () => currentLanguage.direction;
  const changeLanguage = (language: Language) => {
    setData(I18N_CONFIG_KEY, language);
    setCurrentLanguage(language);
  };

  useEffect(() => {
    if (currentLanguage.direction === "rtl") {
      document.documentElement.setAttribute("direction", "rtl");
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.style.direction = "rtl";
    } else {
      document.documentElement.removeAttribute("direction");
      document.documentElement.removeAttribute("dir");
      document.documentElement.style.direction = "ltr";
    }
  }, [currentLanguage]);

  return (
    <TranslationsContext.Provider
      value={{
        currentLanguage,
        getDirection,
        changeLanguage,
      }}
    >
      <I18NProvider>{children}</I18NProvider>
    </TranslationsContext.Provider>
  );
};

export { TranslationProvider, useLang };
