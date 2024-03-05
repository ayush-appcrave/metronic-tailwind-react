export interface IScrollspyMenuItem {
  title: string;
  url?: string;
  active?: boolean;
  children?: IScrollspyMenuItem[];
}

export interface IScrollspyMenuItems extends Array<IScrollspyMenuItem> {}

export interface IScrollspyMenuProps {
  items: IScrollspyMenuItem[];
  offset: string;
}
