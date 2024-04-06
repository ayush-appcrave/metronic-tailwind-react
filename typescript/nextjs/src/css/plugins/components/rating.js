/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, addVariant, e, theme}) => {
  // Base
  addComponents({
    '.rating': {
      'display': 'inline-flex',
      'align-items': 'center', 
      'input': {
        'position': 'absolute',
        'left': '9999px',
        '&[disabled]': {
          'display': 'none',
        }
      }
    },
    '.rating-on': {
      'color': 'var(--tw-warning)',
    },
    '.rating-off': {
      'color': 'var(--tw-gray-400)',
    },
    '.rating-label': {
      'display': 'inline-flex',
      'align-items': 'center',
      '.rating-on': {
        'display': 'none',
      },
      '.rating-off': {
        'display': 'inline-flex',
      },
    },
    '.rating-input:hover .rating-label, .rating-input input[type="radio"]:checked ~ .rating-label, .rating-label.checked': {
      '.rating-on': {
        'display': 'inline-flex',
      },
      '.rating-off': {
        'display': 'none',
      },
    },
    '.rating-input .rating-label:hover ~ .rating-label': {
      '.rating-on': {
        'display': 'none',
      },
      '.rating-off': {
        'display': 'noinline-flexne',
      },
    },    
    '.rating-label.indeterminate': {
      'position': 'relative',
      '.rating-on': {
        'display': 'inline-flex',
        'position': 'absolute',
        'z-index': '1',
        'overflow': 'hidden',
      },
      '.rating-off': {
        'display': 'inline-flex',
      },
    },
  });    
});