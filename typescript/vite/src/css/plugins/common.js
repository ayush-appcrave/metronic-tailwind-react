/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addVariant, addComponents, addBase, e, theme, config}) => {

  addVariant('overlay-open', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.open.${e(`overlay-open${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.open .${e(`overlay-open${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('toggle-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.toggle.active .${e(
            `toggle-active${separator}${className}`,
        )}`;
      });
    },
  ]);
  
  addVariant('collapse-open', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.collapse.open .${e(
            `collapse-open${separator}${className}`,
        )}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.collapse.open.${e(
            `collapse-open${separator}${className}`,
        )}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.collapse-toggle.open .${e(
            `collapse-open${separator}${className}`,
        )}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.collapse-toggle.open.${e(
            `collapse-open${separator}${className}`,
        )}`;
      });
    },
  ]);

  addVariant('dismiss', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.dismiss.${e(`dismiss${separator}${className}`)}`;
    });
  });

  addVariant('tab-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-tab-toggle].active.${e(`tab-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-tab-toggle].active .${e(`tab-active${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('scrollspy-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-scrollspy-anchor].active.${e(`scrollspy-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-scrollspy-anchor].active .${e(`scrollspy-active${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('scrollspy-hover', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-scrollspy-anchor]:hover .${e(`scrollspy-hover${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('accordion-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.accordion.active.${e(
            `accordion-active${separator}${className}`,
        )}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.accordion.active > .accordion-toggle .${e(
            `accordion-active${separator}${className}`,
        )}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.accordion.active > .accordion-toggle.${e(
            `accordion-active${separator}${className}`,
        )}`;
      });
    },
  ]);  

  addVariant('light-mode', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `[data-theme-mode=light] .${e(`light-mode${separator}${className}`)}`;
		});
	});

	addVariant('dark-mode', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `[data-theme-mode=dark] .${e(`dark-mode${separator}${className}`)}`;
		});
	});

	addVariant('system-mode', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `[data-theme-mode=system] .${e(`system-mode${separator}${className}`)}`;
		});
	});

  addVariant('below-2lx', "@media screen and (max-width: theme('screens.lg'))");
  addVariant('below-xl', "@media screen and (max-width: theme('screens.xl'))");
  addVariant('below-lg', "@media screen and (max-width: theme('screens.lg'))");
  addVariant('below-md', "@media screen and (max-width: theme('screens.md'))");
  addVariant('below-sm', "@media screen and (max-width: theme('screens.sm'))");

  const breakpoints = {};
  const screens = config().theme.screens;
  for (const screen of Object.keys(screens)) {
    const pixels = screens[screen];
    breakpoints[`--tw-${screen}`] = pixels;
  };
  addBase({
    ':root': breakpoints,
  });
});