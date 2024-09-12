import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSettings } from './providers/SettingsProvider';
import { AppRouting } from './routing';

const { BASE_URL } = import.meta.env;

const App = () => {
  const { settings } = useSettings();

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.remove('light');
    document.documentElement.classList.remove('page-loading');
    document.documentElement.classList.add(settings.mode);
  }, [settings]);

  return (
    <BrowserRouter basename={BASE_URL}>
      <AppRouting />
    </BrowserRouter>
  );
};

export { App };
