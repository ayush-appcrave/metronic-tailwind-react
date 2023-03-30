import { Box, List, ListSubheader, Direction } from '@mui/material';
import { useViewport } from '../../hooks';
import Scrollbar from '../scrollbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSettings } from "../../providers/SettingsProvider";

const SettingsFormDirection = () => {
	const { settings, updateSettings } = useSettings();
  const { direction } = settings;

	const handleDirectionChange = (direction: Direction) => {
    updateSettings({
      direction
    });
  };

  return (
		<FormControl
			sx={{
				mb: 2
			}}
		>
      <FormLabel>Direction</FormLabel>
      <RadioGroup
        row
        name="settings-direction"
      >
        <FormControlLabel 
					value="ltr" 
					control={<Radio />} 
					label="LTR" 
					checked={direction === 'ltr'}
					onChange={() => handleDirectionChange("ltr")}
				/>
        <FormControlLabel 
					value="rtl" 
					control={<Radio />} 
					label="RTL" 
					checked={direction === 'rtl'}
					onChange={() => handleDirectionChange("rtl")}
				/>
      </RadioGroup>
    </FormControl>
  );
}

export { SettingsFormDirection };