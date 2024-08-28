export interface ISettingsSidebarAuthSocialSignInItem {
  logo: string;
  title: string;
  email: string;
  checkbox: boolean;
}
export interface ISettingsSidebarAuthSocialSignInItems
  extends Array<ISettingsSidebarAuthSocialSignInItem> {}

export interface ISettingsSidebarAuthSocialSignInBlock {
  logo: string;
  title: string;
}
export interface ISettingsSidebarAuthSocialSignInBlocks
  extends Array<ISettingsSidebarAuthSocialSignInBlock> {}

export interface ISettingsSidebarAuthSingleSingOnItem {
  logo: string;
  title: string;
  size: string;
}
export interface ISettingsSidebarAuthSingleSingOnItems
  extends Array<ISettingsSidebarAuthSingleSingOnItem> {}

export interface ISettingsSidebarAuthTwoFactorItem {
  icon: string;
  title: string;
  description: string;
  checkbox: boolean;
}
export interface ISettingsSidebarAuthTwoFactorItems
  extends Array<ISettingsSidebarAuthTwoFactorItem> {}

export interface ISettingsSidebarAdvancedSettingsAppearanceItem {
  image: string;
  logo?: string;
  label: string;
  checked: boolean;
}
export interface ISettingsSidebarAdvancedSettingsAppearanceItems
  extends Array<ISettingsSidebarAdvancedSettingsAppearanceItem> {}

export interface ISettingsSidebarAdvancedSettingsNotificationsItem {
  title: string;
  description: string;
  icon: boolean;
}
export interface ISettingsSidebarAdvancedSettingsNotificationsItems
  extends Array<ISettingsSidebarAdvancedSettingsNotificationsItem> {}

export interface ISettingsSidebarExternalServicesIntegrationsItem {
  logo: string;
  title: string;
  email: string;
  description: string;
  checkbox: boolean;
}
export interface ISettingsSidebarExternalServicesIntegrationsItems
  extends Array<ISettingsSidebarExternalServicesIntegrationsItem> {}

export interface ISettingsSidebarExternalServicesManageApiProps {
  title: string;
  switch: boolean;
}
