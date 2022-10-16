import { LayoutsProvider } from "@base/layouts";
import { AppRouting } from "app/routing";
import "./App.css";

const App = () => (
  <LayoutsProvider>
    <AppRouting />
  </LayoutsProvider>
);

export { App };
