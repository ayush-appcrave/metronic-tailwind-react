/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';


export default plugin(({addVariant, addComponents, e, theme}) => {
  addVariant('modal-open', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.open.${e(`modal-open${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.open .${e(`modal-open${separator}${className}`)}`;
      });
    },
  ]);

  addComponents({
		'.modal': {
			'display': 'none',
			'position': 'fixed',
			'overflow-y': 'auto',
			'z-index': '100',
			'left': '50%',
			'top': '0',
    	'transform': 'translate(-50%, 0)',
			'&.open': {
				'display': 'flex',
			},
		},

		'.modal-centered': {
			'top': '50%',
			'transform': 'translate(-50%, -50%)',
		},

		'.modal-content': {
			'opacity': '0',
			'display': 'flex',
			'flex-grow': '1',
			'flex-direction': 'column',
			'box-shadow': 'var(--tw-modal-box-shadow)', 
			'background-color': 'var(--tw-modal-background-color)', 
			'border-radius': theme('custom.components.common.borderRadius.modal'),      
			'border': '1px solid var(--tw-gray-200)',  
			'transition': 'all 1300ms ease',
			'transition-duration': '1300ms',
			'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
		},

		'.modal.open .modal-content': {
			'opacity': '1',
			'transition-property': 'all',
			'transition-duration': '1300ms',
			'transition-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
		},

		'.modal-header': {
			'display': 'flex',
			'align-items': 'center',
			'justify-content': 'space-between',
			'border-bottom': '1px solid var(--tw-gray-200)',
			'padding-left': theme('spacing')['7.5'],
			'padding-right': theme('spacing')['7.5'],
			'padding-top': theme('spacing.3'),
			'padding-bottom': theme('spacing.3'),
		},

		'.modal-title': {
			'font-size': theme('fontSize.base'),
			'font-weight': theme('fontWeight.semibold'),
			'color': 'var(--tw-gray-900)',
		},
		
		'.modal-body': {
			'padding-left': theme('spacing')['7.5'],
			'padding-right': theme('spacing')['7.5'],
			'padding-top': theme('spacing.5'),
			'padding-bottom': theme('spacing.5'),
		},
		
		'.modal-footer': {
			'display': 'flex',
			'align-items': 'center',
			'justify-content': 'between',
			'border-top': '1px solid var(--tw-gray-200)',
			'padding-left': theme('spacing')['7.5'],
			'padding-right': theme('spacing')['7.5'],
			'padding-top': theme('spacing.3'),
			'padding-bottom': theme('spacing.3'),
		},
		
		'.modal-table': {
			'.table': {
				'th:first-child, td:first-child': {
					'padding-left': theme('spacing')['7.5'],
				},
				'th:last-child, td:last-child': {
					'padding-right': theme('spacing')['7.5'],
				},
			},        
		},
  });   
});