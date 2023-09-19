import { Box, Menu, MenuItem, useTheme } from '@mui/material';
import { type MouseEvent, useState } from 'react';

import { I18N_LANGUAGES } from '../../../i18n/config';
import { type LanguageType } from '../../../i18n/types';
import { useLang } from '../../../providers/TranslationProvider';

const HeaderLanguageMenu = () => {
  const theme = useTheme();
  const { currentLanguage, changeLanguage } = useLang();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language: LanguageType) => {
    handleClose();
    changeLanguage(language);
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box
        component="img"
        onClick={handleClick}
        src={currentLanguage.flag}
        sx={{
          borderRadius: '4px',
          height: '22px',
          cursor: 'pointer'
        }}
        aria-haspopup="true"
        aria-controls={open ? 'language-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
      />
      <Menu
        id="languages-menu"
        open={open}
        disableScrollLock={false}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}
        PaperProps={{
          sx: {
            [theme.breakpoints.up('lg')]: {
              width: '190px'
            },
            [theme.breakpoints.down('lg')]: {
              width: '190px'
            }
          }
        }}
      >
        {I18N_LANGUAGES.map((language) => (
          <MenuItem
            onClick={() => {
              handleLanguageSelect(language);
            }}
            selected={language.code === currentLanguage.code}
            key={`language-${language.code}`}
          >
            <Box
              component="img"
              src={language.flag}
              sx={{
                height: '18px',
                borderRadius: '4px',
                mr: 1
              }}
            />

            <Box component="span">{language.label}</Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export { HeaderLanguageMenu };
