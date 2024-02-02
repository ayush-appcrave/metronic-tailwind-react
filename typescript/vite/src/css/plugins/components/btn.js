/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addVariant, addComponents, e, theme}) => {
  // Base
  addComponents({
    '.btn': {
      'display': 'inline-flex',
      'align-items': 'center',
      'cursor': 'pointer',
      'line-height': '1',
      'border-radius': theme('custom.components.common.borderRadius.btn'), 
      'height': theme('custom.components.btn.DEFAULT.height'),
      'padding-left': theme('custom.components.btn.DEFAULT.px'),
      'padding-right': theme('custom.components.btn.DEFAULT.px'),
      'gap': theme('custom.components.btn.DEFAULT.gap'),
      'border': '1px solid transparent',      
      'font-weight': theme('custom.components.btn.DEFAULT.fontWeight'),
      'font-size': theme('custom.components.btn.DEFAULT.fontSize'),
    },
    '.btn-icon': {
      'flex-shrink': '0',
      'padding': '0',
      'gap': '0',
      'width': theme('custom.components.btn.DEFAULT.height'),    
      'i': {
        'line-height': '0 !important',
      }
    },
    '.btn-xs': {
      'height': theme('custom.components.btn.xs.height'),
      'padding-left': theme('custom.components.btn.xs.px'),
      'padding-right': theme('custom.components.btn.xs.px'),
      'font-weight': theme('custom.components.btn.xs.fontWeight'),
      'font-size': theme('custom.components.btn.xs.fontSize'),
      'gap': theme('custom.components.btn.xs.gap'),
      '&.btn-icon': {
        'width': theme('custom.components.btn.xs.height'),       
      }
    },
    '.btn-sm': {
      'height': theme('custom.components.btn.sm.height'),
      'padding-left': theme('custom.components.btn.sm.px'),
      'padding-right': theme('custom.components.btn.sm.px'),
      'font-weight': theme('custom.components.btn.sm.fontWeight'),
      'font-size': theme('custom.components.btn.sm.fontSize'),
      'gap': theme('custom.components.btn.sm.gap'),
      '&.btn-icon': {
        'width': theme('custom.components.btn.sm.height'),       
      }
    },
    '.btn-lg': {
      'height': theme('custom.components.btn.lg.height'),
      'padding-left': theme('custom.components.btn.lg.px'),
      'padding-right': theme('custom.components.btn.lg.px'),
      'font-weight': theme('custom.components.btn.lg.fontWeight'),
      'font-size': theme('custom.components.btn.lg.fontSize'),
      'gap': theme('custom.components.btn.lg.gap'),
      '&.btn-icon': {
        'width': theme('custom.components.btn.lg.height'),       
      }
    },
  });

  // Disabled state
  addComponents({
    '.btn': {    
      '&[disabled], &.disabled': {
        'opacity': '50',
        'pointer-events': 'none',  
      },      
    },
  });

  // Only icon option
  addComponents({
    '.btn-icon': {   
      'justify-content': 'center', 
      'flex-shrink': '0',
      'padding': '0',
      'gap': '0',
      'width': theme('custom.components.btn.DEFAULT.height'),    
    },
    '.btn-icon.btn-xs': {
      'width': theme('custom.components.btn.xs.height'), 
    },
    '.btn-icon.btn-sm': {
      'width': theme('custom.components.btn.sm.height'),     
    },
    '.btn-icon.btn-lg': {
      'width': theme('custom.components.btn.lg.height'),       
    },
  });

  // Icon sizes
  addComponents({
    '.btn': {
      'i': {
        'font-size': theme('custom.components.btn.DEFAULT.iconFontSize'),
        'line-height': '0 !important',
      },  
    },    
    '.btn-icon': {  
      'i': {
        'font-size': theme('custom.components.btn.DEFAULT.onlyIconFontSize'),
      },
    },
    '.btn-xs': {
      'i': {
        'font-size': theme('custom.components.btn.xs.iconFontSize'),
      },      
      '&.btn-icon': {  
        'i': {
          'font-size': theme('custom.components.btn.xs.onlyIconFontSize'),
        },
      }
    },
    '.btn-sm': {
      'i': {
        'font-size': theme('custom.components.btn.sm.iconFontSize'),
      },      
      '&.btn-icon': {  
        'i': {
          'font-size': theme('custom.components.btn.sm.onlyIconFontSize'),
        },
      }
    },
    '.btn-lg': {
      'i': {
        'font-size': theme('custom.components.btn.lg.iconFontSize'),
      },      
      '&.btn-icon': {  
        'i': {
          'font-size': theme('custom.components.btn.lg.onlyIconFontSize'),
        },
      }
    },
    '.btn-icon-sm': {
      'i': {
        'font-size': `${theme('fontSize.sm')} !important`,
      },
    },
    '.btn-icon-md': {
      'i': {
        'font-size': `${theme('fontSize.md')} !important`,
      },
    },
    '.btn-icon-lg': {
      'i': {
        'font-size': `${theme('fontSize.lg')} !important`,
      },
    },
    '.btn-icon-xl': {
      'i': {
        'font-size': `${theme('fontSize.xl')} !important`,
      },
    },
    '.btn-icon-2xl': {
      'i': {
        'font-size': `${theme('fontSize.2xl')} !important`,
      },
    },
  });

  // Link varaint
  addComponents({
    '.btn-link': {
      'color': 'var(--tw-primary)',
      'font-size': theme('fontSize.2sm'),
      'height': 'auto',
      'padding-bottom': '0.25em',
      'padding-left': '0',
      'padding-right': '0',
      'border-radius': '0',
      'font-weight': theme('fontWeight.semibold'),
      'background-color': 'transparent',      
      'border-bottom': '1px dashed var(--tw-primary)',
      '&:hover, &:focus, &:active, &.active' : {
        'background-color': 'transparent',   
        'border-bottom': '1px dashed var(--tw-primary-active)',
        'color': 'var(--tw-primary-active)',
      },
      '&.btn-sm': {
        'font-size': theme('fontSize.xs'),
      },
      '&.btn-lg': {
        'font-size': theme('fontSize.sm'),
      }
    },
  });

  // Color varaints
  const colors = ['primary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'secondary'];

  colors.forEach((color) => {
    if (color === 'light') {
      addComponents({
        '.btn-light': {
          'color': 'var(--tw-gray-700)',
          'border-color':  'var(--tw-gray-300)',
          'background-color': 'var(--tw-light)',      
          'i': {
            'color': 'var(--tw-gray-500)',
          },
          '&:hover, &:focus, &:active, &.active' : {
            'border-color':  'var(--tw-gray-300)',
            'background-color': 'var(--tw-light-active)',
            'box-shadow': 'var(--tw-box-shadow)',
            'color': 'var(--tw-gray-800)',
            'i': {
              'color': 'var(--tw-gray-600)',
            },
          }
        },
        '.btn-light.btn-clear': {
          'color': 'var(--tw-gray-700)',
          'background-color': 'transparent',
          'border-color': 'transparent',
          'box-shadow': 'none',
          'i': {
            'color': 'var(--tw-gray-500)',
          },
          '&:hover, &:focus, &:active, &.active' : {
            'color': theme('colors.white'),
            'background-color': 'var(--tw-gray-200)',
            'box-shadow': 'none',
            'border-color': 'transparent',
            'color': 'var(--tw-gray-800)',
            'i': {
              'color': 'var(--tw-gray-600)',
            },
          }
        },
        '.btn-light.btn-clear.btn-icon': {
          'i': {
            'color': 'var(--tw-gray-600)',
          },
          '&:hover, &:focus, &:active, &.active' : {
            'i': {
              'color': 'var(--tw-gray-700)',
            },
          }
        },
      });
    } else if (color === 'secondary') {
      addComponents({
        '.btn-secondary': {
          'color': 'var(--tw-gray-700)',
          'border-color':  'var(--tw-gray-200)',
          'background-color': 'var(--tw-secondary)',      
          'i': {
            'color': 'var(--tw-gray-500)',
          },
          '&:hover, &:focus, &:active, &.active' : {
            'border-color':  'var(--tw-gray-300)',
            'background-color': 'var(--tw-secondary-active)',
            'box-shadow': 'var(--tw-box-shadow)',
            'color': 'var(--tw-gray-800)',
            'i': {
              'color': 'var(--tw-gray-600)',
            },
          },
        },
      });
    } else {
      addComponents({
        [`.btn-${color}`]: {
          'color': theme('colors.white'),
          'background-color': `var(--tw-${color})`,
          '&:hover, &:focus, &:active, &.active' : {
            'background-color': `var(--tw-${color}-active)`,
            'box-shadow': `var(--tw-${color}-box-shadow)`,
          }
        },
        [`.btn-light.btn-${color}`]: {
          'color': `var(--tw-${color})`,
          'background-color': `var(--tw-${color}-light)`,
          'border-color': `var(--tw-${color}-clarity)`,
          'i': {
            'color': `var(--tw-${color})`,
          },
          '&:hover, &:focus, &:active, &.active' : {
            'color': theme('colors.white'),
            'background-color': `var(--tw-${color}-active)`,
            'box-shadow': 'none',
            'border-color': 'transparent',
            'i': {
              'color': theme('colors.white'),
            },
          }
        },
        [`.btn-clear.btn-${color}`]: {
          'color': `var(--tw-${color})`,
          'background-color': 'transparent',
          '&:hover, &:focus, &:active, &.active' : {
            'color': theme('colors.white'),
            'background-color': `var(--tw-${color})`,
            'box-shadow': 'none',
          }
        },
      });
    }
  });   
});