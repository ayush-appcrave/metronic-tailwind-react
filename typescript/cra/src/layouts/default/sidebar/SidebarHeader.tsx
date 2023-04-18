import React, { useEffect, useRef } from 'react';
import { Stack } from '@mui/material';
import { useDefaultLayout } from '..';
import { SidebarLogo } from './SidebarLogo';
import { SidebarCollapseButton } from './SidebarCollapseButton';

interface Props {
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

const SidebarHeader = ({ setHeaderHeight }: Props) => {
  const { isSidebarCollapse, setSidebarCollapse } = useDefaultLayout();
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      setHeaderHeight(elementRef.current.clientHeight);
    }
  }, []);

  const handleSidebarCollapse = () => {
    if (isSidebarCollapse) {
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
      }}>
      <SidebarLogo />

      <SidebarCollapseButton onToggle={handleSidebarCollapse} />
    </Stack>
  );
};

export { SidebarHeader };
