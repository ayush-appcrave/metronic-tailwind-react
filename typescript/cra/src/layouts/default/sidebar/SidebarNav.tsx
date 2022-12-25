import { Box, List, ListSubheader } from '@mui/material';
import { useDefaultLayout } from '..';
import Scrollbar from '../../../components/scrollbar';
import { Nav, NavItem, NavConfigType, NavVerticalStylesConfig } from '../../../components/nav';
import { NAV_VERTICAL } from "../../../config/navs.config";

const SidebarNav = () => {
  const {isSidebarHover, isSidebarCollapse} = useDefaultLayout();
	const styles = NavVerticalStylesConfig();

  return (
		<Scrollbar 
			sx={{
				height: 500,
				px: 1.5,
				mx: 1
			}}   
		>
			<Nav 
				variant="inline"
				direction="vertical"
				collapse={isSidebarCollapse}
				hover={isSidebarHover}
				items={NAV_VERTICAL}
				styles={styles}
			/>				
		</Scrollbar>
  );
}

export { SidebarNav };