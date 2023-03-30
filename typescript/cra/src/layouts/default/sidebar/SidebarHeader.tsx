import React, { useState, useEffect, useRef } from 'react'
import { SetStateAction } from 'react';
import { Stack } from '@mui/material';
import { useDefaultLayout } from '..';
import { SidebarLogo } from './SidebarLogo';
import { SidebarCollapseButton } from './SidebarCollapseButton';

type Props = {
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
};

const SidebarHeader = ({setHeaderHeight}: Props) => {
  const {isSidebarCollapse, setSidebarCollapse} = useDefaultLayout();
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      setHeaderHeight(elementRef.current.clientHeight);
    }    
  }, []);  

  const handleSidebarCollapse = () => {   
    if (isSidebarCollapse === true) {
      setSidebarCollapse(false);
    } else {
      setSidebarCollapse(true);
    }
  };  

  return (
    <Stack
      ref={elementRef}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      component="div"
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