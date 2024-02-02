/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

const svgToDataUri = require('mini-svg-data-uri');

export default plugin(({addVariant, addComponents, theme, e}) => {
	// Form input
	addComponents({
		'.form-input': {
			'appearance': 'none',
			'box-shadow': 'none',
			'outline': 'none',
			'font-weight': theme('custom.components.btn.DEFAULT.fontWeight'),
      'font-size': theme('custom.components.btn.DEFAULT.fontSize'),
			'background-color': 'var(--tw-light-active)',
			'border-radius': theme('custom.components.common.borderRadius.btn'), 
      'height': theme('custom.components.btn.DEFAULT.height'),
      'padding-left': theme('custom.components.btn.DEFAULT.px'),
      'padding-right': theme('custom.components.btn.DEFAULT.px'), 
			'border': '1px solid var(--tw-gray-300)',
			'color': 'var(--tw-gray-700)',
			'&::placeholder': {
				'color': 'var(--tw-gray-500)',
			},
			'&:hover': {
				'border-color': 'var(--tw-gray-400)',
			},
			'&:focus': {
				'border-color': 'var(--tw-primary)',
				'box-shadow': 'var(--tw-form-input-focus-box-shadow)',
				'color': 'var(--tw-gray-700)',
				'&::placeholder': {
					'color': 'var(--tw-gray-600)',
				},
			},
			'&:active': {
				'color': 'var(--tw-gray-700)',
				'&::placeholder': {
					'color': 'var(--tw-gray-600)',
				},
				'box-shadow': 'none',
			},
			'&[disabled], &[readonly]': {
				'background-color': 'var(--tw-gray-100)',
				'color': 'var(--tw-gray-400)',
				'&::placeholder': {
					'color': 'var(--tw-gray-300)',
				},
			},
		},
		'.form-input-sm': {
			'font-weight': theme('custom.components.btn.sm.fontWeight'),
      'font-size': theme('custom.components.btn.sm.fontSize'),
			'height': theme('custom.components.btn.sm.height'),
      'padding-left': theme('custom.components.btn.sm.px'),
      'padding-right': theme('custom.components.btn.sm.px'), 
		},
		'.form-input-lg': {
			'font-weight': theme('custom.components.btn.lg.fontWeight'),
      'font-size': theme('custom.components.btn.lg.fontSize'),
			'height': theme('custom.components.btn.lg.height'),
      'padding-left': theme('custom.components.btn.lg.px'),
      'padding-right': theme('custom.components.btn.lg.px'), 
		},
	});
	
	// Form select

	// Form file

  // Form switch
  addComponents({
    '.form-switch': {
			'display': 'flex',
			'align-items': 'center',
			'gap': theme('spacing')['2.5'],
			'cursor': 'pointer',
			'input[type=checkbox]': {				
				'display': 'flex',
				'appearance': 'none',
				'background-color': 'var(--tw-gray-300)',
				'position': 'relative',
				'cursor': 'pointer',
				'height': '1.375rem',
				'width': '2.125rem',
				'border-radius': '1.375rem',
				'transition': 'all .15s ease-in-out',
				'&:before': {
					'display': 'flex',
					'position': 'absolute',
					'content': '""',
					'height': '1rem',
					'width': '1rem',
					'border-radius': '100%',
					'background-color': 'var(--tw-light-light)',
					'left': '0.25rem',
					'top': '50%',
					'transform': 'translateY(-50%)',
					'filter': 'drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.03))',
					'transition': 'all .15s ease-in-out',
				},
				'&:checked': {
					'background-color': 'var(--tw-primary)',
					'transition': 'all .15s ease-in-out',
					'&:before': {
						'transition': 'all .15s ease-in-out',
						'left': 'calc(100% - 0.25rem)',
						'transform': 'translate(-100%, -50%)',
						'filter': 'none',
					},
					'& + .form-switch-label': {
						'color': 'var(--tw-gray-600)',
					}
				},
				'&[disabled]': {				
					'pointer': 'not-allowed',					
					'opacity': '0.5',
					'&:before': {
						'filter': 'none',
					},
					'& + .form-switch-label': {
						'pointer': 'not-allowed',
						'color': 'var(--tw-gray-500)',
					},
				},
			},
			'.form-switch-label': {
				'color': 'var(--tw-gray-900)',
				'font-size': theme('fontSize.sm'),			
				'font-weight': theme('fontWeight.medium'),
				'line-height': theme('lineHeight.4'),
			},	
    },
    '.form-switch-sm': {
			'input[type=checkbox]': {
				'height': '1.125rem',
				'width': '1.875rem',
				'border-radius': '1.125rem',
				'&:before': {
					'height': '0.75rem',
					'width': '0.75rem',
				},
			},
			'.form-switch-label': {
				'font-size': theme('fontSize.2xs'),		
			}
    },
    '.form-switch-lg': {
			'input[type=checkbox]': {
				'height': '1.625rem',
				'width': '2.375rem',
				'border-radius': '1.625rem',
				'&:before': {
					'height': '1.25rem',
					'width': '1.25rem',
				},
			},
			'.form-switch-label': {
				'font-size': theme('fontSize.2sm'),		
			},
    },
  });  

	// Form switch variants
	addVariant('form-switch-on', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[type="checkbox"]:checked ~ .${e(`form-switch-on${separator}${className}`)}`;
      });
    },
		({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[type="checkbox"]:checked ~ * .${e(`form-switch-on${separator}${className}`)}`;
      });
    },
		({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[type="checkbox"]:not(:checked) ~ .${e(`form-switch-off${separator}${className}`)}`;
      });
    },
		({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[type="checkbox"]:not(:checked) ~ * .${e(`form-switch-off${separator}${className}`)}`;
      });
    },
  ]);

	// Form checkbox

	// Form radio

	// Form range
});