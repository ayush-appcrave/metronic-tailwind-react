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

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;

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
                    <BrowserRouter basename={PUBLIC_URL}>
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
