export interface IPermissionsCheckItem {
  module: string;
  view: boolean;
  modify: boolean;
  publish: boolean;
  configure: boolean;
}
export interface IPermissionsCheckItems extends Array<IPermissionsCheckItem> {}
