import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '@/auth/providers/JWTProvider';
// import { AuthProvider } from '@/auth/providers/Auth0Provider';
// import { AuthProvider } from '@/auth/providers/FirebaseProvider';
import { LayoutProvider, LoadersProvider, MenusProvider, SettingsProvider, SnackbarProvider, TranslationProvider } from '@/providers';
const queryClient = new QueryClient();
const ProvidersWrapper = ({
  children
}) => {
  return <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <AuthProvider>
          <SettingsProvider>
            <TranslationProvider>
              <LayoutProvider>
                <LoadersProvider>
                  <MenusProvider>{children}</MenusProvider>
                </LoadersProvider>
              </LayoutProvider>
            </TranslationProvider>
          </SettingsProvider>
        </AuthProvider>
      </SnackbarProvider>
    </QueryClientProvider>;
};
export { ProvidersWrapper };