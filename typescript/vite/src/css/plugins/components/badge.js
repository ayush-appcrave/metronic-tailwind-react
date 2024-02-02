/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  // Base
  addComponents({
    '.badge': {
      'display': 'inline-flex',
      'align-items': 'center',
      'line-height': '1',
      'border-radius': theme('custom.components.common.borderRadius.badge'),      
      'padding-left': theme('custom.components.badge.DEFAULT.px'),
      'padding-right': theme('custom.components.badge.DEFAULT.px'),
			'padding-top': theme('custom.components.badge.DEFAULT.py'),
      'padding-bottom': theme('custom.components.badge.DEFAULT.py'),
      'border': '1px solid transparent',      
      'font-weight': theme('custom.components.badge.DEFAULT.fontWeight'),
      'font-size': theme('custom.components.badge.DEFAULT.fontSize'),
    },
    '.badge-xs': {
      'padding-left': theme('custom.components.badge.xs.px'),
      'padding-right': theme('custom.components.badge.xs.px'),
			'padding-top': theme('custom.components.badge.xs.py'),
      'padding-bottom': theme('custom.components.badge.xs.py'),
      'font-weight': theme('custom.components.badge.sm.fontWeight'),
      'font-size': theme('custom.components.badge.sm.fontSize'),
    },
    '.badge-sm': {
      'padding-left': theme('custom.components.badge.sm.px'),
      'padding-right': theme('custom.components.badge.sm.px'),
			'padding-top': theme('custom.components.badge.sm.py'),
      'padding-bottom': theme('custom.components.badge.sm.py'),
      'font-weight': theme('custom.components.badge.sm.fontWeight'),
      'font-size': theme('custom.components.badge.sm.fontSize'),
    },
    '.badge-lg': {
      'padding-left': theme('custom.components.badge.lg.px'),
      'padding-right': theme('custom.components.badge.lg.px'),
			'padding-top': theme('custom.components.badge.lg.py'),
      'padding-bottom': theme('custom.components.badge.lg.py'),
      'font-weight': theme('custom.components.badge.lg.fontWeight'),
      'font-size': theme('custom.components.badge.lg.fontSize'),
    }
  });

  // Default option
  addComponents({
    '.badge': {
      'color': 'var(--tw-gray-700)',
      'border-color': 'transparent',
      'background-color': 'var(--tw-gray-200)',      
    },
		'.badge-light': {
      'color': 'var(--tw-gray-600)',
      'border-color': 'transparent',
      'background-color': 'var(--tw-gray-100)',     
    },
    '.badge-outline': {
			'color': 'var(--tw-gray-600)',
      'border-color': 'var(--tw-gray-300)',  
			'background-color': 'var(--tw-gray-100)', 
    }
  });

  // Color options
  const colors = ['primary', 'success', 'danger', 'warning', 'info'];

  colors.forEach((color) => {
    addComponents({
      [`.badge-${color}`]: {
        'color': theme('colors.white'),
        'background-color': `var(--tw-${color})`,
      },
      [`.badge-light.badge-${color}`]: {
        'color': `var(--tw-${color})`,
        'background-color': `var(--tw-${color}-light)`,
      },
			[`.badge-outline.badge-${color}`]: {
				'color': `var(--tw-${color})`,
        'background-color': `var(--tw-${color}-light)`,
        'border-color': `var(--tw-${color}-clarity)`,
      }
    });
  });   
});