export interface IApiIntegrationsItem {
  integration: string;
  apiKey: string;
  dailyCalls: string;
  actions: React.ReactNode;
}
export interface IApiIntegrationsItems extends Array<IApiIntegrationsItem> {}
