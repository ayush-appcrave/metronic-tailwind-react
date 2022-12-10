import { LayoutsProvider } from "./providers/layouts";
import { AuthProvider, AuthInit } from "./providers/auth";
import { MenusProvider } from "./providers/menus";
import { SettingsProvider } from "./providers/settings";
import { ThemeProvider } from "./theme";
import { TranslationProvider } from "./i18n";
import { AppRouting } from "./routing";
import "./App.css";

const App = () => (
  <AuthProvider>
    <TranslationProvider>
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
    </TranslationProvider>
  </AuthProvider>
);

export { App };
