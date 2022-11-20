import { useSettings } from "app/setup/configs";

const DirectionChanger = () => {
  const { settings, updateSettings } = useSettings();
  const changeDirection = () => {
    updateSettings({
      direction: settings.direction === "rtl" ? "ltr" : "rtl",
    });
  };

  return (
    <button onClick={changeDirection}>
      {settings.direction === "rtl" ? "RTL" : "LTR"}
    </button>
  );
};

export { DirectionChanger };
