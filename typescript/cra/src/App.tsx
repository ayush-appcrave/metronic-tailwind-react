import { AuthProvider, AuthInit } from "./auth";
import { LayoutsProvider } from "./providers/LayoutsProvider";
import { SettingsProvider } from "./providers/SettingsProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { ThemeRtlProvider } from "./providers/ThemeRtlProvider";
import { TranslationProvider } from "./providers/TranslationProvider";
import { AppRouting } from "./routing";

import 'simplebar/src/simplebar.css';
import './components/keenicons/assets/duotone/style.css'
import './components/keenicons/assets/outline/style.css'
import './components/keenicons/assets/solid/style.css'
import "./App.css";

const App = () => (
  <AuthProvider>
    <SettingsProvider>
      <TranslationProvider>        
        <ThemeProvider>
          <ThemeRtlProvider>
            <LayoutsProvider>
              <AuthInit>
                <AppRouting/>
              </AuthInit>
            </LayoutsProvider>
          </ThemeRtlProvider>
        </ThemeProvider>
      </TranslationProvider>
    </SettingsProvider>
  </AuthProvider>
);

export { App };
