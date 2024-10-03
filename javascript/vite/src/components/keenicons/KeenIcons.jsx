import clsx from 'clsx';
import { memo } from 'react';
import { useSettings } from '../../providers/SettingsProvider';
const KeenIconComponent = ({ icon, style, className = '' }) => {
	const { settings } = useSettings();
	if (typeof style === 'undefined') {
		style = settings.keeniconsStyle;
	}
	return <i className={clsx(`ki-${style}`, `ki-${icon}`, className)}></i>;
};
const KeenIcon = memo(KeenIconComponent);
export { KeenIcon };
