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
    <Box
			sx={{        
				px: 2,
			}}
		>
			<Scrollbar
				sx={{
					height: 700
				}}              
			>
				<Nav 
					variant="inline"
					direction="vertical"
					items={navs.verticalNav}
					styles={styles}
				/>				
			</Scrollbar>
		</Box>
  );
}

export { SidebarNav };