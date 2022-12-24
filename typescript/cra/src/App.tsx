import { AuthProvider, AuthInit } from "./auth";
import { LayoutsProvider } from "./providers/LayoutsProvider";
import { SettingsProvider } from "./providers/SettingsProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { TranslationProvider } from "./providers/TranslationProvider";
import { AppRouting } from "./routing";
import 'simplebar/src/simplebar.css';
import "./App.css";

const App = () => (
  <AuthProvider>
    <TranslationProvider>
      <SettingsProvider>
        <ThemeProvider>
          <LayoutsProvider>
            <AuthInit>
              <AppRouting/>
            </AuthInit>
          </LayoutsProvider>
        </ThemeProvider>
      </SettingsProvider>
    </TranslationProvider>
  </AuthProvider>
);

export { App };
