import { useState, useEffect } from 'react';
import { Drawer } from '@mui/material';
import { SettingsHeader } from './SettingsHeader';
import { SettingsBody } from './SettingsBody';
import { SettingsFooter } from './SettingsFooter';
import { SettingsToggleButton } from './SettingsToggleButton';

const Settings = () => {
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const handleToggle = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {}, [open]);

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
        }}>
        <SettingsHeader setHeaderHeight={setHeaderHeight} onCloseClick={handleToggle} />
        <SettingsBody headerHeight={headerHeight} footerHeight={footerHeight} />
        <SettingsFooter setFooterHeight={setHeaderHeight} />
      </Drawer>
      <SettingsToggleButton onClick={handleToggle} />
    </>
  );
};

export { Settings };
