export interface ICommentsItem {
  avatar: string;
  author: string;
  date: string;
  text: string;
}
export interface ICommentsItems extends Array<ICommentsItem> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILikesItem {}
export interface ILikesItems extends Array<ILikesItem> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISavesItem {}
export interface ISavesItems extends Array<ISavesItem> {}
