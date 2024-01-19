/* eslint-disable prettier/prettier */
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from '@/auth/providers/JWTProvider';
// import { AuthProvider } from '@/auth/providers/Auth0Provider';
// import { AuthProvider } from '@/auth/providers/FirebaseProvider';
import {
  LayoutsProvider,
  LoadersProvider,
  SettingsProvider,
  SnackbarProvider,
  ThemeProvider,
  ThemeRtlProvider,
  TranslationProvider
} from '@/providers';

const queryClient = new QueryClient();

const ProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <AuthProvider>
          <SettingsProvider>
            <TranslationProvider>
              <ThemeProvider>
                <ThemeRtlProvider>
                  <LayoutsProvider>
                    <LoadersProvider>
                        {children}
                    </LoadersProvider>
                  </LayoutsProvider>
                </ThemeRtlProvider>
              </ThemeProvider>
            </TranslationProvider>
          </SettingsProvider>
        </AuthProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};

export { ProvidersWrapper };
