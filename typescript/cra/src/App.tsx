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
                    <BrowserRouter basename={PUBLIC_URL}>
                      <AppRouting />
                    </BrowserRouter>
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
