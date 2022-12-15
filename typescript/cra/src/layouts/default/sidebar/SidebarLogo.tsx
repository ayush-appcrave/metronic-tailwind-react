import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useDefaultLayout } from "../DefaultLayoutProvider";

type Props = {
  sx?: Object
};

const SidebarLogo = ({ sx }: Props) => {
  const {isSidebarCollapse} = useDefaultLayout();

  return (
    <a href="/" style={{lineHeight: '0px'}}>      
      <img 
        src="/media/logos/default.svg" 
        alt="logo" 
        style={{ 
          display: isSidebarCollapse ? 'none' : 'inline-block', 
          height: '30px', 
          maxWidth: 'none', 
          cursor: 'pointer'
        }}
      />      
      
      <img 
        src="/media/logos/default-mini.svg" 
        alt="logo" 
        style={{ 
          display: isSidebarCollapse ? 'inline-block' : 'none', 
          height: '30px', 
          maxWidth: 'none', 
          cursor: 'pointer'
        }}/>
    </a>      
  );
}

export { SidebarLogo };