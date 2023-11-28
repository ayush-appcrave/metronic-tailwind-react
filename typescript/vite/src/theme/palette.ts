import { alpha } from '@mui/material/styles';

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    backdrop: string;
  }
}

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
  0: '#000000',
  100: '#1b1b29',
  200: '#2B2B40',
  300: '#323248',
  400: '#474761',
  500: '#565674',
  600: '#6D6D80',
  700: '#92929F',
  800: '#CDCDDE',
  900: '#FFFFFF'
};

const PRIMARY_LIGHT = {
  light: '#EEF6FF',
  main: '#3E97FF',
  dark: '#2884EF',
  contrastText: '#fff'
};

const PRIMARY_DARK = {
  light: '#EEF6FF',
  main: '#3E97FF',
  dark: '#2884EF',
  contrastText: '#fff'
};

const SECONDARY_LIGHT = {
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  contrastText: '#fff'
};

const SECONDARY_DARK = {
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  contrastText: '#fff'
};

const INFO_LIGHT = {
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  contrastText: '#fff'
};

const INFO_DARK = {
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  contrastText: '#fff'
};

const SUCCESS_LIGHT = {
  light: '#86E8AB',
  main: '#36B37E',
  dark: '#1B806A',
  contrastText: '#fff'
};

const SUCCESS_DARK = {
  light: '#86E8AB',
  main: '#36B37E',
  dark: '#1B806A',
  contrastText: '#fff'
};

const WARNING_LIGHT = {
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  contrastText: GREY_LIGHT[800]
};

const WARNING_DARK = {
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  contrastText: GREY_DARK[800]
};

const ERROR_LIGHT = {
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  contrastText: '#fff'
};

const ERROR_DARK = {
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  contrastText: '#fff'
};

const COMMON_LIGHT = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY_LIGHT,
  secondary: SECONDARY_LIGHT,
  info: INFO_LIGHT,
  success: SUCCESS_LIGHT,
  warning: WARNING_LIGHT,
  error: ERROR_LIGHT,
  grey: GREY_LIGHT,
  divider: alpha(GREY_LIGHT[500], 0.24),
  action: {
    hover: GREY_LIGHT[100],
    selected: alpha(GREY_LIGHT[200], 0.85),
    focus: alpha(GREY_LIGHT[200], 0.85),
    disabledOpacity: 0.5
  }
};

const COMMON_DARK = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY_DARK,
  secondary: SECONDARY_DARK,
  info: INFO_DARK,
  success: SUCCESS_DARK,
  warning: WARNING_DARK,
  error: ERROR_DARK,
  grey: GREY_DARK,
  divider: alpha(GREY_DARK[500], 0.24),
  action: {
    hover: GREY_DARK[100],
    selected: alpha(GREY_DARK[200], 0.85),
    focus: alpha(GREY_DARK[200], 0.85),
    disabledOpacity: 0.5
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
      paper: '#ffffff',
      default: '#ffffff',
      backdrop: alpha('#000000', 0.75)
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
      default: GREY_DARK[100],
      backdrop: alpha('#000000', 0.75)
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
