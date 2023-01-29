import { Box, List, ListSubheader } from '@mui/material';
import { useDefaultLayout } from '..';
import { useViewport } from '../../../hooks';
import Scrollbar from '../../../components/scrollbar';
import { Nav, NavItem, NavConfigType, NavVerticalStylesConfig } from '../../../components/nav';
import { NAV_VERTICAL } from "../../../config/navs.config";
import { number } from 'yup';

const SidebarNav = () => {
  const {isSidebarExpand, isSidebarCollapse} = useDefaultLayout();
	const styles = NavVerticalStylesConfig();
	const [width, height]= useViewport();

	console.log('height:' + height);

	const scrollableHeight: number = height - 100;

  return (
		<Scrollbar 
			sx={{
				height: scrollableHeight,
				//overflow: 'hidden',
				px: 1.5,
				mx: 1
			}}   
		>
			<Nav 
				variant="inline"
				direction="vertical"
				collapse={isSidebarCollapse}
				expand={isSidebarExpand}
				items={NAV_VERTICAL}
				styles={styles}
			/>				
		</Scrollbar>
  );
}

export { SidebarNav };