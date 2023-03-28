import { Box, List, ListSubheader } from '@mui/material';
import { useViewport } from '../../hooks';
import Scrollbar from '../scrollbar';

const SettingsBody = () => {
	const [width, height]= useViewport();
	const scrollableHeight: number = height - 100;

  return (
		<Scrollbar 
			sx={{
				height: scrollableHeight,
				px: 1.5,
				mx: 1
			}}   
		>
			Content			
		</Scrollbar>
  );
}

export { SettingsBody };