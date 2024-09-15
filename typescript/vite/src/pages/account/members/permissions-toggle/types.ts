export interface IPermissionsToggleItem {
  icon: string;
  title: string;
  description: string;
  checked: boolean;
}
export interface IPermissionsToggleItems extends Array<IPermissionsToggleItem> {}
