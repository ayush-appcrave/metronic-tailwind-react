export interface IWorksItem {
  url: string;
  title: string;
  description: string;
  image: string;
  authorName: string;
  authorAvatar: string;
  likes: number;
  comments: number;
}
export interface IWorksItems extends Array<IWorksItem> {}
