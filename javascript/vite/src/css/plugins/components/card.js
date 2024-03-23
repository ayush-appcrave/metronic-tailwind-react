/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  // Base
  addComponents({
    '.card': {
      'display': 'flex',
      'flex-direction': 'column',
      'box-shadow': 'var(--tw-card-box-shadow)', 
      'background-color': 'var(--tw-card-background-color)', 
      'border-radius': theme('custom.components.common.borderRadius.card'),      
      'border': theme('custom.components.card.border'),  
    },
    '.card-title': {
      'font-size': theme('fontSize.base'),
      'font-weight': theme('fontWeight.semibold'),
      'color': 'var(--tw-gray-900)',
    },
    '.card-header': {
      'display': 'flex',
      'min-height': '56px',
      'align-items': 'center',
      'justify-content': 'space-between',
      'border-bottom': theme('custom.components.card.border'),
      'padding-left': theme('custom.components.card.px'),
      'padding-right': theme('custom.components.card.px'),
      'padding-top': theme('custom.components.card.py.header'),
      'padding-bottom': theme('custom.components.card.py.header'),
    },
    '.card-body': {
      'flex-grow': '1',
      'padding-left': theme('custom.components.card.px'),
      'padding-right': theme('custom.components.card.px'),
      'padding-top': theme('custom.components.card.py.body'),
      'padding-bottom': theme('custom.components.card.py.body'),
    },
    '.card-footer': {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'between',
      'border-top': theme('custom.components.card.border'),
      'padding-left': theme('custom.components.card.px'),
      'padding-right': theme('custom.components.card.px'),
      'padding-top': theme('custom.components.card.py.footer'),
      'padding-bottom': theme('custom.components.card.py.footer'),
    },
    '.card-table': {
      'table': {
        'th:first-child, td:first-child': {
          'padding-left': theme('custom.components.card.px'),
        },
        'th:last-child, td:last-child': {
          'padding-right': theme('custom.components.card.px'),
        },
      },        
    },
    '.card-group': {
      'padding-left': theme('custom.components.card.px'),
      'padding-right': theme('custom.components.card.px'),
      'padding-top': theme('custom.components.card.py.group'),
      'padding-bottom': theme('custom.components.card.py.group'),
      'border-bottom': theme('custom.components.card.border'),
      '&:last-child': {
        'border-bottom': '0',
      }, 
    },
  });   

  // Utilities
  addComponents({
    '.card-border': {
      'border': '1px solid var(--tw-gray-200)',
    },
    '.card-rounded-b': {
      'border-bottom-left-radius': theme('custom.components.common.borderRadius.card'),
      'border-bottom-right-radius': theme('custom.components.common.borderRadius.card'),
    },
    '.card-rounded-t': {
      'border-top-left-radius': theme('custom.components.common.borderRadius.card'),
      'border-top-right-radius': theme('custom.components.common.borderRadius.card'),
    },
  });  
});