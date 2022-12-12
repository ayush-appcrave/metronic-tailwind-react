import { Stack } from '@mui/material';
import { useDefaultLayout } from '../';
import { Logo } from './Logo';
import { CollapseButton } from './CollapseButton';

const Header = () => {
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
      <Logo/>

      <CollapseButton onToggle={handleSidebarCollapse}/>
    </Stack>
  );
}

export { Header };