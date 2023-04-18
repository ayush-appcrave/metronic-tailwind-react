import React, { useState, useEffect, useRef } from 'react';
import { Stack, IconButton, Box } from '@mui/material';
import { KeenIcon } from '../';

interface Props {
  onCloseClick: () => void;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

const SettingsHeader = ({ onCloseClick, setHeaderHeight }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      setHeaderHeight(elementRef.current.clientHeight);
    }
  }, []);

  return (
    <Stack
      ref={elementRef}
      direction="row"
      component="div"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        flexShrink: 0,
        position: 'relative',
        px: 2,
        py: 2
      }}>
      <Box
        sx={{
          paddingLeft: 1
        }}>
        Customization
      </Box>

      <IconButton aria-label="close" onClick={onCloseClick}>
        <KeenIcon
          icon="cross"
          sx={{
            fontSize: '18px'
          }}
        />
      </IconButton>
    </Stack>
  );
};

export { SettingsHeader };
