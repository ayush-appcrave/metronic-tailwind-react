/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addBase, theme}) => {

	const getGrayColors = (mode) => {
		const gray = theme('custom.base.colors.gray')[mode];
		const vars = {};

		for (const variant of Object.keys(gray)) {
			vars[`--tw-gray-${variant}`] = gray[variant];
		}

		return vars;
	}

	const getDefaultGrayColors = (mode) => {
		const gray = theme('custom.base.colors.gray')[mode];
		const vars = {};

		for (const variant of Object.keys(gray)) {
			vars[`--tw-gray-${variant}-${mode}`] = gray[variant];
		}

		return vars;
	}

	const getContextualColors = (mode) => {
		const contextual = theme('custom.base.colors.contextual')[mode];
		const vars = {};

		for (const variant of Object.keys(contextual)) {
			for (const state of Object.keys(contextual[variant])) {
				const color = contextual[variant][state];

				vars[`--tw-${variant}${state == 'default' ? '' : '-' + state}`] = color;
			}
		}

		return vars;
	}

	const getDefaultContextualColors = (mode) => {
		const contextual = theme('custom.base.colors.contextual')[mode];
		const vars = {};

		for (const variant of Object.keys(contextual)) {
			for (const state of Object.keys(contextual[variant])) {
				const color = contextual[variant][state];

				vars[`--tw-${variant}${state == 'default' ? '' : '-' + state}-${mode}`] = color;
			}
		}

		return vars;
	}

	const getComponentBackgroundColors = (mode) => {
		const colors = theme('custom.components.common.backgrounds')[mode];
		const vars = {};

		for (const variant of Object.keys(colors)) {
			vars[`--tw-${variant}-background-color`] = colors[variant];
		}

		return vars;
	}

  addBase({
    ':root': {
			...getDefaultGrayColors('light'), 
			...getDefaultGrayColors('dark'), 
			...getDefaultContextualColors('light'), 
			...getDefaultContextualColors('dark')
		}
  });

	addBase({
    ':root, light': {
			...getGrayColors('light'),
			...getContextualColors('light'),
			...getComponentBackgroundColors('light')
		}
  });

	addBase({
    '.dark': {
			...getGrayColors('dark'),
			...getContextualColors('dark'),
			...getComponentBackgroundColors('dark')
		}
  });
});