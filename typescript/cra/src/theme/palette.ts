import { alpha } from '@mui/material/styles';

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS
const GREY = {
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

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
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
  lighter: '#C8FACD',
  light: '#EEF6FF',
  main: '#3E97FF',
  dark: '#2884EF',
  darker: '#005249',
  contrastText: '#fff'
};

const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff'
};

const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#fff'
};

const SUCCESS = {
  lighter: '#D8FBDE',
  light: '#86E8AB',
  main: '#36B37E',
  dark: '#1B806A',
  darker: '#0A5554',
  contrastText: '#fff'
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: GREY[800]
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#fff'
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

const getPalette = (themeMode: 'light' | 'dark') => {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500]
    },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600]
    }
  } as const;

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600]
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16)
    },
    action: {
      ...COMMON.action,
      active: GREY[500]
    }
  } as const;

  return themeMode === 'light' ? light : dark;
};

export { getPalette };
