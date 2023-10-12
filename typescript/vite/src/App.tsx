import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './auth/providers/JWTProvider';
// import { AuthProvider } from './auth/providers/Auth0Provider';
// import { AuthProvider } from './auth/providers/FirebaseProvider';
import {
  LayoutsProvider,
  LoadersProvider,
  SettingsProvider,
  SnackbarProvider,
  ThemeProvider,
  ThemeRtlProvider,
  TranslationProvider
} from './providers';
import { AppRouting } from './routing';

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { BASE_URL } = import.meta.env;

const App = () => (
  <SnackbarProvider>
    <AuthProvider>
      <SettingsProvider>
        <TranslationProvider>
          <ThemeProvider>
            <ThemeRtlProvider>
              <LayoutsProvider>
                <LoadersProvider>
                  <BrowserRouter basename={BASE_URL}>
                    <AppRouting />
                  </BrowserRouter>
                </LoadersProvider>
              </LayoutsProvider>
            </ThemeRtlProvider>
          </ThemeProvider>
        </TranslationProvider>
      </SettingsProvider>
    </AuthProvider>
  </SnackbarProvider>
);

export { App };
