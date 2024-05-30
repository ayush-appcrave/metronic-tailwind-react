/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  addComponents({
    '.btn-group': {
      'display': 'inline-flex',
      'align-items': 'center',
      'line-height': '1',
      'border-radius': theme('custom.components.common.borderRadius.btn'), 
			'background-color': 'var(--tw-gray-100)',  
      'padding': theme('spacing')['0.75'],
      'gap': theme('spacing')['0.75'],
      'border': '1px dashed var(--tw-gray-200)',
			'color': 'var(--tw-gray-500)',
			'.btn': {
				'i': {
					'color': 'var(--tw-gray-400)',
				},
				'&:hover, &:focus, &:active, &.active' : {
					'background-color': 'var(--tw-light)',   
					'border': '1px dashed var(--tw-gray-200)',
					'color': 'var(--tw-gray-600)',
					'i': {
						'color': 'var(--tw-gray-500)',
					}
				}
			}
    }
  });
});