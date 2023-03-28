import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
import { SettingsHeader } from './SettingsHeader';
import { SettingsBody } from './SettingsBody';
import { SettingsFooter } from './SettingsFooter';
import { SettingsToggleButton } from './SettingsToggleButton';

const Settings = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => { 
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {

  }, [open]);

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        hideBackdrop={true}
        PaperProps={{
            sx: {
              width: 325,       
              bgcolor: 'background.paper'
            },
          }}
        >
        <SettingsHeader onCloseClick={handleToggle}/>
        <SettingsBody/>       
        <SettingsFooter/>
      </Drawer>
      <SettingsToggleButton onClick={handleToggle}/>
    </>
  );
}

export { Settings };