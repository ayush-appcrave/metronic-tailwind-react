import { LanguageChanger, ModeChanger } from "@base/components";

const Header = () => {
  return (
    <header>
      <h1>Header title</h1>
      <LanguageChanger />
      <ModeChanger />
    </header>
  );
};

export { Header };
