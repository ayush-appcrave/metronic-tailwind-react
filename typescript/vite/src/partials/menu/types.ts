export interface IScrollspyMenuItem {
  title?: string;
  path?: string;
  active?: boolean;
  children?: IScrollspyMenuItem[];
}

export type ScrollspyMenuItemsType = IScrollspyMenuItem[];

export interface IScrollspyMenuProps {
  items: ScrollspyMenuItemsType;
}
