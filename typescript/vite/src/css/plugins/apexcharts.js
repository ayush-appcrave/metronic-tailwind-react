/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  // Base
  addComponents({
    '.apexcharts-text, .apexcharts-title-text, .apexcharts-legend-text': {
      'font-family': 'inherit',
    },
    '.apexcharts-title-text': {
      'font-weight': theme('fontWeight.normal'),
    },
    '.apexcharts-pie-label': {
      'font-size': theme('fontSize.xs'),
    },
    '.apexcharts-toolbar': {
      'text-align': 'left !important',
    },
    '.apexcharts-menu': {
      'box-shadow': 'var(--tw-dropdown-box-shadow)', 
      'background-color': 'var(--tw-dropdown-background-color)', 
      'border-radius': theme('custom.components.common.borderRadius.dropdown'), 
      'border': '0 !important',
      'padding': '0.5rem 0 !important',
      'overflow': 'hidden',
      'min-width': '10rem !important',
      '.apexcharts-menu-item': {
        'padding': '0.5rem 0.5rem',    
        '&:hover': {
          'background-color': 'var(--tw-gray-100) !important'
        }
      },
    },
    '.apexcharts-tooltip': {
      'border-radius': theme('custom.components.common.borderRadius.tooltip'), 
      'box-shadow': 'var(--tw-tooltip-box-shadow)',
      'background-color': 'var(--tw-tooltip-background-color)', 
      'color': 'var(--tw-gray-800)',
      'border': '0 !important',
      '.apexcharts-tooltip-title': {
        'background-color': 'transparent !important', 
        'font-weight': theme('fontWeight.semibold'), 
        'color': 'var(--tw-gray-800)',
        'border-bottom': '1px solid var(--tw-gray-200) !important',
      },    
    },
    '.apexcharts-xaxistooltip': {
      'border-radius': `${theme('custom.components.common.borderRadius.tooltip')} !important`, 
      'box-shadow': 'var(--tw-tooltip-box-shadow) !important',
      'background-color': 'var(--tw-tooltip-background-color) !important', 
      'color': 'var(--tw-gray-800)',
      'border': '0 !important',
      '&:before': {
        'border-bottom': '0 !important',
      },      
    },
    '.apexcharts-legend': {
      'display': 'flex',
      'flex-direction': 'column',
      'gap': theme('spacing.2'),
      '.apexcharts-legend-series': {
        'gap': theme('spacing.1'),
        'display': 'flex',
        'align-items': 'center',
        '.apexcharts-legend-text': {
          'font-size': `${theme('fontSize.sm')} !important`,
          'font-weight': `${theme('fontWeight.medium')} !important`, 
          'color': 'var(--tw-gray-700) !important',
        },
      },
    },
    '.apexcharts-card-rounded': {
      '.apexcharts-canvas': {
        'svg': {
          'border-bottom-left-radius': theme('custom.components.common.borderRadius.card'), 
			    'border-bottom-right-radius':theme('custom.components.common.borderRadius.card'), 
        }
      }
    },
    '.apexcharts-rounded-sm': {
      '.apexcharts-canvas': {
        'svg': {
          'border-radius': theme('borderRadius.sm'), 
        }
      }
    },
    '.apexcharts-rounded': {
      '.apexcharts-canvas': {
        'svg': {
          'border-radius': theme('borderRadius'), 
        }
      }
    },
    '.apexcharts-rounded-lg': {
      '.apexcharts-canvas': {
        'svg': {
          'border-radius': theme('borderRadius.lg'), 
        }
      }
    },
    '.apexcharts-rounded-xl': {
      '.apexcharts-canvas': {
        'svg': {
          'border-radius': theme('borderRadius.xl'), 
        }
      }
    },
  });   
});