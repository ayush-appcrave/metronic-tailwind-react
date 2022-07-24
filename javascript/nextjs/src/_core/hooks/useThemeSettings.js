import { useContext } from 'react';
import { ThemeSettingsContext } from '../contexts/ThemeSettingsContext';

const useThemeSettings = () => useContext(ThemeSettingsContext);

export default useThemeSettings;
