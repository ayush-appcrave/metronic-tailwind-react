/* eslint-disable no-unused-vars */
import { alpha, type PaletteMode } from '@mui/material';

import { getPalette } from '../palette';

interface CustomShadowOptions {
  card: string;
  popover: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }
}

const lightModeColor = getPalette('light').grey[500];
const darkModeColor = getPalette('dark').grey[500];

const createShadows = (color: string) => {
  const opacity = alpha(color, 0.15);

  // box-shadow: h-offset v-offset blur spread color;
  return {
    card: `0px 5px 20px 0px ${opacity}`,
    popover: `0px 5px 50px 0px ${opacity}`
  };
};

const getCustomShadows = (mode: PaletteMode) => {
  return mode === 'light' ? createShadows(lightModeColor) : createShadows(darkModeColor);
};

export { getCustomShadows };
