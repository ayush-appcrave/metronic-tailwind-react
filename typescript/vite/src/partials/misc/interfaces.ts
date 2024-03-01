export interface IHighlightedPostsItem {
  icon: string;
  title: string;
  summary: string;
  path: string;
}
export interface IHighlightedPostsItems extends Array<IHighlightedPostsItem> {}

export interface IHighlightedPostsProps {
  posts: IHighlightedPostsItem[];
}
