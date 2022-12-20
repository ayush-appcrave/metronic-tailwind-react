import { Box, List, ListSubheader } from '@mui/material';
import { useDefaultLayout } from '..';
import { useNavs } from '../../../providers/NavsProvider';
import Scrollbar from '../../../components/scrollbar';
import { Nav, NavItem, NavConfigType } from '../../../components/nav';

const SidebarNav = () => {
  const {isSidebarCollapse} = useDefaultLayout();
	const { navs } = useNavs();

  return (
    <Box
			sx={{        
				px: 2,
			}}
		>
			<Scrollbar 
				forceVisible="x" 
				autoHide={true} 
				sx={{
					height: 700
				}}              
			>
				<Nav 
					variant="inline"
					direction="vertical"
					indention={3.15}
					items={navs.verticalNav}
					sx={{
						
					}}
				/>				
			</Scrollbar>
		</Box>
  );
}

export { SidebarNav };