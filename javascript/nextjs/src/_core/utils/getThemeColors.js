import palette from '../theme/palette';

export const colors = [
  {
    name: 'default',
    ...palette.light.primary,
  },
  {
    name: 'purple',
    light: '#B985F4',
    main: '#7635dc',
    dark: '#431A9E',
    contrastText: '#fff',
  },
];

export const defaultOption = colors[0];
export const purpleOption = colors[1];

export default function getThemeColors(key) {
  return {
    default: defaultOption,
    purple: purpleOption
  }[key];
}
