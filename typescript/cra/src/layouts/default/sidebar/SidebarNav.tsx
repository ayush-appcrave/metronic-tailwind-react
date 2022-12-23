import { Box, List, ListSubheader } from '@mui/material';
import { useDefaultLayout } from '..';
import { useNavs } from '../../../providers/NavsProvider';
import Scrollbar from '../../../components/scrollbar';
import { Nav, NavItem, NavConfigType, NavVerticalStylesConfig } from '../../../components/nav';

const SidebarNav = () => {
  const {isSidebarCollapse} = useDefaultLayout();
	const { navs } = useNavs();
	const styles = NavVerticalStylesConfig();

  return (
		<Scrollbar 
			sx={{
				height: 500,
				px: 2,
				mx: 1
			}}   
		>
			<Nav 
				variant="inline"
				direction="vertical"
				items={navs.verticalNav}
				styles={styles}
			/>				
		</Scrollbar>
  );
}

export { SidebarNav };