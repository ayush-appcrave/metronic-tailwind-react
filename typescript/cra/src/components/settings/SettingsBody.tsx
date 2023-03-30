import { Box, List, ListSubheader } from '@mui/material';
import { useViewport } from '../../hooks';
import Scrollbar from '../scrollbar';
import { SettingsForm } from './SettingsForm';

type Props = {
	headerHeight?: number
  footerHeight?: number
};

const SettingsBody = ({headerHeight = 0, footerHeight = 0}: Props) => {
	const [width, height]= useViewport();
	const scrollableHeight: number = height - headerHeight - footerHeight;

  return (
		<Scrollbar 
			sx={{
				height: scrollableHeight,
				px: 2,
				mx: 1
			}}   
		>
			<SettingsForm/>
		</Scrollbar>
  );
}

export { SettingsBody };