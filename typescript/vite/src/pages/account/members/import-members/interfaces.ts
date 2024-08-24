export interface IImportItem {
  label: string;
  description: string;
  checked: boolean;
}
export interface IImportItems extends Array<IImportItem> {}
