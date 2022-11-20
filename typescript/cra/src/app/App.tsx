import { LayoutsProvider } from "@base/layouts";
import { MenusProvider, SettingsProvider } from "app/setup/configs";
import { ThemeProvider } from "app/setup/theme";
import { AppRouting } from "app/routing";
import "./App.css";

const App = () => (
  <SettingsProvider>
    <MenusProvider>
      <ThemeProvider>
        <LayoutsProvider>
          <AppRouting />
        </LayoutsProvider>
      </ThemeProvider>
    </MenusProvider>
  </SettingsProvider>
);

export { App };
