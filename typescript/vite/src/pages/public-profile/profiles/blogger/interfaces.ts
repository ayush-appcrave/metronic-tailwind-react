export interface ICreatorStatisticsItem {
  title: string;
  value: string;
}
export interface ICreatorStatisticsItems extends Array<ICreatorStatisticsItem> {}

export interface IBloggerCollaborateProps {
  title: string;
  url: string;
}

export interface IBloggerPostsItem {
  image: string;
  label: string;
  description: string;
  time: string;
}
export interface IBloggerPostsItems extends Array<IBloggerPostsItem> {}

export interface IBloggerPostsProps {
  url: string;
}

export interface IBloggerRepliesItem {
  borderColor: string;
  date: string;
  comments: number;
  text: string;
}
export interface IBloggerRepliesItems extends Array<IBloggerRepliesItem> {}
