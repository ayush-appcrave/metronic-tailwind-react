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
    document.documentElement.classList.add(settings.mode);
    document.documentElement.classList.remove('page-loading');
    
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('page-loading');
    }, 1000); // 1000 milliseconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [settings]);

  return (
    <BrowserRouter basename={BASE_URL}>
      <AppRouting />
    </BrowserRouter>
  );
};

export { App };
