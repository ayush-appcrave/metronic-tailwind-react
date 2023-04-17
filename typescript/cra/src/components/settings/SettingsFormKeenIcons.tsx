import { Box, List, ListSubheader } from '@mui/material';
import { useViewport } from '../../hooks';
import Scrollbar from '../scrollbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSettings } from '../../providers/SettingsProvider';
import { KeenIconsStyleType } from '../keenicons/types';

const SettingsFormKeenIcons = () => {
  const { settings, updateSettings } = useSettings();
  const { keeniconsStyle } = settings;

  const handleKeenIconsChange = (keeniconsStyle: KeenIconsStyleType) => {
    updateSettings({
      keeniconsStyle
    });
  };

  return (
    <FormControl
      sx={{
        mb: 2
      }}
    >
      <FormLabel>KeenIcons</FormLabel>
      <RadioGroup row name="settings-keenicons">
        <FormControlLabel
          value="duotone"
          control={<Radio />}
          label="Duotone"
          checked={keeniconsStyle === 'duotone'}
          onChange={() => handleKeenIconsChange('duotone')}
        />
        <FormControlLabel
          value="outline"
          control={<Radio />}
          label="Outline"
          checked={keeniconsStyle === 'outline'}
          onChange={() => handleKeenIconsChange('outline')}
        />
        <FormControlLabel
          value="solid"
          control={<Radio />}
          label="Solid"
          checked={keeniconsStyle === 'solid'}
          onChange={() => handleKeenIconsChange('solid')}
        />
      </RadioGroup>
    </FormControl>
  );
};

export { SettingsFormKeenIcons };
