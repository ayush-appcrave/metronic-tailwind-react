import { useSettings } from "app/setup/configs";

const DirectionChanger = () => {
  const { settings, changeDirection } = useSettings();
  return (
    <button
      onClick={() =>
        changeDirection(settings.direction === "rtl" ? "ltr" : "rtl")
      }
    >
      {settings.direction === "rtl" ? "RTL" : "LTR"}
    </button>
  );
};

export { DirectionChanger };
