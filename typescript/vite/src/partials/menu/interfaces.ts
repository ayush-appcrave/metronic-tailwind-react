export interface IScrollspyMenuItem {
  title?: string;
  path?: string;
  active?: boolean;
  children?: IScrollspyMenuItem[];
}

export interface IScrollspyMenuItems extends Array<IScrollspyMenuItem> {}

export interface IScrollspyMenuProps {
  items: IScrollspyMenuItems;
}
