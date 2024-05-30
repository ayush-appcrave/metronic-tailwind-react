import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProvidersWrapper } from './providers/ProvidersWrapper';
import { useSettings } from './providers/SettingsProvider';
import { AppRouting } from './routing';
const {
  BASE_URL
} = import.meta.env;
const App = () => {
  const {
    settings
  } = useSettings();
  useEffect(() => {
    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    document.body.classList.remove('page-loading');
    document.body.classList.add(settings.mode);
  }, [settings]);
  return <ProvidersWrapper>
      <BrowserRouter basename={BASE_URL}>
        <AppRouting />
      </BrowserRouter>
    </ProvidersWrapper>;
};
export { App };