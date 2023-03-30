import { Box, List, ListSubheader } from '@mui/material';
import { useViewport } from '../../hooks';
import Scrollbar from '../scrollbar';
import { SettingsFormMode } from './SettingsFormMode';
import { SettingsFormKeenIcons } from './SettingsFormKeenIcons';
import { SettingsFormDirection } from './SettingsFormDirection';
import { SettingsFormContainer } from './SettingsFormContainer';

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
			<SettingsFormMode/>
			<SettingsFormKeenIcons/>
			<SettingsFormDirection/>
			<SettingsFormContainer/>
		</Scrollbar>
  );
}

export { SettingsBody };