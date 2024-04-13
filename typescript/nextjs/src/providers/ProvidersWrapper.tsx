import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from '@/auth/providers/JWTProvider';
// import { AuthProvider } from '@/auth/providers/Auth0Provider';
// import { AuthProvider } from '@/auth/providers/FirebaseProvider';
import {
  LayoutProvider,
  LoadersProvider,
  MenuProvider,
  SettingsProvider,
  SnackbarProvider,
  TranslationProvider
} from '@/providers';

const queryClient = new QueryClient();

const ProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
      <LayoutProvider>
          <LoadersProvider>
              <MenuProvider>
                  {children}
              </MenuProvider>
          </LoadersProvider>
      </LayoutProvider>
  );
};

export { ProvidersWrapper };
