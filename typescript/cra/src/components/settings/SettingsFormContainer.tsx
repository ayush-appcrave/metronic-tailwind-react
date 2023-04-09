import { Box, List, ListSubheader, Direction } from '@mui/material';
import { useViewport } from '../../hooks';
import Scrollbar from '../scrollbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSettings } from "../../providers/SettingsProvider";
import { SettingsContainerType } from "../../config";

const SettingsFormContainer = () => {
	const { settings, updateSettings } = useSettings();
  const { container } = settings;

	const handleContainerChange = (container: SettingsContainerType) => {
    updateSettings({
      container
    });
  };

  return (
		<FormControl
			sx={{
				mb: 2
			}}
		>
      <FormLabel>Container</FormLabel>
      <RadioGroup
        row
        name="settings-direction"
      >
        <FormControlLabel 
					value="fluid" 
					control={<Radio />} 
					label="Fluid" 
					checked={container === 'fluid'}
					onChange={() => handleContainerChange("fluid")}
				/>
        <FormControlLabel 
					value="fixed" 
					control={<Radio />} 
					label="Fixed" 
					checked={container === 'fixed'}
					onChange={() => handleContainerChange("fixed")}
				/>
      </RadioGroup>
    </FormControl>
  );
}

export { SettingsFormContainer };