/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({ addBase }) => {
  // Base
  addBase({
    html: {
      height: '100%'
    },
    body: {
      display: 'flex',
      'flex-direction': 'column',
      height: '100%'
    }
  });

  // App loading state
  addBase({
    '.app-loading': {
      '*': {
        transition: 'none !important'
      }
    }
  });

  // React intergration
  addBase({
    '#root': {
      display: 'flex',
      'flex-grow': '1'
    }
  });
});
