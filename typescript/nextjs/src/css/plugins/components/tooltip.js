/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addVariant, addComponents, theme}) => {
	// Base	
  addComponents({
    '.tooltip': {
			'display': 'none',
      'box-shadow': 'var(--tw-tooltip-box-shadow)', 
      'background-color': 'var(--tw-tooltip-background-color)',
			'border-radius': theme('custom.components.common.borderRadius.tooltip'),
			'padding': theme('spacing.2'),
			'font-size': theme('fontSize.xs'),
			'&.show': {
				'display': 'flex',
			}
    },
  });   

	// Variants
	addVariant('tooltip-show', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.tooltip.show.${e(
				`tooltip-show${separator}${className}`,
			)}`;
		});
	});
});