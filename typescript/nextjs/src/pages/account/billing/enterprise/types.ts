export interface IEnterpriseBillingInvoicingItem {
  number: string;
  date: string;
  ammount: string;
  label: string;
  color: string;
}
export interface IEnterpriseBillingInvoicingItems extends Array<IEnterpriseBillingInvoicingItem> {}

export interface IEnterpriseCompanyProfileItem {
  total: string;
  description: string;
}
export interface IEnterpriseCompanyProfileItems extends Array<IEnterpriseCompanyProfileItem> {}

export interface IEnterpriseLatestPaymentItem {
  status: string;
  logo?: boolean;
  info: string;
}
export interface IEnterpriseLatestPaymentItems extends Array<IEnterpriseLatestPaymentItem> {}

// export interface IGetStartedOptionsProps {
//   items: IGetStartedContentItem[];
//   dropdown: boolean;
// }
