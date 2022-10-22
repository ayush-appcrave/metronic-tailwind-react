const PRIMARY = {
  light: "#EEF6FF",
  main: "#3E97FF",
  dark: "#2884EF",
  contrastText: "#fff",
};

const PRIMARY_DARK = {
  ...PRIMARY,
  light: "#E8FFF3",
};

const SECONDARY = {
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  contrastText: "#fff",
};

const SECONDARY_DARK = {
  ...SECONDARY,
  light: "#84A9FF",
};

const INFO = {
  light: "#F8F5FF",
  main: "#7239EA",
  dark: "#5014D0",
  contrastText: "#fff",
};

const INFO_DARK = {
  ...INFO,
  light: "#F8F5FF",
};

const SUCCESS = {
  light: "#E8FFF3",
  main: "#50CD89",
  dark: "#47BE7D",
  contrastText: "#fff",
};

const SUCCESS_DARK = {
  ...SUCCESS,
  light: "#E8FFF3",
};

const WARNING = {
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  contrastText: "#fff",
};

const WARNING_DARK = {
  ...WARNING,
  light: "#FFE16A",
};

const ERROR = {
  light: "#FFF5F8",
  main: "#F1416C",
  dark: "#D9214E",
  contrastText: "#fff",
};

const ERROR_DARK = {
  ...ERROR,
  light: "#FFF5F8",
};

const GREY = {
  100: "#F5F8FA",
  200: "#EFF2F5",
  300: "#E4E6EF",
  400: "#B5B5C3",
  500: "#A1A5B7",
  600: "#7E8299",
  700: "#5E6278",
  800: "#3F4254",
  900: "#181C32",
};

const GREY_DARK = {
  100: "#F5F8FA",
  200: "#EFF2F5",
  300: "#E4E6EF",
  400: "#B5B5C3",
  500: "#A1A5B7",
  600: "#7E8299",
  700: "#5E6278",
  800: "#3F4254",
  900: "#181C32",
};

const COMMON = {
  black: "#000",
  white: "#fff",
};

const GENERAL = {
  common: COMMON,
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: GREY[200],
  text: { primary: GREY[900], secondary: GREY[700], disabled: GREY[500] },
  background: { paper: COMMON.white, default: GREY[100] },
  action: {
    active: GREY[500],
    activatedOpacity: 0.12,
    hover: GREY[500],
    hoverOpacity: 0.04,
    selected: GREY[500],
    selectedOpacity: 0.08,
    disabled: GREY[500],
    disabledBackground: GREY[200],
    disabledOpacity: 0.48,
    focus: GREY[500],
    focusOpacity: 0.12,
  },
};

const GENERAL_DARK = {
  common: COMMON,
  primary: PRIMARY_DARK,
  secondary: SECONDARY_DARK,
  info: INFO_DARK,
  success: SUCCESS_DARK,
  warning: WARNING_DARK,
  error: ERROR_DARK,
  grey: GREY_DARK,
  divider: GREY_DARK[200],
  text: {
    primary: GREY_DARK[900],
    secondary: GREY_DARK[700],
    disabled: GREY_DARK[500],
  },
  background: { paper: GREY_DARK[100], default: GREY_DARK[100] },
  action: {
    active: GREY_DARK[500],
    activatedOpacity: 0.12,
    hover: GREY_DARK[500],
    hoverOpacity: 0.04,
    selected: GREY_DARK[500],
    selectedOpacity: 0.08,
    disabled: GREY_DARK[500],
    disabledBackground: GREY_DARK[200],
    disabledOpacity: 0.48,
    focus: GREY_DARK[500],
    focusOpacity: 0.12,
  },
};

const palette = {
  light: {
    ...GENERAL,
    mode: "light",
  },
  dark: {
    ...GENERAL_DARK,
    mode: "dark",
  },
};

const COLORS = {
  PRIMARY,
  PRIMARY_DARK,
  SECONDARY,
  SECONDARY_DARK,
  WARNING,
  ERROR,
  ERROR_DARK,
  GREY,
  GREY_DARK,
  COMMON,
  GENERAL,
  GENERAL_DARK,
};

export { palette, COLORS };
