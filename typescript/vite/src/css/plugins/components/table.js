/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
	// Base
  addComponents({
    '.table': {
			'width': '100%',
      'caption-side': 'bottom',
			'border-collapse': 'collapse',
			'vertical-align': 'middle',
			'text-align': 'left',
			'thead': {
				'vertical-align': 'bottom'
			},
			'tbody, td, tfoot, th, thead, tr': {
				'border-color': 'inherit',
				'border-style': 'solid',
				'border-width': '0',
			},
			'thead, tfoot': {
				'td, th': {
					'padding-left': theme('custom.components.table.px'),
					'padding-right': theme('custom.components.table.px'),
					'padding-top': theme('custom.components.table.py.head'),
					'padding-bottom': theme('custom.components.table.py.head'),
					'background-color': 'var(--tw-light-active)',
					'color': 'var(--tw-gray-600)',
					'font-weight': theme('fontWeight.medium'),
					'font-size': theme('fontSize.2sm'),
				},
			},
			'thead': {
				'td, th': {
					'border-bottom': theme('custom.components.table.border'),
				},
			},
			'tfoot': {
				'td, th': {
					'border-top': theme('custom.components.table.border'),
				},
			},
			'tbody': {
				'tr': {
					'td, th': {						
						'padding-left': theme('custom.components.table.px'),
						'padding-right': theme('custom.components.table.px'),
						'padding-top': theme('custom.components.table.py.body'),
						'padding-bottom': theme('custom.components.table.py.body'),						
						'border-bottom':  theme('custom.components.table.border'),
					},
					'&:last-child': {
						'td, th': {
							'border-bottom': '0',
						},
					},
				},	
			},
    },
  });   

	// Bordered
	addComponents({
    '.table-bordered': {
			'width': '100%',
			'td, th': {
				'border-bottom': theme('custom.components.table.border'),
			},
			'tr:last-child': {
				'td, th': {
					'border-bottom': '0'
				},
			},
    },
  });
});