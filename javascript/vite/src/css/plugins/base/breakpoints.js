/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addVariant, addBase, config}) => {
  const breakpoints = {};
  const screens = config().theme.screens;

  for (const screen of Object.keys(screens)) {
    const pixels = screens[screen];

    breakpoints[`--tw-${screen}`] = pixels;
    addVariant(`below-${screen}`, `@media screen and (max-width: theme('screens.${screen}'))`);
  }
  
  addBase({
    ':root': breakpoints
  });
});