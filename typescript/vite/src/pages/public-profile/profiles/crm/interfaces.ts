export interface ICRMGeneralInfoItem {
  label: string;
  info: string;
  type?: number;
}
export interface ICRMGeneralInfoItems extends Array<ICRMGeneralInfoItem> {}

export interface ICRMAttributesItem {
  label: string;
  info: string;
}
export interface ICRMAttributesItems extends Array<ICRMAttributesItem> {}

export interface ICRMDealsItem {
  name: string;
  ammount: string;
  date: number;
  label: string;
  color: string;
}
export interface ICRMDealsItems extends Array<ICRMDealsItem> {}

export interface ICRMRecentInvoicesItem {
  icon: string;
  number: string;
  date: string;
  ammount: string;
}
export interface ICRMRecentInvoicesItems extends Array<ICRMRecentInvoicesItem> {}
