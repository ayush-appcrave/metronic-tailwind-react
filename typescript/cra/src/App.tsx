import { AuthProvider, AuthInit } from './auth';
import { BrowserRouter } from 'react-router-dom';
import {
  SettingsProvider,
  TranslationProvider,
  ThemeRtlProvider,
  LayoutsProvider,
  ThemeProvider,
  LoadersProvider,
  SnackbarProvider
} from './providers';
import { AppRouting } from './routing';

const App = () => (
  <AuthProvider>
    <SettingsProvider>
      <TranslationProvider>
        <ThemeProvider>
          <ThemeRtlProvider>
            <LayoutsProvider>
              <LoadersProvider>
                <SnackbarProvider>
                  <AuthInit>
                    <BrowserRouter>
                      <AppRouting />
                    </BrowserRouter>
                  </AuthInit>
                </SnackbarProvider>
              </LoadersProvider>
            </LayoutsProvider>
          </ThemeRtlProvider>
        </ThemeProvider>
      </TranslationProvider>
    </SettingsProvider>
  </AuthProvider>
);

export { App };
