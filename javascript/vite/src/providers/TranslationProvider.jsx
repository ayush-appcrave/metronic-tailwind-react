import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/de';
import '@formatjs/intl-relativetimeformat/locale-data/es';
import '@formatjs/intl-relativetimeformat/locale-data/fr';
import '@formatjs/intl-relativetimeformat/locale-data/ja';
import '@formatjs/intl-relativetimeformat/locale-data/zh';
import { createContext, useContext, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { I18N_CONFIG_KEY, I18N_DEFAULT_LANGUAGE } from '../i18n/config';
import { getData, setData } from '../utils';
import { useSettings } from './SettingsProvider';
const calculateInitialLanguage = () => {
  const currentLanguage = getData(I18N_CONFIG_KEY);
  return currentLanguage ?? I18N_DEFAULT_LANGUAGE;
};
const initialProps = {
  currentLanguage: calculateInitialLanguage(),
  changeLanguage: _ => {}
};
const TranslationsContext = createContext(initialProps);
const useLang = () => useContext(TranslationsContext);
const I18NProvider = ({
  children
}) => {
  const {
    currentLanguage
  } = useLang();
  return <IntlProvider messages={currentLanguage.messages} locale={currentLanguage.code} defaultLocale={calculateInitialLanguage().code}>
      {children}
    </IntlProvider>;
};
const TranslationProvider = ({
  children
}) => {
  const {
    settings,
    updateSettings
  } = useSettings();
  const {
    direction
  } = settings;
  const [currentLanguage, setCurrentLanguage] = useState(initialProps.currentLanguage);
  const changeLanguage = language => {
    setData(I18N_CONFIG_KEY, language);
    setCurrentLanguage(language);
    updateSettings({
      direction: language.direction
    });
  };
  useEffect(() => {
    if (direction === 'rtl') {
      document.documentElement.setAttribute('direction', 'rtl');
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.style.direction = 'rtl';
    } else {
      document.documentElement.removeAttribute('direction');
      document.documentElement.removeAttribute('dir');
      document.documentElement.style.direction = 'ltr';
    }
  }, [direction]);
  return <TranslationsContext.Provider value={{
    currentLanguage,
    changeLanguage
  }}>
      <I18NProvider>{children}</I18NProvider>
    </TranslationsContext.Provider>;
};
export { TranslationProvider, useLang };