import { Drawer } from '@mui/material';
import { useState } from 'react';

import { SettingsBody } from './SettingsBody';
import { SettingsFooter } from './SettingsFooter';
import { SettingsHeader } from './SettingsHeader';
import { SettingsToggleButton } from './SettingsToggleButton';

const Settings = () => {
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        hideBackdrop={true}
        PaperProps={{
          sx: {
            width: 375,
            bgcolor: 'background.paper'
          }
        }}
      >
        <SettingsHeader setHeaderHeight={setHeaderHeight} handleClose={handleToggle} />
        <SettingsBody headerHeight={headerHeight} footerHeight={footerHeight} />
        <SettingsFooter setFooterHeight={setFooterHeight} />
      </Drawer>
      <SettingsToggleButton onClick={handleToggle} />
    </>
  );
};

export { Settings };
