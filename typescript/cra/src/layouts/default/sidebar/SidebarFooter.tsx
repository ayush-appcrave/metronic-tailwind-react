import React, { useState, useEffect, useRef, SetStateAction } from 'react';
import { Stack, Avatar, Button, Box } from '@mui/material';
import { useDefaultLayout } from '..';
import { useAuth } from '../../../auth';
import { toAbsoluteUrl } from '../../../utils/Assets';

interface Props {
  setFooterHeight: React.Dispatch<React.SetStateAction<number>>;
}

const SidebarFooter = ({ setFooterHeight }: Props) => {
  const { isSidebarCollapse } = useDefaultLayout();
  const { currentUser, logout } = useAuth();
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
      }}>
      Sidebar Footer
    </Stack>
  );
};

export { SidebarFooter };
