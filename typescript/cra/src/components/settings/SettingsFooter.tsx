import { Stack } from '@mui/material';
import React, { useEffect, useRef } from 'react';

interface PropsType {
  setFooterHeight: React.Dispatch<React.SetStateAction<number>>;
}

const SettingsFooter = ({ setFooterHeight }: PropsType) => {
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
        px: 2,
        py: 2
      }}
    >
      Footer
    </Stack>
  );
};

export { SettingsFooter };
