import { Stack } from '@mui/material';
import { useDefaultLayout } from '..';
import { SidebarLogo } from './SidebarLogo';
import { SidebarCollapseButton } from './SidebarCollapseButton';

const SidebarHeader = () => {
  const {isSidebarCollapse, setSidebarCollapse} = useDefaultLayout();

  const handleSidebarCollapse = () => {   
    if (isSidebarCollapse === true) {
      setSidebarCollapse(false);
    } else {
      setSidebarCollapse(true);
    }
  };  

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{        
        flexShrink: 0,
        position: 'relative',
        px: 4,
        py: 4
      }}
    >
      <SidebarLogo/>

      <SidebarCollapseButton onToggle={handleSidebarCollapse}/>
    </Stack>
  );
}

export { SidebarHeader };