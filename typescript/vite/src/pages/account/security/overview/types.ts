export interface IOverviewGeneralSettingsItem {
  icon: string;
  title: React.ReactNode;
  description: string;
  actions: React.ReactNode;
}
export interface IOverviewGeneralSettingsItems extends Array<IOverviewGeneralSettingsItem> {}

export interface IOverviewLoginSessionsItem {
  avatar: string;
  name: string;
  connections: number;
  location: string;
  recent: string;
}
export interface IOverviewLoginSessionsItems extends Array<IOverviewLoginSessionsItem> {}

export interface IOverviewProductInsightProps {
  image: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

export interface IOverviewQuickSettingsItem {
  icon: string;
  title: string;
  description: string;
  actions: React.ReactNode;
}
export interface IOverviewQuickSettingsItems extends Array<IOverviewQuickSettingsItem> {}

export interface IOverviewTrustedDevicesItem {
  logo: string;
  browser: string;
  location: string;
  flag: string;
  device: string;
  datetime: string;
}
export interface IOverviewTrustedDevicesItems extends Array<IOverviewTrustedDevicesItem> {}
