import { LayoutsProvider } from "@base/layouts";
import { MenusProvider, SettingsProvider } from "app/setup/configs";
import { ThemeProvider } from "app/setup/theme";
import { TranslationsProvider } from "app/setup/i18n";
import { AppRouting } from "app/routing";
import "./App.css";

const App = () => (
  <TranslationsProvider>
    <SettingsProvider>
      <MenusProvider>
        <ThemeProvider>
          <LayoutsProvider>
            <AppRouting />
          </LayoutsProvider>
        </ThemeProvider>
      </MenusProvider>
    </SettingsProvider>
  </TranslationsProvider>
);

export { App };
