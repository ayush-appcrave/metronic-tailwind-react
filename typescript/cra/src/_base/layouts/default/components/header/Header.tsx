import { DirectionChanger, ModeChanger } from "@base/components";

const Header = () => {
  return (
    <header>
      <h1>Header title</h1>
      <DirectionChanger />
      <ModeChanger />
    </header>
  );
};

export { Header };
