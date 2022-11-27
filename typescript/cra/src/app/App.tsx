import { LayoutsProvider } from "@base/layouts";
import { AuthProvider, AuthInit } from "app/setup/auth";
import { MenusProvider, SettingsProvider } from "app/setup/configs";
import { ThemeProvider } from "app/setup/theme";
import { TranslationsProvider } from "app/setup/i18n";
import { AppRouting } from "app/routing";
import "./App.css";

const App = () => (
  <AuthProvider>
    <TranslationsProvider>
      <SettingsProvider>
        <MenusProvider>
          <ThemeProvider>
            <LayoutsProvider>
              <AuthInit>
                <AppRouting />
              </AuthInit>
            </LayoutsProvider>
          </ThemeProvider>
        </MenusProvider>
      </SettingsProvider>
    </TranslationsProvider>
  </AuthProvider>
);

export { App };
