import { AuthProvider } from '@/auth/providers/JWTProvider';
import {
  LayoutProvider,
  LoadersProvider,
  MenusProvider,
  SettingsProvider,
  TranslationProvider,
} from '@/providers';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
const ProvidersWrapper = ({ children }) => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <TranslationProvider>
            <HelmetProvider>
              <LayoutProvider>
                <LoadersProvider>
                  <MenusProvider>{children}</MenusProvider>
                </LoadersProvider>
              </LayoutProvider>
            </HelmetProvider>
          </TranslationProvider>
        </SettingsProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
};
export { ProvidersWrapper };
