/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { alpha } from '@mui/material/styles';

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

// SETUP COLORS
const GREY_LIGHT = {
  0: '#FFFFFF',
  100: '#F5F8FA',
  200: '#EFF2F5',
  300: '#E4E6EF',
  400: '#B5B5C3',
  500: '#A1A5B7',
  600: '#7E8299',
  700: '#5E6278',
  800: '#3F4254',
  900: '#181C32'
};

const GREY_DARK = {
  0: '#FFFFFF',
  100: '#F5F8FA',
  200: '#EFF2F5',
  300: '#E4E6EF',
  400: '#B5B5C3',
  500: '#A1A5B7',
  600: '#7E8299',
  700: '#5E6278',
  800: '#3F4254',
  900: '#181C32'
};

const PRIMARY = {
  light: '#EEF6FF',
  main: '#3E97FF',
  dark: '#2884EF',
  contrastText: '#fff'
};

const SECONDARY = {
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  contrastText: '#fff'
};

const INFO = {
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  contrastText: '#fff'
};

const SUCCESS = {
  light: '#86E8AB',
  main: '#36B37E',
  dark: '#1B806A',
  contrastText: '#fff'
};

const WARNING = {
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  contrastText: GREY_LIGHT[800]
};

const ERROR = {
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  contrastText: '#fff'
};

const COMMON_LIGHT = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY_LIGHT,
  divider: alpha(GREY_LIGHT[500], 0.24),
  action: {
    hover: alpha(GREY_LIGHT[500], 0.08),
    selected: alpha(GREY_LIGHT[500], 0.16),
    disabled: alpha(GREY_LIGHT[500], 0.8),
    disabledBackground: alpha(GREY_LIGHT[500], 0.24),
    focus: alpha(GREY_LIGHT[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

const COMMON_DARK = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY_DARK,
  divider: alpha(GREY_DARK[500], 0.24),
  action: {
    hover: alpha(GREY_DARK[500], 0.08),
    selected: alpha(GREY_DARK[500], 0.16),
    disabled: alpha(GREY_DARK[500], 0.8),
    disabledBackground: alpha(GREY_DARK[500], 0.24),
    focus: alpha(GREY_DARK[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

const getPalette = (themeMode: 'light' | 'dark') => {
  const light = {
    ...COMMON_LIGHT,
    mode: 'light',
    text: {
      primary: GREY_LIGHT[800],
      secondary: GREY_LIGHT[600],
      disabled: GREY_LIGHT[500]
    },
    background: {
      paper: '#fff',
      default: '#fff'
    },
    action: {
      ...COMMON_LIGHT.action,
      hover: GREY_LIGHT[100],
      active: GREY_LIGHT[500]
    }
  } as const;

  const dark = {
    ...COMMON_DARK,
    mode: 'dark',
    text: {
      primary: GREY_DARK[800],
      secondary: GREY_DARK[600],
      disabled: GREY_DARK[500]
    },
    background: {
      paper: GREY_DARK[100],
      default: GREY_DARK[100]
    },
    action: {
      ...COMMON_DARK.action,
      hover: GREY_DARK[100],
      active: GREY_DARK[500]
    }
  } as const;

  return themeMode === 'light' ? light : dark;
};

export { getPalette };
