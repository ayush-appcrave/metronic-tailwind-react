export interface ISettingsEnterpriseAccountProps {
  title: string;
}

export interface ISettingsEnterpriseAuthTwoFactorItem {
  icon: string;
  title: string;
  description: string;
  checkbox: boolean;
}
export interface ISettingsEnterpriseAuthTwoFactorItems
  extends Array<ISettingsEnterpriseAuthTwoFactorItem> {}

export interface ISettingsEnterpriseYourCurrentPlanItem {
  title: string;
  summary: string;
  link: string;
  path: string;
}
export interface ISettingsEnterpriseYourCurrentPlanItems
  extends Array<ISettingsEnterpriseYourCurrentPlanItem> {}

export interface ISettingsEnterprisePaymentHistoryItem {
  date: string;
  type: string;
  amount: string;
}
export interface ISettingsEnterprisePaymentHistoryItems
  extends Array<ISettingsEnterprisePaymentHistoryItem> {}

export interface ISettingsEnterpriseConnection {
  avatar: string;
  name: string;
  connections: number | 'none';
  jointLinks: number | 'none';
}
export interface ISettingsEnterpriseConnections
  extends Array<ISettingsEnterpriseConnection> {}
