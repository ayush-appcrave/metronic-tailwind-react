// Importing the KeenIconsStyleType type from the keenicons types file
import { type KeenIconsStyleType } from '../components/keenicons/types';

// Defining a union type for the possible theme modes: light, dark, or system mode
export type SettingsModeType = 'light' | 'dark' | 'system';

// Defining a union type for container layouts: default, fluid, or fixed
export type SettingsContainerType = 'default' | 'fluid' | 'fixed';

// Defining the type for paths as an object where the keys and values are both strings
export type PathsType = Record<string, string>;

// Defining the ISettings interface that dictates the structure of the settings object
export interface ISettings {
  mode: SettingsModeType; // Theme mode (light, dark, system)
  container: SettingsContainerType; // Layout container type (default, fluid, fixed)
  keeniconsStyle: KeenIconsStyleType; // KeenIcons style type (outlined, filled, etc.) Learn more https://keenthemes.com/metronic/tailwind/docs/plugins/keenicons
}

// Default settings for the application
const defaultSettings: ISettings = {
  mode: 'light', // Default to light mode
  keeniconsStyle: 'filled', // Default to filled icon style.
  container: 'fixed' // Default to fixed container layout
};

// Exporting the defaultSettings object for use elsewhere in the application
export { defaultSettings };
