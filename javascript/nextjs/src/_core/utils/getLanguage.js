import { LANGUAGES } from '../config';

export const getLanguage = (lang) => {
	LANGUAGES.forEach(each => {
		if (each.value === lang) {
			return {
				langugeLabel: each.langugeLabel,
				langugeDirection: each.langugeDirection,
				langugeValue: each.langugeValue,
				languageSystemValue: each.languageSystemValue,				
				langugeIcon: each.langugeIcon,
			};
		}
	});

	return {
		langugeLabel: null,
		langugeDirection: null,
		langugeValue: null,
		languageSystemValue: null,		
		langugeIcon: null,
	};
};