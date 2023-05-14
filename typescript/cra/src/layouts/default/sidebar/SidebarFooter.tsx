import React, { useEffect, useRef } from 'react';
import { Stack } from '@mui/material';

interface Props {
  setFooterHeight: React.Dispatch<React.SetStateAction<number>>;
}

const SidebarFooter = ({ setFooterHeight }: Props) => {
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
      Sidebar Footer
    </Stack>
  );
};

export { SidebarFooter };
