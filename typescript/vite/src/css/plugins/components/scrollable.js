/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  addComponents({
    '.scrollable, .scrollable-y, .scrollable-x, .scrollable-hover, .scrollable-hover-y, .scrollable-hover-x, .scrollable-auto, .scrollable-y-auto, .scrollable-x-auto': {
      'scrollbar-width': 'thin',
      'scrollbar-color': 'transparent transparent',
      'position': 'relative',
      '&::-webkit-scrollbar': {
        'width': '6px',
        'height': '6px'
      },
      '&::-webkit-scrollbar-track': {
        'background-color': 'transparent'
      },
      '&::-webkit-scrollbar-thumb': {
        'border-radius': '4px',        
      },
      '&::-webkit-scrollbar-corner': {
        'background-color': 'transparent'
      }
    },
    '.scrollable, .scrollable-hover': {
      'overflow': 'scroll',
    },
    '.scrollable-y, .scrollable-hover-y': {
      'overflow-y': 'scroll',
    },
    '.scrollable-x, .scrollable-hover-x': {
      'overflow-x': 'scroll',
    },
    '.scrollable-auto': {
      'overflow': 'auto',
    },
    '.scrollable-y-auto': {
      'overflow-y': 'auto',
    },
    '.scrollable-x-auto': {
      'overflow-x': 'auto',
    },
    '.scrollable, .scrollable-y, .scrollable-x, .scrollable-auto, .scrollable-y-auto, .scrollable-x-auto, .scrollable-hover:hover, .scrollable-hover-y:hover, .scrollable-hover-x:hover': {
      'scrollbar-color': 'var(--scrollbar-thumb-color, var(--tw-gray-200)) transparent',      
      '&::-webkit-scrollbar-thumb': {
        'background-color': 'var(--scrollbar-thumb-color, var(--tw-gray-200))', 
      },
      '&::-webkit-scrollbar-corner': {
        'background-color': 'transparent'
      }
    },
    [`@media (max-width: ${theme('screens.lg')})`]: {
      '.scrollable, .scrollable-hover': {
        'overflow': 'auto',
      },
      '.scrollable-y, .scrollable-hover-y': {
        'overflow-y': 'auto',
      },
      '.scrollable-x, .scrollable-hover-x': {
        'overflow-x': 'auto',
      },
    },
  });
});