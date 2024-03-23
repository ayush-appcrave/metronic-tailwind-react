/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addBase, theme}) => {
	const getComponentsBoxShadows = (mode) => {
		const boxShadows = theme('custom.components.common.boxShadows')[mode];
		const vars = {};

		for (const variant of Object.keys(boxShadows)) {
			vars[`--tw-${variant}-box-shadow`] = boxShadows[variant];
		}

		return vars;
	}

	const getContextualBoxShadows = (mode) => {
		const boxShadows = theme('custom.base.boxShadows')[mode];
		const vars = {};

		for (const variant of Object.keys(boxShadows)) {
			vars[`--tw-${variant}-box-shadow`] = boxShadows[variant];
		}

		return vars;
	}

  addBase({
    ':root, .light': {
			...getComponentsBoxShadows('light'),
			...getContextualBoxShadows('light')
		}
  });

	addBase({
		'.dark': {
			...getComponentsBoxShadows('dark'),
			...getContextualBoxShadows('dark')
		}
  });
});