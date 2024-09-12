interface ISubItem {
  path: string;
  title: string;
}

export interface IOptionsItem {
  icon: string;
  title: string;
  description: string;
  sub: ISubItem[];
}
export interface IOptionsItems extends Array<IOptionsItem> {}

export interface IOptionsProps {
  items: IOptionsItem[];
}
