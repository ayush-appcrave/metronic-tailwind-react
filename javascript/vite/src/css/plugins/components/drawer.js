/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';


export default plugin(({addVariant, addComponents, e, theme}) => {
  addVariant('drawer-open', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.open.${e(`drawer-open${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.open .${e(`drawer-open${separator}${className}`)}`;
      });
    },
  ]);

  addComponents({
		'.drawer': {
			'transition-property': 'transform',
			'transition-duration': '300ms',
			'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
			'&.open': {
				'display': 'flex',				
				'z-index': '100',
				'position': 'fixed',
				'box-shadow': 'var(--tw-drawer-box-shadow)', 
				'background-color': 'var(--tw-drawer-background-color)', 
				'transition-property': 'transform',
				'transition-duration': '300ms',
				'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
		},
		'.drawer-start': {
			'top': '0',
			'bottom': '0',
			'left': '0',
			'right': 'auto',
			'transform': 'translateX(-100%)',
			'&.drawer.open': {
				'transform': 'translateX(0)',
			}
		},
		'.drawer-end': {
			'top': '0',
			'bottom': '0',
			'right': '0',
			'left': 'auto',
			'transform': 'translateX(100%)',
			'&.drawer.open': {
				'transform': 'translateX(0)',
			}
		},
		'.drawer-top': {
			'top': '0',
			'bottom': 'auto',
			'left': '0',
			'right': '0',
			'transform': 'translateY(-100%)',
			'&.drawer.open': {
				'transform': 'translateY(0)',
			}
		},
		'.drawer-bottom': {
			'bottom': '0',
			'top': 'auto',
			'left': '0',
			'right': '0',
			'transform': 'translateY(100%)',
			'&.drawer.open': {
				'transform': 'translateY(0)',
			}
		},
  });   
});