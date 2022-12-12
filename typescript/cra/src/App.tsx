import { AuthProvider, AuthInit } from "./auth";
import { LayoutsProvider } from "./providers/LayoutsProvider";
import { NavsProvider } from "./providers/NavsProvider";
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
        <NavsProvider>
          <ThemeProvider>
            <LayoutsProvider>
              <AuthInit>
                <AppRouting />
              </AuthInit>
            </LayoutsProvider>
          </ThemeProvider>
        </NavsProvider>
      </SettingsProvider>
    </TranslationProvider>
  </AuthProvider>
);

export { App };
