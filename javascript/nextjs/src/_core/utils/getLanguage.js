import { LANGUAGES } from '../../config';

export default function getLanguage(lang) {
	LANGUAGES.forEach(each => {
		if (each.languageValue === lang) {
			return {
				languageLabel: each.languageLabel,
				languageDirection: each.languageDirection,
				languageValue: each.languageValue,
				languageSystemValue: each.languageSystemValue,				
				languageIcon: each.languageIcon,
			};
		}
	});

	return {
		languageLabel: null,
		languageDirection: null,
		languageValue: null,
		languageSystemValue: null,		
		languageIcon: null,
	};
};