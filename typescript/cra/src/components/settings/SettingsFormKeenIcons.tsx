import { Box, List, ListSubheader } from '@mui/material';
import { useViewport } from '../../hooks';
import Scrollbar from '../scrollbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSettings } from "../../providers/SettingsProvider";
import { SettingsKeenIconsType } from "../../config";

const SettingsFormKeenIcons = () => {
	const { settings, updateSettings } = useSettings();
  const { keenicons } = settings;

	const handleKeenIconsChange = (keenicons: SettingsKeenIconsType) => {
    updateSettings({
      keenicons
    });
  };

  return (
		<FormControl
			sx={{
				mb: 2
			}}
		>
      <FormLabel>KeenIcons</FormLabel>
      <RadioGroup
        row
        name="settings-keenicons"
      >
        <FormControlLabel 
					value="duotone" 
					control={<Radio />} 
					label="Duotone" 
					checked={keenicons === 'duotone'}
					onChange={() => handleKeenIconsChange("duotone")}
				/>
        <FormControlLabel 
					value="outline" 
					control={<Radio />} 
					label="Outline" 
					checked={keenicons === 'outline'}
					onChange={() => handleKeenIconsChange("outline")}
				/>
				<FormControlLabel 
					value="solid" 
					control={<Radio />} 
					label="Solid" 
					checked={keenicons === 'solid'}
					onChange={() => handleKeenIconsChange("solid")}
				/>
      </RadioGroup>
    </FormControl>
  );
}

export { SettingsFormKeenIcons };