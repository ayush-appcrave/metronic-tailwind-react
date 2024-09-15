export interface IPrivacySettingsBlockListItem {
  avatar: string;
  name: string;
  commits: number;
}
export interface IPrivacySettingsBlockListItems extends Array<IPrivacySettingsBlockListItem> {}

export interface IPrivacySettingsBlockListProps {
  text: string;
  limit?: number;
  className?: string;
}

export interface IPrivacySettingsManageDataItem {
  title: string;
  description: string;
  control: React.ReactNode;
}
export interface IPrivacySettingsManageDataItems extends Array<IPrivacySettingsManageDataItem> {}

export interface IPrivacySettingsPrivacySettingsItem {
  icon: string;
  title: React.ReactNode;
  description: string;
  actions: React.ReactNode;
}
export interface IPrivacySettingsPrivacySettingsItems
  extends Array<IPrivacySettingsPrivacySettingsItem> {}

export interface IPrivacySettingsReportSettingsItem {
  title: string;
  description: string;
  checked: boolean;
}
export interface IPrivacySettingsReportSettingsItems
  extends Array<IPrivacySettingsReportSettingsItem> {}

export interface IPrivacySettingsReportSettingsProps {
  limit?: number;
  className?: string;
}
