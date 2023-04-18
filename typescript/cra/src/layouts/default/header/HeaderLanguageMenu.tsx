import { useState, useEffect, MouseEvent } from 'react';
import { Box, Link, Stack, Avatar, Menu, MenuItem, ListItemIcon, useTheme } from '@mui/material';
import { KeenIcon, MenuDropdown } from '../../../components';
import { useAuth } from '../../../auth';
import { useLang } from '../../../providers/TranslationProvider';
import { I18N_LANGUAGES } from '../../../i18n/config';
import { LanguageType } from '../../../i18n/types';

const HeaderLanguageMenu = () => {
  const theme = useTheme();
  const { currentUser, logout } = useAuth();
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
      }}>
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
      <MenuDropdown
        id="languages-menu"
        disableScrollLock={false}
        anchorEl={anchorEl}
        open={open}
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
            mt: 0.5,
            p: 1,
            [theme.breakpoints.up('lg')]: {
              width: '190px'
            },
            [theme.breakpoints.down('lg')]: {
              width: '190px'
            }
          }
        }}>
        {I18N_LANGUAGES.map((language) => (
          <MenuItem
            onClick={() => {
              handleLanguageSelect(language);
            }}
            selected={language.code === currentLanguage.code}
            key={`language-${language.code}`}>
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
      </MenuDropdown>
    </Box>
  );
};

export { HeaderLanguageMenu };
