import { LayoutsProvider } from "layouts";
import { AuthProvider, AuthInit } from "auth";
import { MenusProvider, SettingsProvider } from "./configs";
import { ThemeProvider } from "theme";
import { TranslationsProvider } from "./i18n";
import { AppRouting } from "routing";
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
