import React, { forwardRef } from 'react';
import { TabPanel as MuiTabPanel, TabPanelProps as MuiTabPanelProps } from '@mui/base/TabPanel';
import clsx from 'clsx';

// Define the extended tab component
const TabPanel = forwardRef<HTMLDivElement, MuiTabPanelProps>((props, ref) => {
  return (
    <MuiTabPanel
      {...props}			
      ref={ref}
    />
  );
});

export { TabPanel };
