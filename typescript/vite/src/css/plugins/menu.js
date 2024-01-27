/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addVariant, addComponents, addBase, e, theme, config}) => {
  addComponents({
    '.menu': {
      'display': 'flex',
    },
    '.menu-item, .menu-link': {
      'padding': '0',
      'margin': '0',
    },
    '.menu-item': {
      'display': 'flex',
      'flex-direction': 'column'
    },
    '.menu-link': {
      'display': 'flex',
      'align-items': 'center',
      'flex-grow': '1',
    },
    '.menu-title': {
      'display': 'flex',
      'align-items': 'center',
      'flex-grow': '1',
    },
    '.menu-icon, .menu-toggle, .menu-bullet': {
      'display': 'flex',
      'align-items': 'center',
      'flex-shrink': '0',
    },
    '.menu-dropdown, .menu-accordion': {
      'padding': '0',
      'margin': '0',
      'display': 'none',
      'align-items': 'stretch',
      'flex-direction': 'column',
    },
    '.menu-dropdown': {
      'box-shadow': 'var(--tw-dropdown-box-shadow)', 
      'background-color': 'var(--tw-dropdown-background-color)', 
      'border-radius': theme('custom.components.common.borderRadius.dropdown'), 
      '.show.menu-item-dropdown > &, &.menu.show, &.show[data-popper-placement]': {
        'display': 'flex',
        'will-change': 'transform',
      },
    },
    '.menu-accordion': {
      'display': 'none',
      'transition': 'height .3s ease',
      '.show:not(.menu-dropdown) > &, .transitioning:not(.menu-dropdown) > &, &.show': {
        'display': 'flex',
      },
    },
  });

	addVariant('menu-item-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.active.${e(`menu-item-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.active > .menu-link.${e(`menu-item-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.active > .menu-link .${e(`menu-item-active${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('menu-item-here', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.here.${e(`menu-item-here${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.here > .menu-link.${e(`menu-item-here${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.here > .menu-link .${e(`menu-item-here${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('menu-item-show', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.show.${e(`menu-item-show${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.show > .menu-link.${e(`menu-item-show${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.show > .menu-link .${e(`menu-item-show${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('menu-link-hover', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-link:hover.${e(`menu-link-hover${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-link:hover .${e(`menu-link-hover${separator}${className}`)}`;
      });
    },
  ]);
});