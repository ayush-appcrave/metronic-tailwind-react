import { AuthProvider, AuthInit } from './auth';
import {
  SettingsProvider,
  TranslationProvider,
  ThemeRtlProvider,
  LayoutsProvider,
  ThemeProvider,
  LoadingProvider,
  SnackbarProvider
} from 'providers';
import { AppRouting } from 'routing';

import 'simplebar/src/simplebar.css';
import './components/keenicons/assets/duotone/style.css';
import './components/keenicons/assets/outline/style.css';
import './components/keenicons/assets/solid/style.css';
import './App.css';

const App = () => (
  <AuthProvider>
    <SettingsProvider>
      <TranslationProvider>
        <ThemeProvider>
          <ThemeRtlProvider>
            <LayoutsProvider>
              <LoadingProvider>
                <SnackbarProvider>
                  <AuthInit>
                    <AppRouting />
                  </AuthInit>
                </SnackbarProvider>
              </LoadingProvider>
            </LayoutsProvider>
          </ThemeRtlProvider>
        </ThemeProvider>
      </TranslationProvider>
    </SettingsProvider>
  </AuthProvider>
);

export { App };
