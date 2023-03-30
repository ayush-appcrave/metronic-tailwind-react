import React, { useState, useEffect, useRef } from 'react'
import { SetStateAction } from 'react';
import { Stack, Avatar, Button, Box } from '@mui/material';
import { useDefaultLayout } from '..';
import { useAuth } from '../../../auth';
import { toAbsoluteUrl } from '../../../utils/Assets';

type Props = {
  setFooterHeight: React.Dispatch<React.SetStateAction<number>>;
};

const SidebarFooter = ({setFooterHeight}: Props) => {
  const {isSidebarCollapse} = useDefaultLayout();
  const {currentUser, logout} = useAuth();
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      setFooterHeight(elementRef.current.clientHeight);
    }    
  }, []); 

  return (
    <Stack
      ref={elementRef}
      component="div"
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
      <Avatar alt={currentUser!.first_name} src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />

      <Box sx={{
        mx: 5,
      }}>
        {currentUser!.first_name} {currentUser!.last_name}
      </Box>
      
      <Button variant="outlined" onClick={logout}>Logout</Button>
    </Stack>
  );
}

export { SidebarFooter };