/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from 'react';
import { defaultSettings } from '@/config/settings.config';
import { getData, setData } from '@/utils';
const SETTINGS_CONFIGS_KEY = 'settings-configs';
const getStoredSettings = () => {
	return getData(SETTINGS_CONFIGS_KEY) || {};
};
const initialProps = {
	settings: {
		...defaultSettings,
		...getStoredSettings(),
	},
	updateSettings: (settings) => {},
	storeSettings: (settings) => {},
	getMode: () => 'light',
};
const LayoutsContext = createContext(initialProps);
const useSettings = () => useContext(LayoutsContext);
const SettingsProvider = ({ children }) => {
	const [settings, setSettings] = useState(initialProps.settings);
	const updateSettings = (newSettings) => {
		setSettings({
			...settings,
			...newSettings,
		});
	};
	const storeSettings = (newSettings) => {
		setData(SETTINGS_CONFIGS_KEY, {
			...getStoredSettings(),
			...newSettings,
		});
		updateSettings(newSettings);
	};
	const getMode = () => {
		const { mode } = settings;
		if (mode === 'system') {
			return window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
		} else if (mode === 'dark') {
			return 'dark';
		} else {
			return 'light';
		}
	};
	return (
		<LayoutsContext.Provider
			value={{
				settings,
				updateSettings,
				storeSettings,
				getMode,
			}}>
			{children}
		</LayoutsContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export { SettingsProvider, useSettings };
