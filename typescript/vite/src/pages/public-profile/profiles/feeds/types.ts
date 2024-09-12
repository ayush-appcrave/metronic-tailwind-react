export interface ICommentsItem {
  avatar: string;
  author: string;
  date: string;
  text: string;
}
export interface ICommentsItems extends Array<ICommentsItem> {}
