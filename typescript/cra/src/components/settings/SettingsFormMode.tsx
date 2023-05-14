import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSettings } from '../../providers/SettingsProvider';
import { type SettingsModeOptionType } from '../../config';

const SettingsFormMode = () => {
  const { settings, updateSettings } = useSettings();
  const { mode } = settings;

  const handleModeChange = (mode: SettingsModeOptionType) => {
    updateSettings({
      mode
    });
  };

  return (
    <FormControl
      sx={{
        mb: 2
      }}
    >
      <FormLabel>Mode</FormLabel>
      <RadioGroup row name="settings-mode">
        <FormControlLabel
          value="light"
          control={<Radio />}
          label="Light"
          checked={mode === 'light'}
          onChange={() => {
            handleModeChange('light');
          }}
        />
        <FormControlLabel
          value="dark"
          control={<Radio />}
          label="Dark"
          checked={mode === 'dark'}
          onChange={() => {
            handleModeChange('dark');
          }}
        />
        <FormControlLabel
          value="system"
          control={<Radio />}
          label="System"
          checked={mode === 'system'}
          onChange={() => {
            handleModeChange('system');
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};

export { SettingsFormMode };
