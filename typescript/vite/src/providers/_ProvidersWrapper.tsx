/* eslint-disable prettier/prettier */
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from '@/auth/providers/JWTProvider';
// import { AuthProvider } from '@/auth/providers/Auth0Provider';
// import { AuthProvider } from '@/auth/providers/FirebaseProvider';
import {
  LayoutStorageProvider,
  LoadersProvider,
  SettingsProvider,
  SnackbarProvider,
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
              <LayoutStorageProvider>
                <LoadersProvider>
                  {children}
                </LoadersProvider>
              </LayoutStorageProvider>
            </TranslationProvider>
          </SettingsProvider>
        </AuthProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};

export { ProvidersWrapper };
