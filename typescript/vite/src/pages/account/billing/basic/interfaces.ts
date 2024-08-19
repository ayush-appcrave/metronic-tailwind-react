export interface IBasicContentItem {
  icon: string;
  title: string;
  summary: string;
  path: string;
}
export interface IBasicContentItems extends Array<IBasicContentItem> {}

export interface IBasicPlanItem {
  total: string;
  description: string;
}
export interface IBasicPlanItems extends Array<IBasicPlanItem> {}

export interface IBasicBillingDetailsItem {
  status: string;
  info: string;
}
export interface IBasicBillingDetailsItems extends Array<IBasicBillingDetailsItem> {}

export interface IBasicBillingInvoicingItem {
  number: string;
  date: string;
  ammount: string;
  label: string;
  color: string;
}
export interface IBasicBillingInvoicingItems extends Array<IBasicBillingInvoicingItem> {}

export interface IBasicPaymentMethodsItem {
  logo: string;
  title: string;
  email: string;
  label: boolean;
}
export interface IBasicPaymentMethodsItems extends Array<IBasicPaymentMethodsItem> {}

export interface IBasicPaymentMethodsProps {
  icon?: string;
}
