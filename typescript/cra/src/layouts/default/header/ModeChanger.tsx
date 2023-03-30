import { SettingsModeOptionType } from "../../../config";
import { useSettings } from "../../../providers/SettingsProvider";

const ModeChanger = () => {
  const { settings, updateSettings, getMode } = useSettings();
  const { mode } = settings;
  
  const changeMode = (mode: SettingsModeOptionType) => {
    updateSettings({
      mode,
    });
  };

  return (
    <>
      <h3>Mode selection:</h3>
      <ul>
        <li>
          <label>
            System
            <input
              type="radio"
              name="mode"
              value="system"
              checked={mode === "system"}
              onChange={() => changeMode("system")}
            />
          </label>
        </li>
        <li>
          <label>
            Dark
            <input
              type="radio"
              name="mode"
              checked={mode === "dark"}
              onChange={() => changeMode("dark")}
            />
          </label>
        </li>
        <li>
          <label>
            Light
            <input
              type="radio"
              name="mode"
              checked={mode === "light"}
              onChange={() => changeMode("light")}
            />
          </label>
        </li>
      </ul>
      <h4>Calculated mode: {getMode()}</h4>
    </>
  );
};

export { ModeChanger };
