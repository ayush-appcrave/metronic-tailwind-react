import { LanguageChanger, ModeChanger } from "../../../../components";
import { FormattedMessage } from "react-intl";

const Header = () => (
  <header>
    <h1>
      <FormattedMessage id="MENU.DASHBOARD" />
    </h1>
    <LanguageChanger />
    <ModeChanger />
  </header>
);

export { Header };
