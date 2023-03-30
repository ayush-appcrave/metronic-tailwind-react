import React, { useState, useEffect, useRef } from 'react'
import { Stack, Avatar, Button, Box } from '@mui/material';
import { useAuth } from '../../auth';
import { toAbsoluteUrl } from '../../utils/Assets';

type Props = {
  setFooterHeight: React.Dispatch<React.SetStateAction<number>>;
};

const SettingsFooter = ({setFooterHeight}: Props) => {
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
      Footer
    </Stack>
  );
}

export { SettingsFooter };