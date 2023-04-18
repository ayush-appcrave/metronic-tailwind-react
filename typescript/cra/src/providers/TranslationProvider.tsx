import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { getData, setData } from '../utils';
import { I18N_DEFAULT_LANGUAGE, I18N_CONFIG_KEY } from '../i18n/config';
import { LanguageType, TranslationProviderProps } from '../i18n/types';
import { useSettings } from './SettingsProvider';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/de';
import '@formatjs/intl-relativetimeformat/locale-data/es';
import '@formatjs/intl-relativetimeformat/locale-data/fr';
import '@formatjs/intl-relativetimeformat/locale-data/ja';
import '@formatjs/intl-relativetimeformat/locale-data/zh';

const calculateInitialLanguage = () => {
  const currentLanguage = getData(I18N_CONFIG_KEY) as LanguageType | undefined;

  return currentLanguage || I18N_DEFAULT_LANGUAGE;
};

const initialProps: TranslationProviderProps = {
  currentLanguage: calculateInitialLanguage(),
  changeLanguage: (_: LanguageType) => {}
};

const TranslationsContext = createContext<TranslationProviderProps>(initialProps);
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
  const { settings, updateSettings } = useSettings();
  const { direction } = settings;

  const [currentLanguage, setCurrentLanguage] = useState(initialProps.currentLanguage);

  const changeLanguage = (language: LanguageType) => {
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

  return (
    <TranslationsContext.Provider
      value={{
        currentLanguage,
        changeLanguage
      }}
    >
      <I18NProvider>{children}</I18NProvider>
    </TranslationsContext.Provider>
  );
};

export { TranslationProvider, useLang };
