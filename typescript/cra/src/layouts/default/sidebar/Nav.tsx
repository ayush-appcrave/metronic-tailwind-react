import { Box, List, ListSubheader } from '@mui/material';
import { useDefaultLayout } from '../';
import { useNavs } from '../../../providers/NavsProvider';
import Scrollbar from '../../../components/scrollbar';
import { NavItemType, NavItem } from '../../../components/nav';

const Nav = () => {
  const {isSidebarCollapse} = useDefaultLayout();
	const { navs } = useNavs();

  return (
    <Box
			sx={{        
				px: 1.5,
			}}
		>
			<Scrollbar 
				forceVisible="x" 
				autoHide={true} 
				sx={{
					height: 700,
					'& .simplebar-content': {
						display: 'flex',
						flexDirection: 'column'
					}
				}}              
			>
				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
					component="nav"
					aria-labelledby="nested-list-subheader"
					subheader={
						<ListSubheader component="div" id="nested-list-subheader">
							Sidebar menu
						</ListSubheader>
					}
				>
					{(navs.verticalNav as ReadonlyArray<NavItemType>).map(
						(item, index) => (
							<NavItem key={`${index}-${item.title}`} {...item} pl={0} />
						)
					)}
				</List>
			</Scrollbar>
	</Box>
  );
}

export { Nav };