export interface IIntegrationsItem {
  logo: string;
  path: string;
  name: string;
  description: string;
  actions: React.ReactNode;
}
export interface IIntegrationsItems extends Array<IIntegrationsItem> {}
