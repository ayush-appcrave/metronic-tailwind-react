import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { type SettingsContainerWidthType } from '../../config';
import { useSettings } from '../../providers/SettingsProvider';

const SettingsFormContainerWidth = () => {
  const { settings, updateSettings } = useSettings();
  const { containerWidth } = settings;

  const handleContainerChange = (containerWidth: SettingsContainerWidthType) => {
    updateSettings({
      containerWidth
    });
  };

  return (
    <FormControl
      sx={{
        mb: 2
      }}
    >
      <FormLabel>Container</FormLabel>
      <RadioGroup row name="settings-direction">
        <FormControlLabel
          value="fluid"
          control={<Radio />}
          label="Fluid"
          checked={containerWidth === 'fluid'}
          onChange={() => {
            handleContainerChange('fluid');
          }}
        />
        <FormControlLabel
          value="fixed"
          control={<Radio />}
          label="Fixed"
          checked={containerWidth === 'fixed'}
          onChange={() => {
            handleContainerChange('fixed');
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};

export { SettingsFormContainerWidth };
